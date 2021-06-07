/**
 * Asset info type
 */
type AssetData = {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  icon: Function;
  underlyingAsset: string;
  exchange: boolean;
  compoundCollateral: boolean;
  aaveCollateral: boolean;
  isStable: boolean;
};

/**
 * Maker ilk info type
 */
type IlkData = {
  ilkLabel: (string);
  pip: (string);
  join: (string);
  asset: (string);
  flip?: (string);
  clip?: (string);
  clipCalc?: (string);
  ilkBytes: (string);
  isLP: (boolean);
};

type AaveMarketData = {
  name: (string);
  lendingPool: (string);
  lendingPoolAddressProvider: (string);
  dataProvider: (string);
};

type ExtendedIlkData = IlkData | { assetData: AssetData }

export {
  AssetData,
  IlkData,
  ExtendedIlkData,
  AaveMarketData,
}
