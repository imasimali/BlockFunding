import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x2468EE879afa9cFCA0623ac6af1dF324A136DccA"
);

export default instance;
