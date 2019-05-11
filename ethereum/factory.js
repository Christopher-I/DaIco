import web3 from "./web3";
import CampaignFactory from "./build/DAICOFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0xeAA0Fd56617f27829925eeb7912057F4c5c2F26B"
);

export default instance;
