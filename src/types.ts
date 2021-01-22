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
  flip: (string);
  ilkBytes: (string);
  isLP: (boolean);
};

type ExtendedIlkData = IlkData | { assetData: AssetData }

export {
  AssetData,
  IlkData,
  ExtendedIlkData,
}
