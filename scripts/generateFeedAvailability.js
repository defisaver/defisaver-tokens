const Web3 = require('web3');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const { assets } = require('../umd/index');

const web3Mainnet = new Web3(process.env.MAINNET_RPC);
const web3Optimism = new Web3(process.env.OPTIMISM_RPC);
const web3Arbitrum = new Web3(process.env.ARBITRUM_RPC);

const tokenPriceHelperAbi = [{"inputs":[{"internalType":"address","name":"_inputTokenAddr","type":"address"}],"name":"getPriceInETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

const gasFeeTakerL1Address = '0xBa2e5E56A92e93Cc0Cd84626cf762E6B2b30349b';
const gasFeeTakerOptimismAddress = '0x116bDD4ac57c83Bc5bB6ec7e8d00f787f3D2CA0d';
const gasFeeTakerArbitrumAddress = '0x560ECFEd1EfABf9EE19C47Dc93AAd973e03A7C42';

const tokenPriceMainnet = new web3Mainnet.eth.Contract(tokenPriceHelperAbi, gasFeeTakerL1Address);
const tokenPriceOptimism = new web3Optimism.eth.Contract(tokenPriceHelperAbi, gasFeeTakerOptimismAddress);
const tokenPriceArbitrum = new web3Arbitrum.eth.Contract(tokenPriceHelperAbi, gasFeeTakerArbitrumAddress);

async function getPrice(asset) {
    const feedAvailability = {};

    if (asset.addresses[1]) {
        const mainnetPrice = await tokenPriceMainnet.methods.getPriceInETH(asset.addresses[1]).call();
        if (mainnetPrice.toString() !== '0') feedAvailability[1] = true;
    }

    // l2 version might revert if token not found, l1 does not
    try {
        if (asset.addresses[10]) {
            const opPrice = await tokenPriceOptimism.methods.getPriceInETH(asset.addresses[10]).call();
            if (opPrice.toString() !== '0') feedAvailability[10] = true;
        }

    } catch (err) {}

    try {
        if (asset.addresses[42161]) {
            const arbPrice = await tokenPriceArbitrum.methods.getPriceInETH(asset.addresses[42161]).call();
            if(arbPrice.toString() !== '0') feedAvailability[42161] = true;
        }

    } catch (err) {}

    return feedAvailability;

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

    const updatedAssetsFile  = assetsFile.replace(/symbol: '(\w*)',(\s+feedAvailability: \{[\d\s:truefalse,]*\},)?/g,
    (_, symbol) => formatFeedAvailability(symbol, priceAvailabilityMap));

    await fs.writeFile(filePath, updatedAssetsFile, 'utf-8');

    console.log('assets.ts updated!')
})();
