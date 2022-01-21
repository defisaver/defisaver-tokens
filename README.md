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
- [set](README.md#set)
- [tokenFromJoin](README.md#tokenfromjoin)
- [tokenFromMakerJoin](README.md#tokenfrommakerjoin)
- [tokenFromReflexerJoin](README.md#tokenfromreflexerjoin)

## Type aliases

### AssetData

Ƭ **AssetData**: `Object`

Asset info type

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aaveCollateral` | `boolean` |
| `address` | `string` |
| `compoundCollateral` | `boolean` |
| `decimals` | `number` |
| `exchange` | `boolean` |
| `icon` | `Function` |
| `isStable` | `boolean` |
| `name` | `string` |
| `symbol` | `string` |
| `underlyingAsset` | `string` |
| `yearnCollateral` | `boolean` |

#### Defined in

[types.ts:4](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/types.ts#L4)

___

### ExtendedIlkData

Ƭ **ExtendedIlkData**: [`IlkData`](README.md#ilkdata) \| { `assetData`: [`AssetData`](README.md#assetdata)  }

#### Defined in

[types.ts:41](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/types.ts#L41)

___

### IlkData

Ƭ **IlkData**: `Object`

Maker ilk info type

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asset` | `string` |
| `assetAddress?` | `string` |
| `clip?` | `string` |
| `clipCalc?` | `string` |
| `flip?` | `string` |
| `ilkBytes` | `string` |
| `ilkLabel` | `string` |
| `isLP` | `boolean` |
| `join` | `string` |
| `pip` | `string` |

#### Defined in

[types.ts:21](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/types.ts#L21)

## Variables

### MAXUINT

• **MAXUINT**: `string` = `'115792089237316195423570985008687907853269984665640564039457584007913129639935'`

#### Defined in

[index.ts:27](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/index.ts#L27)

___

### aaveV2Markets

• **aaveV2Markets**: `AaveMarketData`[]

#### Defined in

[aaveV2Markets.ts:3](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/aaveV2Markets.ts#L3)

___

### assets

• **assets**: [`AssetData`](README.md#assetdata)[]

#### Defined in

[assets.ts:227](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/assets.ts#L227)

___

### ilks

• **ilks**: [`IlkData`](README.md#ilkdata)[]

#### Defined in

[ilks.ts:5](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/ilks.ts#L5)

___

### reflexerCollTypes

• **reflexerCollTypes**: [`IlkData`](README.md#ilkdata)[]

#### Defined in

[reflexerCollTypes.ts:3](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/reflexerCollTypes.ts#L3)

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bytesToString` | (`hex`: `string`) => `string` |
| `compare` | (`a`: `string`, `b`: `string`) => `boolean` |
| `stringToBytes` | (`str`: `string`) => `string` |

#### Defined in

[index.ts:25](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/index.ts#L25)

## Functions

### assetAmountInEth

▸ `Const` **assetAmountInEth**(`amount`, `asset?`): `string`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `amount` | `string` \| `number` \| `object` | `undefined` | Amount in wei |
| `asset` | `string` | `'ETH'` | Asset symbol (or `MCD-${symbol}` for maker asset - always 18dec) |

#### Returns

`string`

#### Defined in

[index.ts:141](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/index.ts#L141)

___

### assetAmountInWei

▸ `Const` **assetAmountInWei**(`amount`, `asset`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` \| `number` \| `object` | Amount in eth |
| `asset` | `string` | Asset symbol |

#### Returns

`string`

#### Defined in

[index.ts:162](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/index.ts#L162)

___

### getAaveV2MarketInfo

▸ `Const` **getAaveV2MarketInfo**(`name?`): `void` \| `AaveMarketData`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `''` |

#### Returns

`void` \| `AaveMarketData`

#### Defined in

[index.ts:134](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/index.ts#L134)

___

### getAssetInfo

▸ `Const` **getAssetInfo**(`symbol?`): [`AssetData`](README.md#assetdata)

Returns asset info.
Warning: will not throw if asset not found. Instead, will return a placeholder object.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `symbol` | `string` | `''` |

#### Returns

[`AssetData`](README.md#assetdata)

#### Defined in

[index.ts:49](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/index.ts#L49)

___

### getAssetInfoByAddress

▸ `Const` **getAssetInfoByAddress**(`address?`): [`AssetData`](README.md#assetdata)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `''` |

#### Returns

[`AssetData`](README.md#assetdata)

#### Defined in

[index.ts:84](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/index.ts#L84)

___

### getIlkInfo

▸ `Const` **getIlkInfo**(`ilk?`): [`ExtendedIlkData`](README.md#extendedilkdata)

Returns Maker or Reflexer ilk info, and asset info as `assetData` attribute.
Warning: will not throw if ilk not found. Instead, will return a placeholder object.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ilk` | `string` | `''` | Ilk encoded as string or as hex |

#### Returns

[`ExtendedIlkData`](README.md#extendedilkdata)

#### Defined in

[index.ts:63](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/index.ts#L63)

___

### ilkToAsset

▸ `Const` **ilkToAsset**(`ilk?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ilk` | `string` | `''` |

#### Returns

`string`

#### Defined in

[index.ts:86](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/index.ts#L86)

___

### set

▸ `Const` **set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[index.ts:21](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/index.ts#L21)

___

### tokenFromJoin

▸ `Const` **tokenFromJoin**(`join`, `fromIlks?`): `string`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `join` | `string` | `undefined` | Maker or Reflexer ilk join |
| `fromIlks` | [`IlkData`](README.md#ilkdata)[] | `ilks` |  |

#### Returns

`string`

Token symbol

#### Defined in

[index.ts:114](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/index.ts#L114)

___

### tokenFromMakerJoin

▸ `Const` **tokenFromMakerJoin**(`join`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `join` | `string` | Maker ilk join |

#### Returns

`string`

Token symbol

#### Defined in

[index.ts:126](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/index.ts#L126)

___

### tokenFromReflexerJoin

▸ `Const` **tokenFromReflexerJoin**(`join`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `join` | `string` | Reflexer ilk join |

#### Returns

`string`

Token symbol

#### Defined in

[index.ts:132](https://github.com/DecenterApps/defisaver-tokens/blob/e29f27f/src/index.ts#L132)
