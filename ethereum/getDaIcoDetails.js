import web3 from "./web3";
import Daico from "./build/DAICOCampaign.json";

export default address => {
	return new web3.eth.Contract(JSON.parse(Daico.interface), address);
};
