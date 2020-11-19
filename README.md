# DeFi Saver Tokens

Centralized asset data & utility functions

## Members

<dl>
<dt><a href="#assets">assets</a> : <code>Array.&lt;{symbol: string, address: string, decimals: number, name: string, icon: function(), underlyingAsset: string, exchange: boolean, compoundCollateral: boolean, aaveCollateral: boolean}&gt;</code></dt>
<dd></dd>
<dt><a href="#ilks">ilks</a> : <code>Array.&lt;{ilkLabel: (string), pip: (string), join: (string), asset: (string), flip: (string), ilkBytes: (string)}&gt;</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#getAssetInfo">getAssetInfo(symbol)</a> ⇒ <code>Object</code></dt>
<dd><p>Returns asset info</p>
</dd>
<dt><a href="#getIlkInfo">getIlkInfo(ilk)</a> ⇒ <code>Object</code></dt>
<dd><p>Returns ilk info, and asset info in <code>assetData</code></p>
</dd>
<dt><a href="#tokenFromJoin">tokenFromJoin(join)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#assetAmountInEth">assetAmountInEth(amount, asset)</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#assetAmountInWei">assetAmountInWei(amount, asset)</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#bytesToString">bytesToString(hex)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#stringToBytes">stringToBytes(str)</a> ⇒ <code>string</code></dt>
<dd></dd>
</dl>

<a name="assets"></a>

## assets : <code>Array.&lt;{symbol: string, address: string, decimals: number, name: string, icon: function(), underlyingAsset: string, exchange: boolean, compoundCollateral: boolean, aaveCollateral: boolean}&gt;</code>
**Kind**: global variable  
<a name="ilks"></a>

## ilks : <code>Array.&lt;{ilkLabel: (string), pip: (string), join: (string), asset: (string), flip: (string), ilkBytes: (string)}&gt;</code>
**Kind**: global variable  
<a name="getAssetInfo"></a>

## getAssetInfo(symbol) ⇒ <code>Object</code>
Returns asset info

**Kind**: global function  
**Params**

- symbol

<a name="getIlkInfo"></a>

## getIlkInfo(ilk) ⇒ <code>Object</code>
Returns ilk info, and asset info in `assetData`

**Kind**: global function  
**Params**

- ilk <code>string</code> - Ilk encoded as string or as hex

<a name="tokenFromJoin"></a>

## tokenFromJoin(join) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - Token symbol  
**Params**

- join <code>string</code> - Maker ilk join

<a name="assetAmountInEth"></a>

## assetAmountInEth(amount, asset) ⇒ <code>String</code>
**Kind**: global function  
**Params**

- amount <code>Number</code> | <code>String</code> | <code>Object</code> - Amount in wei
- asset <code>String</code> - Asset symbol (or `MCD-${symbol}` for maker asset - always 18dec)

<a name="assetAmountInWei"></a>

## assetAmountInWei(amount, asset) ⇒ <code>String</code>
**Kind**: global function  
**Params**

- amount <code>Number</code> | <code>String</code> | <code>Object</code> - Amount in eth
- asset <code>String</code> - Asset symbol

<a name="bytesToString"></a>

## bytesToString(hex) ⇒ <code>string</code>
**Kind**: global function  
**Params**

- hex <code>string</code>

<a name="stringToBytes"></a>

## stringToBytes(str) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - input encoded to hex, padded to 32 bytes  
**Params**

- str <code>string</code>

