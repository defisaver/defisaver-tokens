# @defisaver/tokens

## Table of contents

### Type Aliases

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

## Type Aliases

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

[types.ts:62](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/types.ts#L62)

___

### AddressMapping

Ƭ **AddressMapping**: `Object`

#### Index signature

▪ [key: `number`]: `string`

#### Defined in

[types.ts:6](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/types.ts#L6)

___

### AssetData

Ƭ **AssetData**: `Object`

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

[types.ts:30](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/types.ts#L30)

___

### AssetDataBase

Ƭ **AssetDataBase**: `Object`

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

[types.ts:13](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/types.ts#L13)

___

### ExtendedIlkData

Ƭ **ExtendedIlkData**: [`IlkData`](README.md#ilkdata) \| { `assetData`: [`AssetData`](README.md#assetdata)  }

#### Defined in

[types.ts:69](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/types.ts#L69)

___

### IlkData

Ƭ **IlkData**: `Object`

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

[types.ts:48](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/types.ts#L48)

## Variables

### MAXUINT

• `Const` **MAXUINT**: `string` = `'115792089237316195423570985008687907853269984665640564039457584007913129639935'`

#### Defined in

[index.ts:27](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/index.ts#L27)

___

### aaveV2Markets

• `Const` **aaveV2Markets**: [`AaveMarketData`](README.md#aavemarketdata)[]

#### Defined in

[aaveV2Markets.ts:3](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/aaveV2Markets.ts#L3)

___

### assets

• `Const` **assets**: [`AssetDataBase`](README.md#assetdatabase)[]

#### Defined in

[assets.ts:232](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/assets.ts#L232)

___

### ilks

• `Const` **ilks**: [`IlkData`](README.md#ilkdata)[]

#### Defined in

[ilks.ts:5](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/ilks.ts#L5)

___

### reflexerCollTypes

• `Const` **reflexerCollTypes**: [`IlkData`](README.md#ilkdata)[]

#### Defined in

[reflexerCollTypes.ts:3](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/reflexerCollTypes.ts#L3)

___

### utils

• `Const` **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bytesToString` | (`hex`: `string`) => `string` |
| `compare` | (`a`: `string`, `b`: `string`) => `boolean` |
| `stringToBytes` | (`str`: `string`) => `string` |

#### Defined in

[index.ts:25](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/index.ts#L25)

## Functions

### assetAmountInEth

▸ **assetAmountInEth**(`amount`, `asset?`): `string`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `amount` | `string` \| `number` \| `object` | `undefined` |  |
| `asset` | `string` | `'ETH'` |  |

#### Returns

`string`

#### Defined in

[index.ts:148](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/index.ts#L148)

___

### assetAmountInWei

▸ **assetAmountInWei**(`amount`, `asset`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` \| `number` \| `object` |  |
| `asset` | `string` |  |

#### Returns

`string`

#### Defined in

[index.ts:169](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/index.ts#L169)

___

### getAaveV2MarketInfo

▸ **getAaveV2MarketInfo**(`name?`): `void` \| [`AaveMarketData`](README.md#aavemarketdata)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `''` |

#### Returns

`void` \| [`AaveMarketData`](README.md#aavemarketdata)

#### Defined in

[index.ts:141](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/index.ts#L141)

___

### getAssetInfo

▸ **getAssetInfo**(`symbol?`, `chainId?`): [`AssetData`](README.md#assetdata)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `symbol` | `string` | `''` |
| `chainId?` | `number` | `undefined` |

#### Returns

[`AssetData`](README.md#assetdata)

#### Defined in

[index.ts:60](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/index.ts#L60)

___

### getAssetInfoByAddress

▸ **getAssetInfoByAddress**(`address?`, `chainId?`): [`AssetData`](README.md#assetdata)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `''` |
| `chainId?` | `number` | `undefined` |

#### Returns

[`AssetData`](README.md#assetdata)

#### Defined in

[index.ts:95](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/index.ts#L95)

___

### getIlkInfo

▸ **getIlkInfo**(`ilk?`): [`ExtendedIlkData`](README.md#extendedilkdata)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ilk` | `string` | `''` |  |

#### Returns

[`ExtendedIlkData`](README.md#extendedilkdata)

#### Defined in

[index.ts:73](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/index.ts#L73)

___

### ilkToAsset

▸ **ilkToAsset**(`ilk?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ilk` | `string` | `''` |

#### Returns

`string`

#### Defined in

[index.ts:100](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/index.ts#L100)

___

### set

▸ **set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[index.ts:21](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/index.ts#L21)

___

### tokenFromJoin

▸ **tokenFromJoin**(`join`, `fromIlks?`): `string`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `join` | `string` | `undefined` |  |
| `fromIlks` | [`IlkData`](README.md#ilkdata)[] | `ilks` |  |

#### Returns

`string`

#### Defined in

[index.ts:121](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/index.ts#L121)

___

### tokenFromMakerJoin

▸ **tokenFromMakerJoin**(`join`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `join` | `string` |  |

#### Returns

`string`

#### Defined in

[index.ts:133](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/index.ts#L133)

___

### tokenFromReflexerJoin

▸ **tokenFromReflexerJoin**(`join`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `join` | `string` |  |

#### Returns

`string`

#### Defined in

[index.ts:139](https://github.com/DecenterApps/defisaver-tokens/blob/117ec02/src/index.ts#L139)
