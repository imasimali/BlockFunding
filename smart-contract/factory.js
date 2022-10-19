import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x78567F2D69e0140D18336A15289A7ACb43E82a6F"
);

export default instance;
