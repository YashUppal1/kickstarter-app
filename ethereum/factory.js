import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x7aB92aAD57C3f5600eC5464b3A01C1F5BC64C919'
);

export default instance;