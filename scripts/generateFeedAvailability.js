const Web3 = require('web3');
const fs = require('fs').promises;
const path = require('path');

const { assets } = require('../umd/index');

const web3Mainnet = new Web3(process.env.MAINNET_RPC);
const web3Optimism = new Web3(process.env.ARBITRUM_RPC);
const web3Arbitrum = new Web3(process.env.OPTIMISM_RPC);

const tokenPriceHelperAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"feedRegistry","outputs":[{"internalType":"contract IFeedRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"}],"name":"getAaveTokenPriceInETH","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"}],"name":"getAaveTokenPriceInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_inputTokenAddr","type":"address"}],"name":"getAddrForChainlinkOracle","outputs":[{"internalType":"address","name":"tokenAddrForChainlinkUsage","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_inputTokenAddr","type":"address"}],"name":"getChainlinkPriceInUSD","outputs":[{"internalType":"int256","name":"price","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_inputTokenAddr","type":"address"}],"name":"getPriceInETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_inputTokenAddr","type":"address"}],"name":"getPriceInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_inputTokenAddr","type":"address"},{"internalType":"uint80","name":"_roundId","type":"uint80"},{"internalType":"contract IAggregatorV3","name":"aggregator","type":"address"}],"name":"getRoundInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"updateTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_inputTokenAddr","type":"address"},{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"updateTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int256","name":"_btcPrice","type":"int256"}],"name":"getWBtcPrice","outputs":[{"internalType":"int256","name":"wBtcPrice","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int256","name":"_stEthPrice","type":"int256"}],"name":"getWStEthPrice","outputs":[{"internalType":"int256","name":"wStEthPrice","type":"int256"}],"stateMutability":"view","type":"function"}];
const gasFeeHelperL2Abi = [{"inputs":[],"name":"NonContractCall","type":"error"},{"inputs":[],"name":"ReturnIndexValueError","type":"error"},{"inputs":[],"name":"SenderNotAdmin","type":"error"},{"inputs":[],"name":"SenderNotOwner","type":"error"},{"inputs":[],"name":"SubIndexValueError","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"logName","type":"string"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"ActionEvent","type":"event"},{"inputs":[],"name":"MAX_DFS_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NO_PARAM_MAPPING","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RETURN_MAX_INDEX_VALUE","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RETURN_MIN_INDEX_VALUE","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SANITY_GAS_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SUB_MAX_INDEX_VALUE","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SUB_MIN_INDEX_VALUE","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"actionType","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"adminVault","outputs":[{"internalType":"contract AdminVault","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_gasUsed","type":"uint256"},{"internalType":"address","name":"_feeToken","type":"address"},{"internalType":"uint256","name":"_l1GasCostInEth","type":"uint256"}],"name":"calcGasCost","outputs":[{"internalType":"uint256","name":"txCost","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"_callData","type":"bytes"},{"internalType":"bytes32[]","name":"_subData","type":"bytes32[]"},{"internalType":"uint8[]","name":"_paramMapping","type":"uint8[]"},{"internalType":"bytes32[]","name":"_returnValues","type":"bytes32[]"}],"name":"executeAction","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes","name":"_callData","type":"bytes"}],"name":"executeActionDirect","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"feeRecipient","outputs":[{"internalType":"contract FeeRecipient","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"}],"name":"getTokenPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"kill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"logger","outputs":[{"internalType":"contract DefisaverLogger","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"_callData","type":"bytes"}],"name":"parseInputs","outputs":[{"components":[{"internalType":"uint256","name":"gasUsed","type":"uint256"},{"internalType":"address","name":"feeToken","type":"address"},{"internalType":"uint256","name":"availableAmount","type":"uint256"},{"internalType":"uint256","name":"dfsFeeDivider","type":"uint256"},{"internalType":"uint256","name":"l1GasCostInEth","type":"uint256"}],"internalType":"struct GasFeeTakerL2.Params","name":"inputData","type":"tuple"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"registry","outputs":[{"internalType":"contract DFSRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_receiver","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawStuckFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const gasFeeTakerL1Address = '0x80536cb79341972a5Ef679dF5B70bB4A40a53d96';
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

    return `symbol: '${symbol}',\n    feedAvailability: ${ JSON.stringify(priceAvailabilityMap[symbol]).replaceAll('"', '')},`;
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

    const updatedAssetsFile  = assetsFile.replace(/symbol: '(\w*)', (feedAvailability: \{[\d\s:truefalse,]*\},)?/g,
    (_, symbol) => formatFeedAvailability(symbol, priceAvailabilityMap));

    await fs.writeFile(filePath, updatedAssetsFile, 'utf-8');

    console.log('assets.ts updated!')
})();
