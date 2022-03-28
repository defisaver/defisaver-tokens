import Dec from 'decimal.js';
import {assetProto, assets} from './assets';
export {assets}
import {ilks} from './ilks';
export {ilks}
import {reflexerCollTypes} from './reflexerCollTypes';
export {reflexerCollTypes}
import {aaveV2Markets} from './aaveV2Markets';
export {aaveV2Markets}

import type {AaveMarketData, AssetDataBase, AssetData, ExtendedIlkData, IlkData, AddressMapping, Config} from './types';
export type {AaveMarketData, AssetDataBase, AssetData, ExtendedIlkData, IlkData, AddressMapping};

import {stringToBytes, bytesToString, compare} from './utils';

const config: Config = {
  iconFunc: undefined,
  network: 1,
}

export const set = (key: string, value: any):void => {
  (config as any)[key] = value;
}

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

const _addChainSpecificData = (assetDataBase:AssetDataBase):AssetData => {
  const assetData = {
    ...assetDataBase,
    address: assetDataBase.addresses[config.network] || ''
  };
  if (config.iconFunc) assetData.icon = config.iconFunc({ ...assetData });
  return assetData;
}

/**
 * Returns asset info.
 * Warning: will not throw if asset not found. Instead, will return a placeholder object.
 *
 * @param symbol {string}
 * @return {AssetData}
 */
export const getAssetInfo = (symbol:string = ''):AssetData => {
  let assetData = assets.find(t => compare(t.symbol, handleWBTCLegacy(symbol)));
  if (!assetData) assetData = { ...assetProto };
  return _addChainSpecificData(assetData);
}

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
      isCrop: false,
    };
  }
  const assetData = getAssetInfo(ilkData.asset);
  return {
    ...ilkData,
    assetData,
  }
};

export const getAssetInfoByAddress = (address: string = ''):AssetData => {
  const assetDataBase = assets.find(t => t.addresses[config.network].toLowerCase() === address.toLowerCase());
  return _addChainSpecificData(assetDataBase || {...assetProto});
}

export const ilkToAsset = (ilk: string = ''):string => {
  let ilkLabel = ilk.substr(0, 2) === '0x' ? bytesToString(ilk) : ilk;
  let asset = ilkLabel.replace(/-.*/, '');
  if (ilkLabel.startsWith('PSM')) asset = ilkLabel.match(/^[A-Z]*-(.*)-[A-Z]*/)?.[1] || asset;
  if (asset === 'KNC') return 'KNCL';
  if (asset === 'PAXUSD' || asset === 'PAX') return 'USDP';
  if (asset === 'WSTETH') return 'wstETH';
  if (asset === 'CRVV1ETHSTETH') return 'steCRV';
  return asset;
}

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

  return new Dec(amount && amount.toString() || 0).div(10 ** decimals).toDP(decimals).toString();
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
