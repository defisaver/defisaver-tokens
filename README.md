# @defisaver/tokens

## Table of contents

### Type aliases

- [AssetData](README.md#assetdata)
- [ExtendedIlkData](README.md#extendedilkdata)
- [IlkData](README.md#ilkdata)

### Variables

- [MAXUINT](README.md#maxuint)
- [aaveV2Markets](README.md#aavev2markets)
- [assets](README.md#assets)
- [ilks](README.md#ilks)
- [reflexerCollTypes](README.md#reflexercolltypes)
- [utils](README.md#utils)

### Functions

- [assetAmountInEth](README.md#assetamountineth)
- [assetAmountInWei](README.md#assetamountinwei)
- [getAaveV2MarketInfo](README.md#getaavev2marketinfo)
- [getAssetInfo](README.md#getassetinfo)
- [getAssetInfoByAddress](README.md#getassetinfobyaddress)
- [getIlkInfo](README.md#getilkinfo)
- [ilkToAsset](README.md#ilktoasset)
- [tokenFromJoin](README.md#tokenfromjoin)
- [tokenFromMakerJoin](README.md#tokenfrommakerjoin)
- [tokenFromReflexerJoin](README.md#tokenfromreflexerjoin)

## Type aliases

### AssetData

Ƭ **AssetData**: { `aaveCollateral`: *boolean* ; `address`: *string* ; `compoundCollateral`: *boolean* ; `decimals`: *number* ; `exchange`: *boolean* ; `icon`: Function ; `isStable`: *boolean* ; `name`: *string* ; `symbol`: *string* ; `underlyingAsset`: *string* ; `yearnCollateral`: *boolean*  }

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
`yearnCollateral` | *boolean* |

Defined in: [types.ts:4](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/types.ts#L4)

___

### ExtendedIlkData

Ƭ **ExtendedIlkData**: [*IlkData*](README.md#ilkdata) \| { `assetData`: [*AssetData*](README.md#assetdata)  }

Defined in: [types.ts:40](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/types.ts#L40)

___

### IlkData

Ƭ **IlkData**: { `asset`: *string* ; `clip?`: *string* ; `clipCalc?`: *string* ; `flip?`: *string* ; `ilkBytes`: *string* ; `ilkLabel`: *string* ; `isLP`: *boolean* ; `join`: *string* ; `pip`: *string*  }

Maker ilk info type

#### Type declaration:

Name | Type |
------ | ------ |
`asset` | *string* |
`clip?` | *string* |
`clipCalc?` | *string* |
`flip?` | *string* |
`ilkBytes` | *string* |
`ilkLabel` | *string* |
`isLP` | *boolean* |
`join` | *string* |
`pip` | *string* |

Defined in: [types.ts:21](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/types.ts#L21)

## Variables

### MAXUINT

• `Const` **MAXUINT**: *string*= '115792089237316195423570985008687907853269984665640564039457584007913129639935'

Defined in: [index.ts:15](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/index.ts#L15)

___

### aaveV2Markets

• `Const` **aaveV2Markets**: AaveMarketData[]

Defined in: [aaveV2Markets.ts:3](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/aaveV2Markets.ts#L3)

___

### assets

• `Const` **assets**: [*AssetData*](README.md#assetdata)[]

Defined in: [assets.ts:375](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/assets.ts#L375)

___

### ilks

• `Const` **ilks**: [*IlkData*](README.md#ilkdata)[]

Defined in: [ilks.ts:5](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/ilks.ts#L5)

___

### reflexerCollTypes

• `Const` **reflexerCollTypes**: [*IlkData*](README.md#ilkdata)[]

Defined in: [reflexerCollTypes.ts:3](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/reflexerCollTypes.ts#L3)

___

### utils

• `Const` **utils**: *object*

#### Type declaration:

Name | Type |
------ | ------ |
`bytesToString` | (`hex`: *string*) => *string* |
`compare` | (`a`: *string*, `b`: *string*) => *boolean* |
`stringToBytes` | (`str`: *string*) => *string* |

Defined in: [index.ts:13](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/index.ts#L13)

## Functions

### assetAmountInEth

▸ `Const`**assetAmountInEth**(`amount`: *string* \| *number* \| *object*, `asset?`: *string*): *string*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`amount` | *string* \| *number* \| *object* | - | Amount in wei   |
`asset` | *string* | 'ETH' | Asset symbol (or `MCD-${symbol}` for maker asset - always 18dec)   |

**Returns:** *string*

Defined in: [index.ts:122](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/index.ts#L122)

___

### assetAmountInWei

▸ `Const`**assetAmountInWei**(`amount`: *string* \| *number* \| *object*, `asset`: *string*): *string*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`amount` | *string* \| *number* \| *object* | Amount in eth   |
`asset` | *string* | Asset symbol   |

**Returns:** *string*

Defined in: [index.ts:143](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/index.ts#L143)

___

### getAaveV2MarketInfo

▸ `Const`**getAaveV2MarketInfo**(`name?`: *string*): *void* \| AaveMarketData

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`name` | *string* | '' |

**Returns:** *void* \| AaveMarketData

Defined in: [index.ts:115](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/index.ts#L115)

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

Defined in: [index.ts:37](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/index.ts#L37)

___

### getAssetInfoByAddress

▸ `Const`**getAssetInfoByAddress**(`address?`: *string*): [*AssetData*](README.md#assetdata)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`address` | *string* | '' |

**Returns:** [*AssetData*](README.md#assetdata)

Defined in: [index.ts:67](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/index.ts#L67)

___

### getIlkInfo

▸ `Const`**getIlkInfo**(`ilk?`: *string*): [*ExtendedIlkData*](README.md#extendedilkdata)

Returns Maker or Reflexer ilk info, and asset info as `assetData` attribute.
Warning: will not throw if ilk not found. Instead, will return a placeholder object.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`ilk` | *string* | '' | Ilk encoded as string or as hex   |

**Returns:** [*ExtendedIlkData*](README.md#extendedilkdata)

Defined in: [index.ts:46](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/index.ts#L46)

___

### ilkToAsset

▸ `Const`**ilkToAsset**(`ilk?`: *string*): *string*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`ilk` | *string* | '' |

**Returns:** *string*

Defined in: [index.ts:69](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/index.ts#L69)

___

### tokenFromJoin

▸ `Const`**tokenFromJoin**(`join`: *string*, `fromIlks?`: [*IlkData*](README.md#ilkdata)[]): *string*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`join` | *string* | - | Maker or Reflexer ilk join   |
`fromIlks` | [*IlkData*](README.md#ilkdata)[] | ... |  |

**Returns:** *string*

Token symbol

Defined in: [index.ts:95](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/index.ts#L95)

___

### tokenFromMakerJoin

▸ `Const`**tokenFromMakerJoin**(`join`: *string*): *string*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`join` | *string* | Maker ilk join   |

**Returns:** *string*

Token symbol

Defined in: [index.ts:107](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/index.ts#L107)

___

### tokenFromReflexerJoin

▸ `Const`**tokenFromReflexerJoin**(`join`: *string*): *string*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`join` | *string* | Reflexer ilk join   |

**Returns:** *string*

Token symbol

Defined in: [index.ts:113](https://github.com/DecenterApps/defisaver-tokens/blob/485cb8c/src/index.ts#L113)
