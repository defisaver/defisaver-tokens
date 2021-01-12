## Constants

<dl>
<dt><a href="#ilks">ilks</a> : <code>Array.&lt;{ilkLabel: (string), pip: (string), join: (string), asset: (string), flip: (string), ilkBytes: (string)}&gt;</code></dt>
<dd></dd>
<dt><a href="#assets">assets</a> : <code>Array.&lt;{symbol: string, address: string, decimals: number, name: string, icon: function(), underlyingAsset: string, exchange: boolean, compoundCollateral: boolean, aaveCollateral: boolean}&gt;</code></dt>
<dd></dd>
<dt><a href="#getAssetInfo">getAssetInfo</a> ⇒ <code>Object</code></dt>
<dd><p>Returns asset info
Warning: Will not throw if ilk not found. Instead, will return a placeholder object.</p>
</dd>
<dt><a href="#getIlkInfo">getIlkInfo</a> ⇒ <code>Object</code></dt>
<dd><p>Returns ilk info, and asset info in <code>assetData</code>
Warning: Will not throw if asset not found. Instead, will return a placeholder object.</p>
</dd>
<dt><a href="#tokenFromJoin">tokenFromJoin</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#assetAmountInEth">assetAmountInEth</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#assetAmountInWei">assetAmountInWei</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#bytesToString">bytesToString</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#stringToBytes">stringToBytes</a> ⇒ <code>string</code></dt>
<dd></dd>
</dl>

<a name="ilks"></a>

## ilks : <code>Array.&lt;{ilkLabel: (string), pip: (string), join: (string), asset: (string), flip: (string), ilkBytes: (string)}&gt;</code>
**Kind**: global constant  
<a name="assets"></a>

## assets : <code>Array.&lt;{symbol: string, address: string, decimals: number, name: string, icon: function(), underlyingAsset: string, exchange: boolean, compoundCollateral: boolean, aaveCollateral: boolean}&gt;</code>
**Kind**: global constant  
<a name="getAssetInfo"></a>

## getAssetInfo ⇒ <code>Object</code>
Returns asset info
Warning: Will not throw if ilk not found. Instead, will return a placeholder object.

**Kind**: global constant  
**Params**

- symbol

<a name="getIlkInfo"></a>

## getIlkInfo ⇒ <code>Object</code>
Returns ilk info, and asset info in `assetData`
Warning: Will not throw if asset not found. Instead, will return a placeholder object.

**Kind**: global constant  
**Params**

- ilk <code>string</code> - Ilk encoded as string or as hex

<a name="tokenFromJoin"></a>

## tokenFromJoin ⇒ <code>string</code>
**Kind**: global constant  
**Returns**: <code>string</code> - Token symbol  
**Params**

- join <code>string</code> - Maker ilk join

<a name="assetAmountInEth"></a>

## assetAmountInEth ⇒ <code>String</code>
**Kind**: global constant  
**Params**

- amount <code>Number</code> | <code>String</code> | <code>Object</code> - Amount in wei
- asset <code>String</code> - Asset symbol (or `MCD-${symbol}` for maker asset - always 18dec)

<a name="assetAmountInWei"></a>

## assetAmountInWei ⇒ <code>String</code>
**Kind**: global constant  
**Params**

- amount <code>Number</code> | <code>String</code> | <code>Object</code> - Amount in eth
- asset <code>String</code> - Asset symbol

<a name="bytesToString"></a>

## bytesToString ⇒ <code>string</code>
**Kind**: global constant  
**Params**

- hex <code>string</code>

<a name="stringToBytes"></a>

## stringToBytes ⇒ <code>string</code>
**Kind**: global constant  
**Returns**: <code>string</code> - input encoded to hex, padded to 32 bytes  
**Params**

- str <code>string</code>

