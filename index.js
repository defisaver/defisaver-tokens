const Dec = require('decimal.js');

const {assetProto, assets} = require('./assets');
const {ilks} = require('./ilks');
const utils = require('./util');

/**
 * @type {Array<{symbol: string, address: string, decimals: number, name: string, icon: function, underlyingAsset: string, exchange: boolean, compoundCollateral: boolean, aaveCollateral: boolean}>}
 */
exports.assets = assets;

/**
 * @type {Array<{ilkLabel: (string), pip: (string), join: (string), asset: (string), flip: (string), ilkBytes: (string)}>}
 */
exports.ilks = ilks;

exports.utils = utils;

const {stringToBytes, bytesToString, compare} = utils;

/**
 * Returns asset info
 *
 * @param symbol
 * @return {{symbol: string, address: string, decimals: number, name: string, icon: function, underlyingAsset: string, ilk: string|null, exchange: boolean, mcdCollateral: boolean, compoundCollateral: boolean, aaveCollateral: boolean}}
 */
exports.getAssetInfo = (symbol = '') => assets.find(t => compare(t.symbol, symbol)) || console.error(`Asset "${symbol}" not found `) || {...assetProto};

/**
 * Returns ilk info, and asset info in `assetData`
 *
 * @param ilk {string} Ilk encoded as string or as hex
 * @returns {{ilkLabel: (string), pip: (string), join: (string), asset: (string), flip: (string), ilkBytes: (string), assetData: {symbol: string, address: string, decimals: number, name: string, icon: Function, underlyingAsset: string, exchange: boolean, compoundCollateral: boolean, aaveCollateral: boolean}}}
 */
exports.getIlkInfo = (ilk = '') => {
  const _ilk = (ilk.substr(0, 2) === '0x' ? bytesToString(ilk) : ilk).toUpperCase();
  const ilkData = ilks.find(i => i.ilkLabel === _ilk) || console.error(`Ilk "${ilk}" not found `) || {
    ilkLabel: _ilk,
    ilkBytes: stringToBytes(_ilk),
    asset: exports.ilkToAsset(ilk)
  };
  const assetData = assets.getAssetInfo(ilkData.asset);
  return {
    ...ilkData,
    assetData,
  }
}

exports.getAssetInfoByAddress = (address = '') => assets.find(t => t.address.toLowerCase() === address.toLowerCase()) || console.error(`Asset with addess "${address}" not found `) || {...assetProto};

exports.ilkToAsset = ilk => (ilk.substr(0, 2) === '0x' ? bytesToString(ilk) : ilk).replace(/-.*/, '');

exports.exchangeAssets = assets.filter(t => t.exchange);

exports.compoundCollateralAssets = assets.filter(t => t.compoundCollateral);
exports.compoundAsset = (underlyingAsset) => `c${underlyingAsset.toUpperCase()}`;

exports.aaveCollateralAssets = assets.filter(t => t.aaveCollateral);
exports.aaveAsset = (underlyingAsset) => `a${underlyingAsset.toUpperCase()}`;

/**
 * @param join {string} Maker ilk join
 * @returns {string} Token symbol
 */
exports.tokenFromJoin = (join) => {
  for (const ilkInfo of ilks) {
    if (compare(ilkInfo.join, join)) return ilkInfo.asset;
  }
  if (compare('0x448a5065aebb8e423f0896e6c5d525c040f59af3', join)) return 'ETH'; // SCD ETH
  return '';
}

/**
 * @param amount {Number|String|Object} Amount in wei
 * @param asset {String} Asset symbol (or `MCD-${symbol}` for maker asset - always 18dec)
 * @return {String}
 */
exports.assetAmountInEth = (amount, asset = 'ETH') => {
  let decimals;

  // USDC/WBTC have 6/8 decimals but Vat is storing it in 18 decimal precision
  if (asset.substr(0, 4) === 'MCD-') decimals = 18;

  // Compound returns borrowing power in USD with 18 decimals
  else if (asset === 'USD') decimals = 18;

  else decimals = exports.getAssetInfo(asset).decimals;

  return new Dec(amount && amount.toString() || 0).div(10 ** decimals).toString();
};

/**
 * @param amount {Number|String|Object} Amount in eth
 * @param asset {String} Asset symbol
 * @return {String}
 */
exports.assetAmountInWei = (amount, asset) => {
  const {decimals} = exports.getAssetInfo(asset);

  return new Dec(amount && amount.toString() || 0).mul(10 ** decimals).floor().toString();
};
