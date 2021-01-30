# @defisaver/tokens

## Table of contents

### Type aliases

- [AssetData](README.md#assetdata)
- [ExtendedIlkData](README.md#extendedilkdata)
- [IlkData](README.md#ilkdata)

### Variables

- [assets](README.md#assets)
- [ilks](README.md#ilks)
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

Defined in: [types.ts:4](https://github.com/DecenterApps/defisaver-tokens/blob/a2cd24a/src/types.ts#L4)

___

### ExtendedIlkData

Ƭ **ExtendedIlkData**: [*IlkData*](README.md#ilkdata) \| { `assetData`: [*AssetData*](README.md#assetdata)  }

Defined in: [types.ts:30](https://github.com/DecenterApps/defisaver-tokens/blob/a2cd24a/src/types.ts#L30)

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

Defined in: [types.ts:20](https://github.com/DecenterApps/defisaver-tokens/blob/a2cd24a/src/types.ts#L20)

## Variables

### assets

• `Const` **assets**: [*AssetData*](README.md#assetdata)[]

Defined in: [assets.ts:125](https://github.com/DecenterApps/defisaver-tokens/blob/a2cd24a/src/assets.ts#L125)

___

### ilks

• `Const` **ilks**: [*IlkData*](README.md#ilkdata)[]

Defined in: [ilks.ts:5](https://github.com/DecenterApps/defisaver-tokens/blob/a2cd24a/src/ilks.ts#L5)

___

### utils

• `Const` **utils**: *object*

#### Type declaration:

Name | Type | Value |
------ | ------ | ------ |
`bytesToString` | *function* | (`hex`: *string*) => *string* |
`compare` | *function* | (`a`: *string*, `b`: *string*) => *boolean* |
`stringToBytes` | *function* | (`str`: *string*) => *string* |

Defined in: [index.ts:9](https://github.com/DecenterApps/defisaver-tokens/blob/a2cd24a/src/index.ts#L9)

## Functions

### assetAmountInEth

▸ `Const`**assetAmountInEth**(`amount`: *string* \| *number* \| *object*, `asset?`: *string*): *string*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`amount` | *string* \| *number* \| *object* | - | Amount in wei   |
`asset` | *string* | 'ETH' | Asset symbol (or `MCD-${symbol}` for maker asset - always 18dec)   |

**Returns:** *string*

Defined in: [index.ts:79](https://github.com/DecenterApps/defisaver-tokens/blob/a2cd24a/src/index.ts#L79)

___

### assetAmountInWei

▸ `Const`**assetAmountInWei**(`amount`: *string* \| *number* \| *object*, `asset`: *string*): *string*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`amount` | *string* \| *number* \| *object* | Amount in eth   |
`asset` | *string* | Asset symbol   |

**Returns:** *string*

Defined in: [index.ts:98](https://github.com/DecenterApps/defisaver-tokens/blob/a2cd24a/src/index.ts#L98)

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

Defined in: [index.ts:24](https://github.com/DecenterApps/defisaver-tokens/blob/a2cd24a/src/index.ts#L24)

___

### getAssetInfoByAddress

▸ `Const`**getAssetInfoByAddress**(`address?`: *string*): [*AssetData*](README.md#assetdata)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`address` | *string* | '' |

**Returns:** [*AssetData*](README.md#assetdata)

Defined in: [index.ts:47](https://github.com/DecenterApps/defisaver-tokens/blob/a2cd24a/src/index.ts#L47)

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

Defined in: [index.ts:33](https://github.com/DecenterApps/defisaver-tokens/blob/a2cd24a/src/index.ts#L33)

___

### ilkToAsset

▸ `Const`**ilkToAsset**(`ilk`: *string*): *string*

#### Parameters:

Name | Type |
------ | ------ |
`ilk` | *string* |

**Returns:** *string*

Defined in: [index.ts:49](https://github.com/DecenterApps/defisaver-tokens/blob/a2cd24a/src/index.ts#L49)

___

### tokenFromJoin

▸ `Const`**tokenFromJoin**(`join`: *string*): *string*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`join` | *string* | Maker ilk join   |

**Returns:** *string*

Token symbol

Defined in: [index.ts:66](https://github.com/DecenterApps/defisaver-tokens/blob/a2cd24a/src/index.ts#L66)
