const Dec = require('decimal.js');

const {assetProto, assets} = require('./assets');
exports.assets = assets;

const {ilks} = require('./ilks');
exports.ilks = ilks;

const utils = require('./util');
exports.utils = utils;

const {stringToBytes, bytesToString, compare} = utils;

/**
 * @param symbol
 * @return {{symbol: string, address: string, decimals: number, name: string, icon: function, underlyingAsset: string, ilk: string|null, exchange: boolean, mcdCollateral: boolean, compoundCollateral: boolean, aaveCollateral: boolean}}
 */
exports.getAssetInfo = (symbol = '') => assets.find(t => t.symbol.toLowerCase() === symbol.toLowerCase()) || console.error(`Asset "${symbol}" not found `) || {...assetProto};

exports.getIlkInfo = (ilk = '') => {
  const _ilk = (ilk.substr(0, 2) === '0x' ? bytesToString(ilk) : ilk).toUpperCase();
  return ilks.find(i => i.ilk === _ilk) || console.error(`Ilk "${ilk}" not found `) || { ilk, asset: exports.ilkToAsset(ilk) };
}

exports.getAssetInfoByAddress = (address = '') => assets.find(t => t.address.toLowerCase() === address.toLowerCase()) || console.error(`Asset with addess "${address}" not found `) || {...assetProto};

exports.ilkToAsset = ilk => (ilk.substr(0, 2) === '0x' ? bytesToString(ilk) : ilk).replace(/-.*/, '');

exports.exchangeAssets = assets.filter(t => t.exchange);

exports.mcdCollateralTypes = ['ETH-A', 'BAT-A', 'USDC-A', 'USDC-B', 'WBTC-A', 'ZRX-A', 'KNC-A', 'MANA-A', 'PAXUSD-A', 'COMP-A', 'LRC-A', 'LINK-A']; // 'USDT-A'

exports.mcdCollateralAssets = exports.mcdCollateralTypes.map((ilkLabel) => {
  const ilk = stringToBytes(ilkLabel);
  const asset = assets.find(a => a.symbol === exports.ilkToAsset(ilk));
  return {
    ...asset,
    ilk,
    ilkLabel,
  };
});

exports.compoundCollateralAssets = assets.filter(t => t.compoundCollateral);
exports.aaveCollateralAssets = assets.filter(t => t.aaveCollateral);

exports.getCompoundAssetInfoFromUnderlying = (_underlyingAsset) => exports.compoundCollateralAssets.find(({ underlyingAsset }) => underlyingAsset === _underlyingAsset);

exports.tokenFromJoin = (join) => {
  for (const ilkInfo of ilks) {
    if (compare(ilkInfo.join, join)) return ilkInfo.asset;
  }
  if (compare('0x448a5065aebb8e423f0896e6c5d525c040f59af3', join)) return 'ETH'; // SCD ETH
  return '';
}

/**
 * @param amount {Number, String, Object}
 * @param asset {String} Symbol or `MCD-${symbol}` for
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
 * @param amount {Number, String, Object}
 * @param asset {String}
 * @return {String}
 */
exports.assetAmountInWei = (amount, asset) => {
  const {decimals} = exports.getAssetInfo(asset);

  return new Dec(amount && amount.toString() || 0).mul(10 ** decimals).floor().toString();
};
