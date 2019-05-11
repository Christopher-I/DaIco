import web3 from "./web3";
import ERC20 from "./build/DAICOERC20.json";

export default address => {
	return new web3.eth.Contract(JSON.parse(ERC20.interface), address);
};
