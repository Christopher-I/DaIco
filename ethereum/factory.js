import web3 from "./web3";
import CampaignFactory from "./build/DAICOFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0x1150871bD6383910716E0cDCf90edF0E5ef40c0c"
);

export default instance;
