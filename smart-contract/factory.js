import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x693EB96E35CDF215e2C781479e134FA30288887c"
);

export default instance;
