import Dec from 'decimal.js';
Dec.set({
  rounding: Dec.ROUND_DOWN,
  toExpPos: 9e15,
  toExpNeg: -9e15,
});
import { assets as _assets, assetProto } from './assets.js';
import { ilks as _ilks } from './ilks.js';
import * as _utils from './utils.js';

/**
 * @type {Array<{ilkLabel: (string), pip: (string), join: (string), asset: (string), flip: (string), ilkBytes: (string)}>}
 */
export const ilks = _ilks;

/**
 * @type {Array<{symbol: string, address: string, decimals: number, name: string, icon: function, underlyingAsset: string, exchange: boolean, compoundCollateral: boolean, aaveCollateral: boolean}>}
 */
export const assets = _assets;

export const utils = _utils;


const {stringToBytes, bytesToString, compare} = utils;

/**
 * Returns asset info
 * Warning: Will not throw if ilk not found. Instead, will return a placeholder object.
 *
 * @param symbol
 * @return {{symbol: string, address: string, decimals: number, name: string, icon: function, underlyingAsset: string, ilk: string|null, exchange: boolean, mcdCollateral: boolean, compoundCollateral: boolean, aaveCollateral: boolean}}
 */
export const getAssetInfo = (symbol = '') => assets.find(t => compare(t.symbol, symbol)) || console.error(`Asset "${symbol}" not found `) || {...assetProto};

/**
 * Returns ilk info, and asset info in `assetData`
 * Warning: Will not throw if asset not found. Instead, will return a placeholder object.
 *
 * @param ilk {string} Ilk encoded as string or as hex
 * @returns {{ilkLabel: (string), pip: (string), join: (string), asset: (string), flip: (string), ilkBytes: (string), assetData: {symbol: string, address: string, decimals: number, name: string, icon: Function, underlyingAsset: string, exchange: boolean, compoundCollateral: boolean, aaveCollateral: boolean}}}
 */
export const getIlkInfo = (ilk = '') => {
  const _ilk = (ilk.substr(0, 2) === '0x' ? bytesToString(ilk) : ilk).toUpperCase();
  const ilkData = ilks.find(i => i.ilkLabel === _ilk) || console.error(`Ilk "${ilk}" not found `) || {
    ilkLabel: _ilk,
    ilkBytes: stringToBytes(_ilk),
    asset: ilkToAsset(ilk)
  };
  const assetData = getAssetInfo(ilkData.asset);
  return {
    ...ilkData,
    assetData,
  }
};

export const getAssetInfoByAddress = (address = '') => assets.find(t => t.address.toLowerCase() === address.toLowerCase()) || console.error(`Asset with addess "${address}" not found `) || {...assetProto};
export const ilkToAsset = ilk => (ilk.substr(0, 2) === '0x' ? bytesToString(ilk) : ilk).replace(/-.*/, '');
export const exchangeAssets = assets.filter(t => t.exchange);
export const compoundCollateralAssets = assets.filter(t => t.compoundCollateral);
export const compoundAsset = (underlyingAsset) => `c${underlyingAsset.toUpperCase()}`;
export const aaveCollateralAssets = assets.filter(t => t.aaveCollateral);
export const aaveAsset = (underlyingAsset) => `a${underlyingAsset.toUpperCase()}`;

/**
 * @param join {string} Maker ilk join
 * @returns {string} Token symbol
 */
export const tokenFromJoin = (join) => {
  for (const ilkInfo of ilks) {
    if (compare(ilkInfo.join, join)) return ilkInfo.asset;
  }
  if (compare('0x448a5065aebb8e423f0896e6c5d525c040f59af3', join)) return 'ETH'; // SCD ETH
  return '';
};

/**
 * @param amount {Number|String|Object} Amount in wei
 * @param asset {String} Asset symbol (or `MCD-${symbol}` for maker asset - always 18dec)
 * @return {String}
 */
export const assetAmountInEth = (amount, asset = 'ETH') => {
  let decimals;

  // USDC/WBTC have 6/8 decimals but Vat is storing it in 18 decimal precision
  if (asset.substr(0, 4) === 'MCD-') decimals = 18;

  // Compound returns borrowing power in USD with 18 decimals
  else if (asset === 'USD') decimals = 18;

  else decimals = getAssetInfo(asset).decimals;

  return new Dec(amount && amount.toString() || 0).div(10 ** decimals).toString();
};

/**
 * @param amount {Number|String|Object} Amount in eth
 * @param asset {String} Asset symbol
 * @return {String}
 */
export const assetAmountInWei = (amount, asset) => {
  const {decimals} = getAssetInfo(asset);

  return new Dec(amount && amount.toString() || 0).mul(10 ** decimals).floor().toString();
};
