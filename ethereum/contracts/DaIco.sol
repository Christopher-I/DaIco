pragma solidity ^0.4.24;

// "DAICOFactory" contract deploys an instance of both the "DAICOERC20" and "DAICOCampaign" contracts

//"MAKER", "MKR", 20, 100, 2000,20000, 158229,167393,30,10,20000, 2000, 20

contract DAICOFactory {    
    
    address[] public deployedERC20s;    
    address[] public deployedDAICOs;    
    DAICOERC20 public newERC20;    
    
    
    // "DAICOFactory" instantiates the "DAICOERC20" contract   
    function createDAICOCampaign(string name, string symbol,uint minimumContribution,uint maximumContribution, uint softCap, uint hardCap,uint icoStartDate, uint icoEndDate,uint votePeriodInterval, uint tapRate, uint initSupply,
    uint daIcoAllocation, uint tokenPrice) public {
        
         newERC20 = new DAICOERC20(name, symbol, initSupply,daIcoAllocation, msg.sender);
         deployedERC20s.push(newERC20);
         
        //  address newDAICOCampaign = new DAICOCampaign(newERC20, campDesc, tokenCost,
        //  softCap, hardCap, msg.sender);
         
         address newDAICOCampaign = new DAICOCampaign(newERC20,name,symbol,minimumContribution,maximumContribution,
         softCap,hardCap,icoStartDate,icoEndDate,votePeriodInterval, tapRate, tokenPrice, msg.sender);
         
         
         deployedDAICOs.push(newDAICOCampaign);
    }
   
         function getDeployedDAICOs() public view returns(address [] memory) { 
             return deployedDAICOs;    
         }    
         
         function getdeployedERC20s() public view returns(address [] memory) {
             return deployedERC20s;    
         }   
         

}

// "DAICOERC20" defines the token specs and monitors all token holder information pre and post ETH raise up
contract DAICOERC20 {   
    // state variables    
    string public tokenName;    
    string public tokenSymbol;    
    uint public initSupply;
    uint public daIcoAllocation;
    address public founder;
    //    uint public tokenRaise;
    //    bool public raiseupCompleted;
    //    address public DIACOaddress;
    
    mapping(address => uint) public balances;    
    mapping(address => mapping(address => uint256)) public allowance;    
    address[] public holders;    
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    
    event Approval(address indexed _owner, address indexed _spender, uint256 _value    );    
    // constructor function    
    
    constructor(string _tokenName, string _tokenSymbol, uint _initSupply, uint _daIcoAllocation, address creator) public { 
        tokenName= _tokenName;  
        daIcoAllocation = _daIcoAllocation;
        tokenSymbol = _tokenSymbol;        
        initSupply = _initSupply;        
        founder = creator;        
        balances[founder] = _initSupply;
    
    
}  

function getSummary()public view returns(string, string, uint, uint, address, address){
    return (tokenName, tokenSymbol, initSupply,daIcoAllocation, address(this),founder);

}  



// sends tokens from one account (not necessarily the founder) to another account    
function transfer(address _to, uint256 _amount) public returns (bool success) {        
    require(balances[msg.sender] >= _amount);        
    balances[msg.sender] -= _amount;        
    balances[_to] += _amount;        
    emit Transfer(msg.sender, _to, _amount);        
    return true;
}    

// provides an allocation by the funder to another account ("_recipient")    
function approve(address _recipient, uint256 _amount) public returns (bool success) {        
    require(msg.sender == founder);        
    allowance[founder][_recipient] = _amount;        
    emit Approval(founder, _recipient, _amount);        
    return true;    
}

// allows an account to withdrawal a predefined allocation made by the founder    
    function transferFrom(uint256 _amount) public returns (bool success) {        
        require(_amount <= balances[founder]);        
        require(_amount <= allowance[founder][msg.sender]);
        balances[founder] -= _amount;        
        balances[msg.sender] += _amount;        
        allowance[founder][msg.sender] -= _amount;        
        emit Transfer(founder, msg.sender, _amount);        
        return true;    
    }
    }
    
    
    
    
    
    
    // "DAICOCampaign" administers the token sale, gathers and manitians the ETH, andmanages the eventual campaign
    contract DAICOCampaign { 
        
    // STATE VARIABLES 
    
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
    
    DAICOERC20 public ERC20Contract;  // "DAICOERC20" is a new data type, smart contract type 
    uint public status;
    string public name;
    string public symbol;
    string public campDesc;
    uint public approvalRating;
    uint public constant minimumVoteWeight = 0;
    uint public constant maximumNumberOfContributors = 100;
    uint public constant devTeamMinimumPercentangeDeposit = 5;
    uint public tapRate;
    uint public numberOfRates;
    uint [4] public ballotVotes;
    uint public whitelistCount;
    uint public icoStartDate;
    uint public icoEndDate;
    uint public softCap;
    uint public hardCap;
    //uint public contributionTotal;
    uint public minimumContribution;
    uint public maximumContribution;
    uint public nextVoteDate;
    uint public votePeriodInterval=30;
    uint public availableFundsForWithdrawal;
    uint public ballotPointer;
    uint public tokenPrice;    
    uint public tokensSold;    
    uint public raiseup;
    bool public tapReleaseOn;
    bool public lockChangesToParamaters;
    bool public minimumDeveloperDepositPaid;
    address public manager;
    address [] public contributorsList;
    Ballot [] public listOfBallots;
    tapChangeProposal [] public listOfTapChangeProposals;
    mapping (address => bool) public contributors;
    mapping(address=>contributionDetails) public whitelist;
    // enum RaiseUpStatus {active, complete, terminated}    
    // event Sell(address _buyer, uint _amount);
    

    //MODIFIERS
    modifier managerOnly(){
        require(msg.sender == manager,"Only the manager of this account can make changes");
        _;
    }
    modifier shareHolderOnly(){
       // require(confirmShareHolder(msg.sender),"Only share holder accounts can make changes");
        _;
    }
    
    // new DAICOCampaign(newERC20,name,symbol,minimumContribution,maximumContribution,
    //      softCap,hardCap,icoStartDate,icoEndDate,votePeriodInterval,tapRate,campDesc, tokenCost, msg.sender);
    
        
        constructor(DAICOERC20 _ERC20Contract,string _name, string _symbol, uint _minimumContribution, uint _maximumContribution,
        uint _softCap, uint _hardCap, uint _icoStartDate, uint _icoEndDate,uint _votePeriodInterval, uint _tapRate,
        uint _tokenPrice,        
        address _founder) public {        
            ERC20Contract = _ERC20Contract;        
            tokenPrice = _tokenPrice;        
            softCap = _softCap;        
            hardCap = _hardCap;        
            manager = _founder; 
            name = _name;
            symbol=_symbol;
            softCap = _softCap;
            hardCap = _hardCap;
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
            status = 0;                  //1 means pre-ico, 2 Ico, 3 DaIco stage
            numberOfRates = 1;
            
            listOfBallots.push(newBallot);
            }    
            
        //MAIN FUNCTIONS   

        function payDeposit(uint deposit)public payable{
           // require(deposit>=softCap,"deposit is too low");
           status = 1; 
        } 
        
        function rateManagment(uint rate)public {
            numberOfRates +=1;
            approvalRating = (rate+approvalRating)/numberOfRates;
        }
   
        
        function buyTokens(uint256 _numberOfTokens) public payable {        
            require(msg.value == multiply(_numberOfTokens, tokenPrice));        
            // "this" is of type address and refers to "DAICOCampaign" contract not of "DAICOERC20" contract        
            require(ERC20Contract.balances(this) >= _numberOfTokens);        
            require(ERC20Contract.transfer(msg.sender, _numberOfTokens));
            
            //require(minimumDeveloperDepositPaid, "Please deposit the developer minumum to activate DaIco");
            //require( now > icoStartDate,"ensure that ICO has began to contribute");
           // require( icoEndDate > now,"ICO is closed, it is too late to contribute");
            //require(whitelist[msg.sender].contribution <= maximumContribution ,"You have exceeded the maximum contribution limit");
            //require(whitelist[msg.sender].approved, "You need to be on the whitelist to contribute");
           // require(msg.value > minimumContribution, "Please enter an amount greater than the minimum contribution");
            //require((whitelist[msg.sender].contribution + msg.value) < maximumContribution, "You have exceeded the maximum contribution limit, try entering a lesser amount");
        
            if(status < 2){
                status==2;
            }
            
            lockChangesToParamaters = true;
            
            whitelist[msg.sender].timeOfContribution = now;
            if(!whitelist[msg.sender].contributed){
                whitelist[msg.sender].contributed = true;
                contributorsList.push(msg.sender);
                contributors[msg.sender] = true;
            }
            whitelist[msg.sender].contribution += msg.value;
                tokensSold += _numberOfTokens;
                raiseup += msg.value;        
                //emit Sell(msg.sender, _numberOfTokens);    
            
        }    
        
         //place votes to increase/decrease tap createRequest
    //-1 represents -25%, -2 represents -50%, -3 represents -100 and the same is the proportion for the positive numbers
    function voteForTapChange(uint index)public {
        status =2;
        //require(!listOfBallots[ballotPointer].complete,"voting is already completed for this ballot");
       // require(confirmVotingPeriod(),"Please try again during the next voting period");
        //require(0<=index && index<= 3,"Please enter a valid vote between 0-3");
       // require(!listOfBallots[ballotPointer].voted[msg.sender], "Address has already voted");
       // require(icoEndDate < now ,"ICO needs to complete before votes can be counted");
        //require(confirmShareHolder(msg.sender),"address need to be a shareHolder to vote");
        
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
    function endIco() public{
        status = 2;
    }
    
    function finalizeTapVote()public shareHolderOnly{
        status = 3;
        //require((nextVoteDate + 1 days) < now,"Voting period is not yet over");
       // require(!listOfBallots[ballotPointer].complete, "Vote has already been finalized for this ballot");
       // require(now > listOfBallots[ballotPointer].expiryDate,"Ballot period is still in session,please retry after ballot expiry date");
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
        //require(!proposal.votingComplete,"voting for this period is already complete, please propose during next voting period");
        proposal.description = description;
        proposal.tapChangeNumber = tapChangeNumber;
        
    }
    
     //GETTERS AND SETTERS
    //edit ico start and end date 
    function setIcoStartAndEndDate(uint _icoStartDate, uint _icoEndDate)public managerOnly{
       // require(checkIfParameterChangesArePossible(),"Parameters have been locked in and can not be changed right now");
        icoStartDate = _icoStartDate;
        icoEndDate = _icoEndDate;
    }
    
    //edit ico start and end date 
    function setIcoMaxAndMinContributionAmount(uint _maximumContribution, uint _minimumContribution)public managerOnly{
       // require(checkIfParameterChangesArePossible(),"Parameters have been locked in and can not be changed right now");
        maximumContribution = _maximumContribution;
        minimumContribution = _minimumContribution;
    }
    
    //edit ico start and end date 
    function setIcoSoftAndHardCap(uint _softCap, uint _hardCap)public managerOnly{
      //  require(checkIfParameterChangesArePossible());
        softCap = _softCap;
        hardCap = _hardCap;
    }
    
    //add addresses to whitelist
    function addAddressToWhiteList(address newAddress)public managerOnly{
        //require(!whitelist[newAddress].approved, "address has already been added to whitelist");
        //require(checkIfParameterChangesArePossible(),"Parameters have been locked in and can not be changed right now");
        //require(maximumNumberOfContributors >= whitelistCount,"maximum number of contributors has been reached on whitelist");
        whitelistCount++;
        whitelist[newAddress].approved = true;   
    }
    
    //remove address from whitelist
    function removeAddressFromWhiteList(address newAddress)public managerOnly{
       // require(checkIfParameterChangesArePossible(),"Parameters have been locked in and can not be changed right now");
       // require(whitelist[newAddress].approved,"address is not on whitelist");
        whitelistCount--;
        whitelist[newAddress].approved = false;   
    }
    
    function checkIfParameterChangesArePossible()internal view returns(bool){
       // require(icoStartDate > now ,"ICO has began, parameters have been locked in, changes can no longer be made ");
       // require(!lockChangesToParamaters, "parameters have been locked in, changes can no longer be made");
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
        
    function getTokenBalance() public view returns(uint) {        
            return ERC20Contract.balances(this);    
            
        }    
        
    function multiply(uint x, uint y) internal pure returns (uint z) {
            require(y == 0 || (z = x * y) / y == x);
            
        } 
        
    function getDescription()public view returns(string){
        return(campDesc);
    }

    function getRaisUpAndBalance() public view returns(uint,uint){
        return (this.balance, raiseup);
    }
    
    function editDescription(string desc) public managerOnly{
        campDesc = desc;
    }
        
        
    function getSummary()public view returns(string,string, uint, uint, uint, uint,uint,uint,uint,uint,address,address){
        
        return(
            name, symbol,minimumContribution, maximumContribution,softCap,hardCap,icoStartDate,icoEndDate,votePeriodInterval,tokenPrice,ERC20Contract, manager
            );
    }
        

    }














