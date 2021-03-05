# @defisaver/tokens

## Table of contents

### Type aliases

- [AssetData](README.md#assetdata)
- [ExtendedIlkData](README.md#extendedilkdata)
- [IlkData](README.md#ilkdata)

### Variables

- [MAXUINT](README.md#maxuint)
- [assets](README.md#assets)
- [reflexerCollTypes](README.md#reflexercolltypes)
- [utils](README.md#utils)

### Functions

- [assetAmountInEth](README.md#assetamountineth)
- [assetAmountInWei](README.md#assetamountinwei)
- [getAssetInfo](README.md#getassetinfo)
- [getAssetInfoByAddress](README.md#getassetinfobyaddress)
- [getIlkInfo](README.md#getilkinfo)
- [ilkToAsset](README.md#ilktoasset)
- [tokenFromJoin](README.md#tokenfromjoin)

## Type aliases

### AssetData

Ƭ **AssetData**: { `aaveCollateral`: *boolean* ; `address`: *string* ; `compoundCollateral`: *boolean* ; `decimals`: *number* ; `exchange`: *boolean* ; `icon`: Function ; `isStable`: *boolean* ; `name`: *string* ; `symbol`: *string* ; `underlyingAsset`: *string*  }

Asset info type

#### Type declaration:

Name | Type |
------ | ------ |
`aaveCollateral` | *boolean* |
`address` | *string* |
`compoundCollateral` | *boolean* |
`decimals` | *number* |
`exchange` | *boolean* |
`icon` | Function |
`isStable` | *boolean* |
`name` | *string* |
`symbol` | *string* |
`underlyingAsset` | *string* |

Defined in: [types.ts:4](https://github.com/DecenterApps/defisaver-tokens/blob/1cc3210/src/types.ts#L4)

___

### ExtendedIlkData

Ƭ **ExtendedIlkData**: [*IlkData*](README.md#ilkdata) \| { `assetData`: [*AssetData*](README.md#assetdata)  }

Defined in: [types.ts:30](https://github.com/DecenterApps/defisaver-tokens/blob/1cc3210/src/types.ts#L30)

___

### IlkData

Ƭ **IlkData**: { `asset`: *string* ; `flip`: *string* ; `ilkBytes`: *string* ; `ilkLabel`: *string* ; `isLP`: *boolean* ; `join`: *string* ; `pip`: *string*  }

Maker ilk info type

#### Type declaration:

Name | Type |
------ | ------ |
`asset` | *string* |
`flip` | *string* |
`ilkBytes` | *string* |
`ilkLabel` | *string* |
`isLP` | *boolean* |
`join` | *string* |
`pip` | *string* |

Defined in: [types.ts:20](https://github.com/DecenterApps/defisaver-tokens/blob/1cc3210/src/types.ts#L20)

## Variables

### MAXUINT

• `Const` **MAXUINT**: *string*= '115792089237316195423570985008687907853269984665640564039457584007913129639935'

Defined in: [index.ts:12](https://github.com/DecenterApps/defisaver-tokens/blob/1cc3210/src/index.ts#L12)

___

### assets

• `Const` **assets**: [*AssetData*](README.md#assetdata)[]

Defined in: [assets.ts:166](https://github.com/DecenterApps/defisaver-tokens/blob/1cc3210/src/assets.ts#L166)

___

### reflexerCollTypes

• `Const` **reflexerCollTypes**: [*IlkData*](README.md#ilkdata)[]

Defined in: [reflexerCollTypes.ts:3](https://github.com/DecenterApps/defisaver-tokens/blob/1cc3210/src/reflexerCollTypes.ts#L3)

___

### utils

• `Const` **utils**: *object*

#### Type declaration:

Name | Type | Value |
------ | ------ | ------ |
`bytesToString` | *function* | (`hex`: *string*) => *string* |
`compare` | *function* | (`a`: *string*, `b`: *string*) => *boolean* |
`stringToBytes` | *function* | (`str`: *string*) => *string* |

Defined in: [index.ts:10](https://github.com/DecenterApps/defisaver-tokens/blob/1cc3210/src/index.ts#L10)

## Functions

### assetAmountInEth

▸ `Const`**assetAmountInEth**(`amount`: *string* \| *number* \| *object*, `asset?`: *string*): *string*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`amount` | *string* \| *number* \| *object* | - | Amount in wei   |
`asset` | *string* | 'ETH' | Asset symbol (or `MCD-${symbol}` for maker asset - always 18dec)   |

**Returns:** *string*

Defined in: [index.ts:82](https://github.com/DecenterApps/defisaver-tokens/blob/1cc3210/src/index.ts#L82)

___

### assetAmountInWei

▸ `Const`**assetAmountInWei**(`amount`: *string* \| *number* \| *object*, `asset`: *string*): *string*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`amount` | *string* \| *number* \| *object* | Amount in eth   |
`asset` | *string* | Asset symbol   |

**Returns:** *string*

Defined in: [index.ts:103](https://github.com/DecenterApps/defisaver-tokens/blob/1cc3210/src/index.ts#L103)

___

### getAssetInfo

▸ `Const`**getAssetInfo**(`symbol?`: *string*): [*AssetData*](README.md#assetdata)

Returns asset info.
Warning: will not throw if asset not found. Instead, will return a placeholder object.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`symbol` | *string* | '' |

**Returns:** [*AssetData*](README.md#assetdata)

Defined in: [index.ts:27](https://github.com/DecenterApps/defisaver-tokens/blob/1cc3210/src/index.ts#L27)

___

### getAssetInfoByAddress

▸ `Const`**getAssetInfoByAddress**(`address?`: *string*): [*AssetData*](README.md#assetdata)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`address` | *string* | '' |

**Returns:** [*AssetData*](README.md#assetdata)

Defined in: [index.ts:50](https://github.com/DecenterApps/defisaver-tokens/blob/1cc3210/src/index.ts#L50)

___

### getIlkInfo

▸ `Const`**getIlkInfo**(`ilk?`: *string*): [*ExtendedIlkData*](README.md#extendedilkdata)

Returns Maker ilk info, and asset info as `assetData` attribute.
Warning: will not throw if ilk not found. Instead, will return a placeholder object.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`ilk` | *string* | '' | Ilk encoded as string or as hex   |

**Returns:** [*ExtendedIlkData*](README.md#extendedilkdata)

Defined in: [index.ts:36](https://github.com/DecenterApps/defisaver-tokens/blob/1cc3210/src/index.ts#L36)

___

### ilkToAsset

▸ `Const`**ilkToAsset**(`ilk?`: *string*): *string*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`ilk` | *string* | '' |

**Returns:** *string*

Defined in: [index.ts:52](https://github.com/DecenterApps/defisaver-tokens/blob/1cc3210/src/index.ts#L52)

___

### tokenFromJoin

▸ `Const`**tokenFromJoin**(`join`: *string*): *string*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`join` | *string* | Maker ilk join   |

**Returns:** *string*

Token symbol

Defined in: [index.ts:69](https://github.com/DecenterApps/defisaver-tokens/blob/1cc3210/src/index.ts#L69)
