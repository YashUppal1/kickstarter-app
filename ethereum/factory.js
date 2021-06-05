import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xBAF3087D00FF49BA53386d553381C59854dea3d3'
);

export default instance;