import Dec from 'decimal.js';
import {assetProto, assets} from './assets';
export {assets}
import {ilks} from './ilks';
export {ilks}
import {reflexerCollTypes} from './reflexerCollTypes';
export {reflexerCollTypes}
import {aaveV2Markets} from './aaveV2Markets';
export {aaveV2Markets}
import type {AaveMarketData, AssetData, ExtendedIlkData, IlkData} from './types';
export type {AssetData, ExtendedIlkData, IlkData};
import {stringToBytes, bytesToString, compare} from './utils';
export const utils = {stringToBytes, bytesToString, compare};

export const MAXUINT:string = '115792089237316195423570985008687907853269984665640564039457584007913129639935';

Dec.set({
  rounding: Dec.ROUND_DOWN,
  toExpPos: 9e15,
  toExpNeg: -9e15,
});

/**
 *
 * @param symbol {string}
 * @return symbol {string}
 */
const handleWBTCLegacy = (symbol:string = ''):string => (symbol === 'WBTC Legacy' ? 'WBTC' : symbol);

/**
 * Returns asset info.
 * Warning: will not throw if asset not found. Instead, will return a placeholder object.
 *
 * @param symbol {string}
 * @return {AssetData}
 */
export const getAssetInfo = (symbol:string = ''):AssetData => assets.find(t => compare(t.symbol, handleWBTCLegacy(symbol))) || console.error(`Asset "${symbol}" not found `) || {...assetProto};

/**
 * Returns Maker or Reflexer ilk info, and asset info as `assetData` attribute.
 * Warning: will not throw if ilk not found. Instead, will return a placeholder object.
 *
 * @param ilk {string} Ilk encoded as string or as hex
 * @returns {ExtendedIlkData}
 */
export const getIlkInfo = (ilk:string = ''):ExtendedIlkData => {
  const _ilk = (ilk.substr(0, 2) === '0x' ? bytesToString(ilk) : ilk).toUpperCase();
  const ilkData = ilks.find(i => i.ilkLabel === _ilk) || reflexerCollTypes.find(i => i.ilkLabel === _ilk);
  if (!ilkData) {
    console.error(`Ilk "${ilk}" not found`);
    return {
      ilkLabel: _ilk,
      ilkBytes: stringToBytes(_ilk),
      asset: ilkToAsset(ilk),
      pip: '',
      join: '',
      isLP: false,
    };
  }
  const assetData = getAssetInfo(ilkData.asset);
  return {
    ...ilkData,
    assetData,
  }
};

export const getAssetInfoByAddress = (address: string = ''):AssetData => assets.find(t => t.address.toLowerCase() === address.toLowerCase()) || console.error(`Asset with addess "${address}" not found `) || {...assetProto};

export const ilkToAsset = (ilk: string = ''):string => {
  let ilkLabel = ilk.substr(0, 2) === '0x' ? bytesToString(ilk) : ilk;
  if (ilkLabel === 'KNC-A') return 'KNCL';
  return ilkLabel.replace(/-.*/, '');
}

/** @private **/
export const compoundCollateralAssets:AssetData[] = assets.filter(t => t.compoundCollateral);
/** @private **/
export const aaveCollateralAssets:AssetData[] = assets.filter(t => t.aaveCollateral);
/** @private **/
export const exchangeAssets:AssetData[] = assets.filter(t => t.exchange);
/** @private **/
export const compoundAsset = (underlyingAsset: string):string => `c${underlyingAsset.toUpperCase()}`;
/** @private **/
export const aaveAsset = (underlyingAsset: string):string => `a${underlyingAsset.toUpperCase()}`;

/**
 * @param join {string} Maker or Reflexer ilk join
 * @param fromIlks {IlkData[]}
 * @returns {string} Token symbol
 */
export const tokenFromJoin = (join: string, fromIlks: IlkData[] = ilks): string => {
  for (const ilkInfo of fromIlks) {
    if (compare(ilkInfo.join, join)) return ilkInfo.asset;
  }
  if (compare('0x448a5065aebb8e423f0896e6c5d525c040f59af3', join)) return 'ETH'; // SCD ETH
  return '';
};

/**
 * @param join {string} Maker ilk join
 * @returns {string} Token symbol
 */
export const tokenFromMakerJoin = (join: string): string => tokenFromJoin(join, ilks);

/**
 * @param join {string} Reflexer ilk join
 * @returns {string} Token symbol
 */
export const tokenFromReflexerJoin = (join: string): string => tokenFromJoin(join, reflexerCollTypes);

export const getAaveV2MarketInfo = (name:string = ''):(AaveMarketData|void) => aaveV2Markets.find(i => i.name === name);

/**
 * @param amount {Number|String|Object} Amount in wei
 * @param asset {String} Asset symbol (or `MCD-${symbol}` for maker asset - always 18dec)
 * @return {String}
 */
export const assetAmountInEth = (amount: number | string | object, asset: string = 'ETH'): string => {
  if (amount?.toString() === 'Infinity') return MAXUINT;

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
export const assetAmountInWei = (amount: number | string | object, asset: string): string => {
  if (amount?.toString() === 'Infinity') return MAXUINT;

  const {decimals} = getAssetInfo(asset);

  return new Dec(amount && amount.toString() || 0).mul(10 ** decimals).floor().toString();
};
