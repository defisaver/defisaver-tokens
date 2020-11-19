# DeFi Saver Tokens

Centralized asset data & utility functions

## Members

<dl>
<dt><a href="#mcdCollateralAssets">mcdCollateralAssets</a> : <code>Object</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#getAssetInfo">getAssetInfo(symbol)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#getIlkInfo">getIlkInfo(ilk)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#tokenFromJoin">tokenFromJoin(join)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#assetAmountInEth">assetAmountInEth(amount, asset)</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#assetAmountInWei">assetAmountInWei(amount, asset)</a> ⇒ <code>String</code></dt>
<dd></dd>
</dl>

<a name="mcdCollateralAssets"></a>

## mcdCollateralAssets : <code>Object</code>
**Kind**: global variable  
<a name="getAssetInfo"></a>

## getAssetInfo(symbol) ⇒ <code>Object</code>
**Kind**: global function  
**Params**

- symbol

<a name="getIlkInfo"></a>

## getIlkInfo(ilk) ⇒ <code>Object</code>
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

