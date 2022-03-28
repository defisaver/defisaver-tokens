type Config = {
  network: number,
  iconFunc: ((props: object) => () => string) | undefined,
}

type AddressMapping = {
  [key: number]: string
}

/**
 * Chain-agnostic asset info type
 */
type AssetDataBase = {
  symbol: string;
  name: string;
  addresses: AddressMapping;
  decimals: number;
  icon: Function;
  underlyingAsset: string;
  exchange: boolean;
  compoundCollateral: boolean;
  aaveCollateral: boolean;
  yearnCollateral: boolean;
  isStable: boolean;
};

/**
 * Chain-specific asset info type
 */
type AssetData = {
  symbol: string;
  name: string;
  address: string;
  addresses: AddressMapping;
  decimals: number;
  icon: Function;
  underlyingAsset: string;
  exchange: boolean;
  compoundCollateral: boolean;
  aaveCollateral: boolean;
  yearnCollateral: boolean;
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
  isCrop: (boolean);
  assetAddress?: (string);
};

type AaveMarketData = {
  name: (string);
  lendingPool: (string);
  lendingPoolAddressProvider: (string);
  dataProvider: (string);
};

type ExtendedIlkData = IlkData | { assetData: AssetData }

export {
  AddressMapping,
  AssetDataBase,
  AssetData,
  IlkData,
  ExtendedIlkData,
  AaveMarketData,
  Config,
}
