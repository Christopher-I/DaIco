pragma solidity ^0.4.25;

    //"MAKER4","MKR3",10,500,100,20000,1557388256,1557388436,210,60

contract DaIcoFactory{
    //list of all succesfully deployed Daico contracts
    address [] listOfDeployedContracts;
    
    function createDaIco(string name, string symbol,uint minimumContribution,uint maximumContribution, uint softCap, uint hardCap,uint icoStartDate, uint icoEndDate,uint votePeriodInterval, uint tapRate)public payable{
        address contractAddress = address(new DaIco(name,symbol,minimumContribution,maximumContribution,softCap,hardCap,icoStartDate,icoEndDate,votePeriodInterval,tapRate, msg.sender));
        listOfDeployedContracts.push(contractAddress);
    }
    function getDeployedContracts()public view returns(address [] memory){
        return listOfDeployedContracts;
    }
}


contract DaIco {
//ballot structure
    struct Ballot{
        uint finalVote;
        uint voteCount;
        uint winVoteCount;
        bool complete;
        uint dateOfCompletion;
        uint creationDate;
        uint expiryDate;
        uint increase100xVoteCount;
        uint unchangeVoteCount;
        uint decrease100xVoteCount;
        uint selfdestructVoteCount;
        mapping(address=>bool) voted; //keeps track of who has voted
    }
    struct contributionDetails{
        uint contribution;
        bool contributed;
        bool approved;
        uint timeOfContribution;
    }
    struct tapChangeProposal{
        string description;
        uint tapChangeNumber;
        bool votingComplete;
        
    }
    uint public status;
    string public name;
    string public symbol;
    uint public approvalRating;
    uint public constant minimumVoteWeight = 0;
    uint public constant maximumNumberOfContributors = 100;
    uint public constant devTeamMinimumPercentangeDeposit = 5;
    uint public tapRate;
    uint [4] public ballotVotes;
    uint public whitelistCount;
    uint public icoStartDate;
    uint public icoEndDate;
    uint public softCap;
    uint public hardCap;
    uint public contributionTotal;
    uint public minimumContribution;
    uint public maximumContribution;
    uint public nextVoteDate;
    uint public votePeriodInterval;
    uint public availableFundsForWithdrawal;
    uint public ballotPointer;
    bool public tapReleaseOn;
    bool public lockChangesToParamaters;
    bool public minimumDeveloperDepositPaid;
    address public manager;
    address [] public contributorsList;
    Ballot [] public listOfBallots;
    tapChangeProposal [] public listOfTapChangeProposals;
    mapping (address => bool) public contributors;
    mapping(address=>contributionDetails) public whitelist;
    

    //MODIFIERS
    modifier managerOnly(){
        require(msg.sender == manager,"Only the manager of this account can make changes");
        _;
    }
    modifier shareHolderOnly(){
        require(confirmShareHolder(msg.sender),"Only share holder accounts can make changes");
        _;
    }
    
    //CONSTRUCTOR
    //assign the manager status to the creator of the contract 
     //The ico start and end date passed in as parameters are calculated as number of days from when this function is called
    constructor(string _name, string _symbol,uint _minimumContribution,uint _maximumContribution, uint _softCap, uint _hardCap,uint _icoStartDate, uint _icoEndDate,uint _votePeriodInterval,uint _tapRate, address sender) public payable{
        name = _name;
        symbol=_symbol;
        softCap = _softCap;
        hardCap = _hardCap;
        manager = sender;
        nextVoteDate = _icoEndDate;
        minimumContribution = _minimumContribution;
        maximumContribution = _maximumContribution;
        icoEndDate = _icoEndDate;
        icoStartDate = _icoStartDate;
        votePeriodInterval = _votePeriodInterval;
        tapRate = _tapRate;
        ballotPointer = 0;
        Ballot memory newBallot;
        newBallot.creationDate = now;
        newBallot.expiryDate = _icoEndDate;
        approvalRating = 5;
        status = 1;                  //1 means pre-ico, 2 Ico, 3 DaIco stage
        
        listOfBallots.push(newBallot);

    }
    
    //MAIN FUNCTIONS
    //pay a minimum deposit 
    function payDeveloperDeposit()public payable{
        require(msg.value > (devTeamMinimumPercentangeDeposit/100)*softCap,"Please enter a deposit amount greater than the minimum developer deposit");
        minimumDeveloperDepositPaid = true;
    }
    
    function updateStatus() public view {
        if (now <icoStartDate){
            status==1;
        }
        if (now > icoStartDate && now < icoEndDate){
            status==2;
        }
        
        if (now > icoEndDate){
            status==3;
        }
    }
    
    //accept contributions from Ico participants
    function contribute () public payable{
        require(minimumDeveloperDepositPaid, "Please deposit the developer minumum to activate DaIco");
        require( now > icoStartDate,"ensure that ICO has began to contribute");
        require( icoEndDate > now,"ICO is closed, it is too late to contribute");
        require(whitelist[msg.sender].contribution <= maximumContribution ,"You have exceeded the maximum contribution limit");
        require(whitelist[msg.sender].approved, "You need to be on the whitelist to contribute");
        require(msg.value > minimumContribution, "Please enter an amount greater than the minimum contribution");
        require((whitelist[msg.sender].contribution + msg.value) < maximumContribution, "You have exceeded the maximum contribution limit, try entering a lesser amount");
        
        if(status < 2){
            status==2;
        }
        
        lockChangesToParamaters = true;
        contributionTotal += msg.value;
        
        whitelist[msg.sender].timeOfContribution = now;
        if(!whitelist[msg.sender].contributed){
            whitelist[msg.sender].contributed = true;
            contributorsList.push(msg.sender);
            contributors[msg.sender] = true;
        }
        whitelist[msg.sender].contribution += msg.value;
        
    }
    
    //place votes to increase/decrease tap createRequest
    //-1 represents -25%, -2 represents -50%, -3 represents -100 and the same is the proportion for the positive numbers
    function voteForTapChange(uint index)public {
        require(!listOfBallots[ballotPointer].complete,"voting is already completed for this ballot");
       // require(confirmVotingPeriod(),"Please try again during the next voting period");
        require(0<=index && index<= 3,"Please enter a valid vote between 0-3");
        require(!listOfBallots[ballotPointer].voted[msg.sender], "Address has already voted");
        require(icoEndDate < now ,"ICO needs to complete before votes can be counted");
        require(confirmShareHolder(msg.sender),"address need to be a shareHolder to vote");
        
        listOfBallots[ballotPointer].voted[msg.sender] = true;    //mark address as voted
        listOfBallots[ballotPointer].voteCount++;   //increase number of voter count after every succesfull vote 
        
        if (index == 3){
            listOfBallots[ballotPointer].increase100xVoteCount++;
        }
         if (index == 2){
            listOfBallots[ballotPointer].unchangeVoteCount++;
        }
        if (index == 1){
            listOfBallots[ballotPointer].decrease100xVoteCount++;
        }
        if (index == 0){
            listOfBallots[ballotPointer].selfdestructVoteCount++;
        }
    }
    
    
    function confirmShareHolder(address claim)public view returns(bool){
         if(contributors[claim] && claim.balance > minimumVoteWeight){
         return true;
         }
    }
    
    function finalizeTapVote()public shareHolderOnly{
        //require((nextVoteDate + 1 days) < now,"Voting period is not yet over");
        require(!listOfBallots[ballotPointer].complete, "Vote has already been finalized for this ballot");
        require(now > listOfBallots[ballotPointer].expiryDate,"Ballot period is still in session,please retry after ballot expiry date");
        uint largest= 0;
        uint indexWinner;
        
            ballotVotes[3] = listOfBallots[ballotPointer].increase100xVoteCount;
            ballotVotes[2] = listOfBallots[ballotPointer].unchangeVoteCount;
            ballotVotes[1] = listOfBallots[ballotPointer].decrease100xVoteCount;
            ballotVotes[0] = listOfBallots[ballotPointer].selfdestructVoteCount;
        
        for (uint i=0; i<= 3 ; i++){
            if (ballotVotes[i]>largest) {
                 largest=ballotVotes[i];
                 indexWinner = i;
            }
        }
        listOfBallots[ballotPointer].winVoteCount = largest;
        listOfBallots[ballotPointer].finalVote = indexWinner;
        listOfBallots[ballotPointer].dateOfCompletion = now;
        listOfBallots[ballotPointer].complete = true;
        adjustTap(indexWinner);
    }
    
    function adjustTap(uint index) internal{
        uint rate;

        if (index == 3){
            rate= 2;
            tapRate = tapRate*rate;
        }else{
         if (index == 2){
            rate= 1;
        }
        if (index == 1){
            rate= 2;
        }
        if (index == 0){
            terminateContract();
        }
         tapRate = tapRate/rate;
        }
        
        tapReleaseOn = true; //open tap for widthraw function
        topUpAvailableFunds();
        updateNextVoteDate();
        createNewBallot();
    }
    
    function createNewBallot()internal{
        Ballot memory newBallot;
        newBallot.creationDate = now;
        newBallot.expiryDate = nextVoteDate;
        listOfBallots.push(newBallot);
        ballotPointer++;
    }
    
    function updateNextVoteDate()internal{
        nextVoteDate = now + votePeriodInterval;
    }
    
    function topUpAvailableFunds()internal {
    availableFundsForWithdrawal +=tapRate;
    }
    
    // function sumbitApprovalRating()shareHolderOnly{
        
    // }
    
    function withdraw() public managerOnly{
        require(availableFundsForWithdrawal >0, " there are no funds available to withdraw");
        require(tapReleaseOn,"Tap release is still off, ensure that votes have been finalized and calculated");
        tapReleaseOn = false;
        manager.transfer(availableFundsForWithdrawal);
        availableFundsForWithdrawal = 0;
    }
    
    function terminateContract()internal  {
        selfdestruct(manager);
    }
    
    function proposeTapChange(uint tapChangeNumber,string description )public managerOnly{
        tapChangeProposal storage proposal = listOfTapChangeProposals[ballotPointer];
        require(!proposal.votingComplete,"voting for this period is already complete, please propose during next voting period");
        proposal.description = description;
        proposal.tapChangeNumber = tapChangeNumber;
        
    }
    
     //GETTERS AND SETTERS
    //edit ico start and end date 
    function setIcoStartAndEndDate(uint _icoStartDate, uint _icoEndDate)public managerOnly{
        require(checkIfParameterChangesArePossible(),"Parameters have been locked in and can not be changed right now");
        icoStartDate = _icoStartDate;
        icoEndDate = _icoEndDate;
    }
    
    //edit ico start and end date 
    function setIcoMaxAndMinContributionAmount(uint _maximumContribution, uint _minimumContribution)public managerOnly{
        require(checkIfParameterChangesArePossible(),"Parameters have been locked in and can not be changed right now");
        maximumContribution = _maximumContribution;
        minimumContribution = _minimumContribution;
    }
    
    //edit ico start and end date 
    function setIcoSoftAndHardCap(uint _softCap, uint _hardCap)public managerOnly{
        require(checkIfParameterChangesArePossible());
        softCap = _softCap;
        hardCap = _hardCap;
    }
    
    //add addresses to whitelist
    function addAddressToWhiteList(address newAddress)public managerOnly{
        require(!whitelist[newAddress].approved, "address has already been added to whitelist");
        require(checkIfParameterChangesArePossible(),"Parameters have been locked in and can not be changed right now");
        require(maximumNumberOfContributors >= whitelistCount,"maximum number of contributors has been reached on whitelist");
        whitelistCount++;
        whitelist[newAddress].approved = true;   
    }
    
    //remove address from whitelist
    function removeAddressFromWhiteList(address newAddress)public managerOnly{
        require(checkIfParameterChangesArePossible(),"Parameters have been locked in and can not be changed right now");
        require(whitelist[newAddress].approved,"address is not on whitelist");
        whitelistCount--;
        whitelist[newAddress].approved = false;   
    }
    
    function checkIfParameterChangesArePossible()internal view returns(bool){
        require(icoStartDate > now ,"ICO has began, parameters have been locked in, changes can no longer be made ");
        require(!lockChangesToParamaters, "parameters have been locked in, changes can no longer be made");
        return true;
    }
    
    function getCurrentBallot()public view returns(uint,uint,uint,uint,uint,uint, uint){
        Ballot memory currentBallot = listOfBallots[ballotPointer];
        
        return(
            currentBallot.voteCount, currentBallot.creationDate, currentBallot.expiryDate, currentBallot.increase100xVoteCount,
            currentBallot.unchangeVoteCount,currentBallot.decrease100xVoteCount,currentBallot.selfdestructVoteCount
            );
    }
    
    function getCurrentProposal() public view returns(string,uint){
        tapChangeProposal memory currentTapChangeProposal = listOfTapChangeProposals[ballotPointer];
        
        
        return(
            currentTapChangeProposal.description,
            currentTapChangeProposal.tapChangeNumber
            );
    }


    function getSummary()public view returns(string,string, uint, uint, uint, uint, uint,uint,uint,uint,address){
        
        return(
            name, symbol,this.balance, minimumContribution, maximumContribution,softCap,hardCap,icoStartDate,icoEndDate,votePeriodInterval,manager
            );
    }
    
   
  
    
    
}