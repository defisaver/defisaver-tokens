# @defisaver/tokens

## Table of contents

### Type aliases

- [AaveMarketData](README.md#aavemarketdata)
- [AddressMapping](README.md#addressmapping)
- [AssetData](README.md#assetdata)
- [AssetDataBase](README.md#assetdatabase)
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

### AaveMarketData

Ƭ **AaveMarketData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dataProvider` | `string` |
| `lendingPool` | `string` |
| `lendingPoolAddressProvider` | `string` |
| `name` | `string` |

#### Defined in

[types.ts:62](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/types.ts#L62)

___

### AddressMapping

Ƭ **AddressMapping**: `Object`

#### Index signature

▪ [key: `number`]: `string`

#### Defined in

[types.ts:6](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/types.ts#L6)

___

### AssetData

Ƭ **AssetData**: `Object`

Chain-specific asset info type

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aaveCollateral` | `boolean` |
| `address` | `string` |
| `addresses` | [`AddressMapping`](README.md#addressmapping) |
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

[types.ts:30](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/types.ts#L30)

___

### AssetDataBase

Ƭ **AssetDataBase**: `Object`

Chain-agnostic asset info type

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aaveCollateral` | `boolean` |
| `addresses` | [`AddressMapping`](README.md#addressmapping) |
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

[types.ts:13](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/types.ts#L13)

___

### ExtendedIlkData

Ƭ **ExtendedIlkData**: [`IlkData`](README.md#ilkdata) \| { `assetData`: [`AssetData`](README.md#assetdata)  }

#### Defined in

[types.ts:69](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/types.ts#L69)

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
| `isCrop` | `boolean` |
| `isLP` | `boolean` |
| `join` | `string` |
| `pip` | `string` |

#### Defined in

[types.ts:48](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/types.ts#L48)

## Variables

### MAXUINT

• **MAXUINT**: `string` = `'115792089237316195423570985008687907853269984665640564039457584007913129639935'`

#### Defined in

[index.ts:27](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/index.ts#L27)

___

### aaveV2Markets

• **aaveV2Markets**: [`AaveMarketData`](README.md#aavemarketdata)[]

#### Defined in

[aaveV2Markets.ts:3](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/aaveV2Markets.ts#L3)

___

### assets

• **assets**: [`AssetDataBase`](README.md#assetdatabase)[]

#### Defined in

[assets.ts:231](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/assets.ts#L231)

___

### ilks

• **ilks**: [`IlkData`](README.md#ilkdata)[]

#### Defined in

[ilks.ts:5](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/ilks.ts#L5)

___

### reflexerCollTypes

• **reflexerCollTypes**: [`IlkData`](README.md#ilkdata)[]

#### Defined in

[reflexerCollTypes.ts:3](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/reflexerCollTypes.ts#L3)

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

[index.ts:25](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/index.ts#L25)

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

[index.ts:147](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/index.ts#L147)

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

[index.ts:168](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/index.ts#L168)

___

### getAaveV2MarketInfo

▸ `Const` **getAaveV2MarketInfo**(`name?`): `void` \| [`AaveMarketData`](README.md#aavemarketdata)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `''` |

#### Returns

`void` \| [`AaveMarketData`](README.md#aavemarketdata)

#### Defined in

[index.ts:140](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/index.ts#L140)

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

[index.ts:59](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/index.ts#L59)

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

[index.ts:94](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/index.ts#L94)

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

[index.ts:72](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/index.ts#L72)

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

[index.ts:99](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/index.ts#L99)

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

[index.ts:21](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/index.ts#L21)

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

[index.ts:120](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/index.ts#L120)

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

[index.ts:132](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/index.ts#L132)

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

[index.ts:138](https://github.com/DecenterApps/defisaver-tokens/blob/5bdcf33/src/index.ts#L138)
