require('dotenv').config()
const Web3 = require('web3');
const fs = require('fs').promises;
const path = require('path');

const { assets } = require('../cjs');

const web3Mainnet = new Web3(process.env.MAINNET_RPC);
const web3Optimism = new Web3(process.env.OPTIMISM_RPC);
const web3Arbitrum = new Web3(process.env.ARBITRUM_RPC);
const web3Base = new Web3(process.env.BASE_RPC);

const tokenPriceHelperAbi = [{"inputs":[{"internalType":"address","name":"_inputTokenAddr","type":"address"}],"name":"getPriceInETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

const gasFeeTakerL1Address = '0xfaE5e10014Dc90A85ABdE21E0fa85CcB78521aB5';
const gasFeeTakerOptimismAddress = '0x116bDD4ac57c83Bc5bB6ec7e8d00f787f3D2CA0d';
const gasFeeTakerArbitrumAddress = '0x560ECFEd1EfABf9EE19C47Dc93AAd973e03A7C42';
const gasFeeTakerBaseAddress = '0xaee02caf404332c40fd7ff8d5c25f91f7c1641d0';

const tokenPriceMainnet = new web3Mainnet.eth.Contract(tokenPriceHelperAbi, gasFeeTakerL1Address);
const tokenPriceOptimism = new web3Optimism.eth.Contract(tokenPriceHelperAbi, gasFeeTakerOptimismAddress);
const tokenPriceArbitrum = new web3Arbitrum.eth.Contract(tokenPriceHelperAbi, gasFeeTakerArbitrumAddress);
const tokenPriceBase = new web3Base.eth.Contract(tokenPriceHelperAbi, gasFeeTakerBaseAddress);

async function getPrice(asset) {
  try{

    const feedAvailability = {};

    if (asset.addresses[1]) {
        const mainnetPrice = await tokenPriceMainnet.methods.getPriceInETH(asset.addresses[1]).call();
        if (mainnetPrice.toString() !== '0') feedAvailability[1] = true;
    }

    if (asset.addresses[10]) {
        const opPrice = await tokenPriceOptimism.methods.getPriceInETH(asset.addresses[10]).call();
        if (opPrice.toString() !== '0') feedAvailability[10] = true;
    }

    if (asset.addresses[42161]) {
        const arbPrice = await tokenPriceArbitrum.methods.getPriceInETH(asset.addresses[42161]).call();
        if(arbPrice.toString() !== '0') feedAvailability[42161] = true;
    }

    if (asset.addresses[8453]) {
        const basePrice = await tokenPriceBase.methods.getPriceInETH(asset.addresses[8453]).call();
        if(basePrice.toString() !== '0') feedAvailability[8453] = true;
    }

    return feedAvailability;
  } catch (e){
    console.error(e);
    console.error(`FAILED FOR ASSET ${asset.symbol}`)
  }

}

function formatFeedAvailability(symbol, priceAvailabilityMap) {
    const priceAvailability = priceAvailabilityMap[symbol];

    if (!priceAvailability || Object.keys(priceAvailability).length === 0) return `symbol: '${symbol}',`;
    return `symbol: '${symbol}',\n    feedAvailability: ${ JSON.stringify(priceAvailabilityMap[symbol], null, 1).replaceAll('"', '').replace(/\s+/g, ' ')},`;
}

(async () => {
    // fetch price availability
    const res = await Promise.all(assets.map(asset => getPrice(asset)));

    // map price availability to assets
    const priceAvailabilityMap = {};
    res.map((r, i) => priceAvailabilityMap[assets[i].symbol] = r);
    // update assets.ts
    const filePath = path.join(__dirname, '/../src/assets.ts');
    const assetsFile = await fs.readFile(filePath, 'utf-8');

    const updatedAssetsFile  = assetsFile.replace(/symbol: '(\w*)',(\s+feedAvailability: \{ [\d\s:truefalse,]*\ },)?/g,
    (_, symbol) => formatFeedAvailability(symbol, priceAvailabilityMap));

    await fs.writeFile(filePath, updatedAssetsFile, 'utf-8');

    console.log('assets.ts updated!')
})();
