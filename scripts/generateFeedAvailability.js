const Web3 = require('web3');
const fs = require('fs').promises;
const path = require('path');

const { assets } = require('../umd/index');

const web3Mainnet = new Web3(process.env.MAINNET_RPC);
const web3Optimism = new Web3(process.env.OPTIMISM_RPC);
const web3Arbitrum = new Web3(process.env.ARBITRUM_RPC);

const tokenPriceHelperAbi = [{"inputs":[{"internalType":"address","name":"_inputTokenAddr","type":"address"}],"name":"getPriceInETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const gasFeeHelperL2Abi = [{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"}],"name":"getTokenPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"}];

const gasFeeTakerL1Address = '0xBa2e5E56A92e93Cc0Cd84626cf762E6B2b30349b';
const gasFeeTakerOptimismAddress = '0xB3dB299622A9DB0E944ccda2Ef899d6fF365B082';
const gasFeeTakerArbitrumAddress = '0x2F64f73B222B4978CAfd0295c0fa106cE5f34996';

const tokenPriceMainnet = new web3Mainnet.eth.Contract(tokenPriceHelperAbi, gasFeeTakerL1Address);
const tokenPriceOptimism = new web3Optimism.eth.Contract(gasFeeHelperL2Abi, gasFeeTakerOptimismAddress);
const tokenPriceArbitrum = new web3Arbitrum.eth.Contract(gasFeeHelperL2Abi, gasFeeTakerArbitrumAddress);

async function getPrice(asset) {
    const feedAvailability = {};

    if (asset.addresses[1]) {
        const mainnetPrice = await tokenPriceMainnet.methods.getPriceInETH(asset.addresses[1]).call();
        if (mainnetPrice.toString() !== '0') feedAvailability[1] = true;
    }

    // l2 version might revert if token not found, l1 does not
    try {
        if (asset.addresses[10]) {
            const opPrice = await tokenPriceOptimism.methods.getTokenPrice(asset.addresses[10]).call();
            if (opPrice.toString() !== '0') feedAvailability[10] = true;
        }

    } catch (err) {}

    try {
        if (asset.addresses[42161]) {
            const arbPrice = await tokenPriceArbitrum.methods.getTokenPrice(asset.addresses[42161]).call();
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
