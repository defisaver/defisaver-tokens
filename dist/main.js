(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("decimal.js"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["decimal.js", "react"], factory);
	else if(typeof exports === 'object')
		exports["defisaver-tokens"] = factory(require("decimal.js"), require("react"));
	else
		root["defisaver-tokens"] = factory(root["decimal.js"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__4__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Dec = __webpack_require__(1);

const {assetProto, assets} = __webpack_require__(2);
const {ilks} = __webpack_require__(37);
const utils = __webpack_require__(38);

Dec.set({
  rounding: Dec.ROUND_DOWN,
  toExpPos: 9e15,
  toExpNeg: -9e15,
});

/**
 * @type {Array<{symbol: string, address: string, decimals: number, name: string, icon: function, underlyingAsset: string, exchange: boolean, compoundCollateral: boolean, aaveCollateral: boolean}>}
 */
exports.assets = assets;

/**
 * @type {Array<{ilkLabel: (string), pip: (string), join: (string), asset: (string), flip: (string), ilkBytes: (string)}>}
 */
exports.ilks = ilks;

exports.utils = utils;

const {stringToBytes, bytesToString, compare} = utils;

/**
 * Returns asset info
 *
 * @param symbol
 * @return {{symbol: string, address: string, decimals: number, name: string, icon: function, underlyingAsset: string, ilk: string|null, exchange: boolean, mcdCollateral: boolean, compoundCollateral: boolean, aaveCollateral: boolean}}
 */
exports.getAssetInfo = (symbol = '') => assets.find(t => compare(t.symbol, symbol)) || console.error(`Asset "${symbol}" not found `) || {...assetProto};

/**
 * Returns ilk info, and asset info in `assetData`
 *
 * @param ilk {string} Ilk encoded as string or as hex
 * @returns {{ilkLabel: (string), pip: (string), join: (string), asset: (string), flip: (string), ilkBytes: (string), assetData: {symbol: string, address: string, decimals: number, name: string, icon: Function, underlyingAsset: string, exchange: boolean, compoundCollateral: boolean, aaveCollateral: boolean}}}
 */
exports.getIlkInfo = (ilk = '') => {
  const _ilk = (ilk.substr(0, 2) === '0x' ? bytesToString(ilk) : ilk).toUpperCase();
  const ilkData = ilks.find(i => i.ilkLabel === _ilk) || console.error(`Ilk "${ilk}" not found `) || {
    ilkLabel: _ilk,
    ilkBytes: stringToBytes(_ilk),
    asset: exports.ilkToAsset(ilk)
  };
  const assetData = exports.getAssetInfo(ilkData.asset);
  return {
    ...ilkData,
    assetData,
  }
}

exports.getAssetInfoByAddress = (address = '') => assets.find(t => t.address.toLowerCase() === address.toLowerCase()) || console.error(`Asset with addess "${address}" not found `) || {...assetProto};

exports.ilkToAsset = ilk => (ilk.substr(0, 2) === '0x' ? bytesToString(ilk) : ilk).replace(/-.*/, '');

exports.exchangeAssets = assets.filter(t => t.exchange);

exports.compoundCollateralAssets = assets.filter(t => t.compoundCollateral);
exports.compoundAsset = (underlyingAsset) => `c${underlyingAsset.toUpperCase()}`;

exports.aaveCollateralAssets = assets.filter(t => t.aaveCollateral);
exports.aaveAsset = (underlyingAsset) => `a${underlyingAsset.toUpperCase()}`;

/**
 * @param join {string} Maker ilk join
 * @returns {string} Token symbol
 */
exports.tokenFromJoin = (join) => {
  for (const ilkInfo of ilks) {
    if (compare(ilkInfo.join, join)) return ilkInfo.asset;
  }
  if (compare('0x448a5065aebb8e423f0896e6c5d525c040f59af3', join)) return 'ETH'; // SCD ETH
  return '';
}

/**
 * @param amount {Number|String|Object} Amount in wei
 * @param asset {String} Asset symbol (or `MCD-${symbol}` for maker asset - always 18dec)
 * @return {String}
 */
exports.assetAmountInEth = (amount, asset = 'ETH') => {
  let decimals;

  // USDC/WBTC have 6/8 decimals but Vat is storing it in 18 decimal precision
  if (asset.substr(0, 4) === 'MCD-') decimals = 18;

  // Compound returns borrowing power in USD with 18 decimals
  else if (asset === 'USD') decimals = 18;

  else decimals = exports.getAssetInfo(asset).decimals;

  return new Dec(amount && amount.toString() || 0).div(10 ** decimals).toString();
};

/**
 * @param amount {Number|String|Object} Amount in eth
 * @param asset {String} Asset symbol
 * @return {String}
 */
exports.assetAmountInWei = (amount, asset) => {
  const {decimals} = exports.getAssetInfo(asset);

  return new Dec(amount && amount.toString() || 0).mul(10 ** decimals).floor().toString();
};


/***/ }),
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ ((module, exports, __webpack_require__) => {

const ETHAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
const DAIAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";
const SAIAddress = "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359";
const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const BATAddress = "0x0D8775F648430679A709E98d2b0Cb6250d2887EF";
const REPAddress = "0x1985365e9f78359a9B6AD760e32412f4a445E862";
const REPv2Address = "0x221657776846890989a759BA2973e427DfF5C9bB";
const ZRXAddress = "0xe41d2489571d322189246dafa5ebde1f4699f498";
const KNCAddress = "0xdd974D5C2e2928deA5F71b9825b8b646686BD200";
const USDCAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const WBTCAddress = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
const DGDAddress = "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a";
const MKRAddress = "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
const COMPAddress = "0xc00e94cb662c3520282e6f5717214004a7f26888";
const cDAIAddress = "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643";
const cBATAddress = "0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e";
const cREPAddress = "0x158079ee67fce2f58472a96584a73c7ab9ac95c1";
const cZRXAddress = "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407";
const cUSDCAddress = "0x39aa39c021dfbae8fac545936693ac917d5e7563";
const cETHAddress = "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5";
const cWBTCAddress = "0xc11b1268c1a384e55c48c2391d8d480264a3a7f4";
const USDTAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";
const cUSDTAddress = "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9";
const cUNIAddress = "0x35a18000230da775cac24873d00ff85bccded550";
const aETHAddress = "0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04";
const aDAIAddress = "0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d";
const aUSDCAddress = "0x9bA00D6856a4eDF4665BcA2C2309936572473B7E";
const aSUSDAddress = "0x625aE63000f46200499120B906716420bd059240";
const SUSDAddress = "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51";
const aTUSDAddress = "0x4DA9b813057D04BAef4e5800E36083717b4a0341";
const TUSDAddress = "0x0000000000085d4780B73119b644AE5ecd22b376";
const aUSDTAddress = "0x71fc860F7D3A592A4a98740e39dB31d25db65ae8";
const aBUSDAddress = "0x6Ee0f7BB50a54AB5253dA0667B0Dc2ee526C30a8";
const BUSDAddress = "0x4fabb145d64652a948d72533023f6e7a623c7c53";
const aBATAddress = "0xE1BA0FB44CCb0D11b80F92f4f8Ed94CA3fF51D00";
const aKNCAddress = "0x9D91BE44C06d373a8a226E1f3b146956083803eB";
const aLENDAddress = "0x7D2D3688Df45Ce7C552E19c27e007673da9204B8";
const LENDAddress = "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03";
const aLINKAddress = "0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84";
const LINKAddress = "0x514910771af9ca656af840dff83e8264ecf986ca";
const aMANAAddress = "0x6FCE4A401B6B80ACe52baAefE4421Bd188e76F6f";
const MANAAddress = "0x0f5d2fb29fb7d3cfee444a200298f468908cc942";
const aMKRAddress = "0x7deB5e830be29F91E298ba5FF1356BB7f8146998";
const aREPAddress = "0x71010A9D003445aC60C4e6A7017c1E89A477B438";
const aSNXAddress = "0x328C4c80BC7aCa0834Db37e6600A6c49E12Da4DE";
const SNXAddress = "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f";
const aWBTCAddress = "0xFC4B8ED459e00e5400be803A9BB3954234FD50e3";
const aZRXAddress = "0x6Fb0855c404E09c47C3fBCA25f08d4E41f9F062f";
const aENJAddress = "0x712DB54daA836B53Ef1EcBb9c6ba3b9Efb073F40";
const ENJAddress = "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c";
const aRENAddress = "0x69948cC03f478B95283F7dbf1CE764d0fc7EC54C";
const RENAddress = "0x408e41876cCCDC0F92210600ef50372656052a38";
const YFIAddress = "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e";
const aYFIAddress = "0x12e51E77DAAA58aA0E9247db7510Ea4B46F9bEAd";
const CRVAddress = "0xD533a949740bb3306d119CC777fa900bA034cd52";
const iDAIAddress = "0x493C57C4763932315A328269E1ADaD09653B9081";
const PAXUSDAddress = "0x8e870d67f660d95d5be530380d0ec0bd388289e1";
const DPIAddress = "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b";
const UNIAddress = "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";
const LRCAddress = "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD";
const cCOMPAddress = "0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4";
const AAVEAddress = "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";
const aUNIAddress = "0xb124541127a0a657f056d9dd06188c4f1b0e5aab";
const aAaveAddress = "0xba3D9687Cf50fE253cd2e1cFeEdE1d6787344Ed5";
const BALAddress = "0xba100000625a3754423978a60c9317c58a424e3D";
const GUSDAddress = "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd";
const RENBTCAddress = "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D";
const UNIV2DAIETHAddress = "0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11";

const ZrxIcon = __webpack_require__(3);
const UsdcIcon = __webpack_require__(5);
const BatIcon = __webpack_require__(6);
const RepIcon = __webpack_require__(7);
const EthIcon = __webpack_require__(8);
const WbtcIcon = __webpack_require__(9);
const DaiIcon = __webpack_require__(10);
const DgdIcon = __webpack_require__(11);
const MkrIcon = __webpack_require__(12);
const UsdtIcon = __webpack_require__(13);
const KncIcon = __webpack_require__(14);
const CompIcon = __webpack_require__(15);
const SusdIcon = __webpack_require__(16);
const TusdIcon = __webpack_require__(17);
const BusdIcon = __webpack_require__(18);
const LendIcon = __webpack_require__(19);
const LinkIcon = __webpack_require__(20);
const ManaIcon = __webpack_require__(21);
const SnxIcon = __webpack_require__(22);
const EnjIcon = __webpack_require__(23);
const RenIcon = __webpack_require__(24);
const RepV2Icon = __webpack_require__(25);
const CrvIcon = __webpack_require__(26);
const YfiIcon = __webpack_require__(27);
const PaxusdIcon = __webpack_require__(28);
const DpiIcon = __webpack_require__(29);
const UniIcon = __webpack_require__(30);
const LrcIcon = __webpack_require__(31);
const BalIcon = __webpack_require__(32);
const GusdIcon = __webpack_require__(33);
const AaveIcon = __webpack_require__(34);
const UniV2DaiEthIcon = __webpack_require__(35);
const RenBtcIcon = __webpack_require__(36);

const assetProto = module.exports.assetProto = {
  symbol: '?',
  name: 'Unknown',
  address: '0x0',
  decimals: 18,
  icon: () => '',
  underlyingAsset: '',
  exchange: false,
  compoundCollateral: false,
  aaveCollateral: false,
};

exports.assets = [
  {
    ...assetProto,
    symbol: 'ETH',
    name: 'Ether',
    decimals: 18,
    exchange: true,
    mcdCollateral: true,
    compoundCollateral: false,
    address: ETHAddress,
    icon: EthIcon,
  },
  {
    ...assetProto,
    symbol: 'WETH',
    name: 'WrappedEther',
    decimals: 18,
    address: WETHAddress,
    icon: EthIcon,
  },
  {
    ...assetProto,
    symbol: 'cETH',
    underlyingAsset: 'ETH',
    name: 'Ether',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    address: cETHAddress,
    icon: EthIcon,
  },
  {
    ...assetProto,
    symbol: 'DAI',
    name: 'Dai',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
    address: DAIAddress,
    icon: DaiIcon,
  },
  {
    ...assetProto,
    symbol: 'cDAI',
    underlyingAsset: 'DAI',
    name: 'Dai',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    address: cDAIAddress,
    icon: DaiIcon,
  },
  {
    ...assetProto,
    symbol: 'iDAI',
    underlyingAsset: 'DAI',
    name: 'Dai',
    decimals: 18,
    address: iDAIAddress,
    icon: DaiIcon,
  },
  {
    ...assetProto,
    symbol: 'MKR',
    name: 'Maker',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
    address: MKRAddress,
    icon: MkrIcon,
  },
  {
    ...assetProto,
    symbol: 'BAT',
    name: 'Basic Attention Token',
    decimals: 18,
    exchange: true,
    mcdCollateral: true,
    compoundCollateral: false,
    address: BATAddress,
    icon: BatIcon,
  },
  {
    ...assetProto,
    symbol: 'cBAT',
    underlyingAsset: 'BAT',
    name: 'Basic Attention Token',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    address: cBATAddress,
    icon: BatIcon,
  },
  {
    ...assetProto,
    symbol: 'ZRX',
    name: '0x',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
    mcdCollateral: true,
    address: ZRXAddress,
    icon: ZrxIcon,
  },
  {
    ...assetProto,
    symbol: 'KNC',
    name: 'Kyber Network Crystal',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
    mcdCollateral: true,
    address: KNCAddress,
    icon: KncIcon,
  },
  {
    ...assetProto,
    symbol: 'cZRX',
    underlyingAsset: 'ZRX',
    name: '0x',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    address: cZRXAddress,
    icon: ZrxIcon,
  },
  {
    ...assetProto,
    symbol: 'REP',
    name: 'Augur',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
    address: REPAddress,
    icon: RepIcon,
  },
  {
    ...assetProto,
    symbol: 'REPv2',
    name: 'Augur',
    decimals: 18,
    exchange: false, // not yet available
    compoundCollateral: false,
    address: REPv2Address,
    icon: RepV2Icon,
  },
  {
    ...assetProto,
    symbol: 'cREP',
    underlyingAsset: 'REP',
    name: 'Augur',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    address: cREPAddress,
    icon: RepIcon,
  },
  {
    ...assetProto,
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    exchange: true,
    mcdCollateral: true,
    compoundCollateral: false,
    address: USDCAddress,
    icon: UsdcIcon,
  },
  {
    ...assetProto,
    symbol: 'cUSDC',
    underlyingAsset: 'USDC',
    name: 'USD Coin',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    address: cUSDCAddress,
    icon: UsdcIcon,
  },
  {
    ...assetProto,
    symbol: 'WBTC',
    name: 'Wrapped Bitcoin',
    decimals: 8,
    exchange: true,
    mcdCollateral: true,
    compoundCollateral: false,
    address: WBTCAddress,
    icon: WbtcIcon,
  },
  {
    ...assetProto,
    symbol: 'cWBTC',
    underlyingAsset: 'WBTC',
    name: 'Wrapped Bitcoin',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    address: cWBTCAddress,
    icon: WbtcIcon,
  },
  {
    ...assetProto,
    symbol: 'DGD',
    name: 'DigixDAO',
    decimals: 9,
    exchange: true,
    compoundCollateral: false,
    address: DGDAddress,
    icon: DgdIcon,
  },
  {
    ...assetProto,
    symbol: 'USDT',
    name: 'Tether',
    decimals: 6,
    exchange: true,
    address: USDTAddress,
    // mcdCollateral: true, // Contracts not yet ready
    icon: UsdtIcon,
  },
  {
    ...assetProto,
    symbol: 'cUSDT',
    underlyingAsset: 'USDT',
    name: 'Tether',
    decimals: 8,
    compoundCollateral: true,
    address: cUSDTAddress,
    icon: UsdtIcon,
  },
  {
    ...assetProto,
    symbol: 'SAI',
    name: 'Sai',
    decimals: 18,
    address: SAIAddress,
    icon: DaiIcon,
  },
  {
    ...assetProto,
    symbol: 'COMP',
    name: 'Compound Token',
    decimals: 18,
    address: COMPAddress,
    exchange: true,
    mcdCollateral: true,
    icon: CompIcon,
  },
  {
    ...assetProto,
    symbol: 'aETH',
    underlyingAsset: 'ETH',
    name: 'ETH',
    decimals: 18,
    aaveCollateral: true,
    address: aETHAddress,
    icon: EthIcon,
  },
  {
    ...assetProto,
    symbol: 'aDAI',
    underlyingAsset: 'DAI',
    name: 'Dai',
    decimals: 18,
    aaveCollateral: true,
    address: aDAIAddress,
    icon: DaiIcon,
  },
  {
    ...assetProto,
    symbol: 'aUSDC',
    underlyingAsset: 'USDC',
    name: 'USDC',
    decimals: 18,
    aaveCollateral: true,
    address: aUSDCAddress,
    icon: UsdcIcon,
  },
  {
    ...assetProto,
    symbol: 'aSUSD',
    underlyingAsset: 'SUSD',
    name: 'Synth sUSD',
    decimals: 18,
    aaveCollateral: true,
    address: aSUSDAddress,
    icon: SusdIcon,
  },
  {
    ...assetProto,
    symbol: 'SUSD',
    name: 'Synth sUSD',
    decimals: 18,
    exchange: true,
    address: SUSDAddress,
    icon: SusdIcon,
  },
  {
    ...assetProto,
    symbol: 'aTUSD',
    underlyingAsset: 'TUSD',
    name: 'True USD',
    decimals: 18,
    aaveCollateral: true,
    address: aTUSDAddress,
    icon: TusdIcon,
  },
  {
    ...assetProto,
    symbol: 'TUSD',
    name: 'True USD',
    decimals: 18,
    exchange: true,
    address: TUSDAddress,
    icon: TusdIcon,
  },
  {
    ...assetProto,
    symbol: 'aUSDT',
    underlyingAsset: 'USDT',
    name: 'Tether',
    decimals: 18,
    aaveCollateral: true,
    address: aUSDTAddress,
    icon: UsdtIcon,
  },
  {
    ...assetProto,
    symbol: 'aBUSD',
    underlyingAsset: 'BUSD',
    name: 'Binance USD',
    decimals: 18,
    aaveCollateral: true,
    address: aBUSDAddress,
    icon: BusdIcon,
  },
  {
    ...assetProto,
    symbol: 'BUSD',
    name: 'Binance USD',
    decimals: 18,
    exchange: true,
    address: BUSDAddress,
    icon: BusdIcon,
  },
  {
    ...assetProto,
    symbol: 'aBAT',
    underlyingAsset: 'BAT',
    name: 'Basic Attention Token',
    decimals: 18,
    aaveCollateral: true,
    address: aBATAddress,
    icon: BatIcon,
  },
  {
    ...assetProto,
    symbol: 'aKNC',
    underlyingAsset: 'KNC',
    name: 'KNC',
    decimals: 18,
    aaveCollateral: true,
    address: aKNCAddress,
    icon: KncIcon,
  },
  {
    ...assetProto,
    symbol: 'aLEND',
    underlyingAsset: 'LEND',
    name: 'Aave ETHLend',
    decimals: 18,
    aaveCollateral: true,
    address: aLENDAddress,
    icon: LendIcon,
  },
  {
    ...assetProto,
    symbol: 'LEND',
    name: 'Aave ETHLend',
    decimals: 18,
    exchange: true,
    address: LENDAddress,
    icon: LendIcon,
  },
  {
    ...assetProto,
    symbol: 'aLINK',
    underlyingAsset: 'LINK',
    name: 'ChainLink',
    decimals: 18,
    aaveCollateral: true,
    address: aLINKAddress,
    icon: LinkIcon,
  },
  {
    ...assetProto,
    symbol: 'LINK',
    name: 'ChainLink',
    decimals: 18,
    exchange: true,
    mcdCollateral: true,
    address: LINKAddress,
    icon: LinkIcon,
  },
  {
    ...assetProto,
    symbol: 'aMANA',
    underlyingAsset: 'MANA',
    name: 'Decentraland',
    decimals: 18,
    aaveCollateral: true,
    address: aMANAAddress,
    icon: ManaIcon,
  },
  {
    ...assetProto,
    symbol: 'MANA',
    name: 'Decentraland',
    decimals: 18,
    exchange: true,
    mcdCollateral: true,
    address: MANAAddress,
    icon: ManaIcon,
  },
  {
    ...assetProto,
    symbol: 'aMKR',
    underlyingAsset: 'MKR',
    name: 'Maker',
    decimals: 18,
    aaveCollateral: true,
    address: aMKRAddress,
    icon: MkrIcon,
  },
  {
    ...assetProto,
    symbol: 'aREP',
    underlyingAsset: 'REP',
    name: 'Augur',
    decimals: 18,
    aaveCollateral: true,
    address: aREPAddress,
    icon: RepIcon,
  },
  {
    ...assetProto,
    symbol: 'aSNX',
    underlyingAsset: 'SNX',
    name: 'Synthetix Network',
    decimals: 18,
    aaveCollateral: true,
    address: aSNXAddress,
    icon: SnxIcon,
  },
  {
    ...assetProto,
    symbol: 'SNX',
    name: 'Synthetix Network',
    decimals: 18,
    exchange: true,
    address: SNXAddress,
    icon: SnxIcon,
  },
  {
    ...assetProto,
    symbol: 'aWBTC',
    underlyingAsset: 'WBTC',
    name: 'WBTC',
    decimals: 18,
    aaveCollateral: true,
    address: aWBTCAddress,
    icon: WbtcIcon,
  },
  {
    ...assetProto,
    symbol: 'aZRX',
    underlyingAsset: 'ZRX',
    name: 'ZRX',
    decimals: 18,
    aaveCollateral: true,
    address: aZRXAddress,
    icon: ZrxIcon,
  },
  {
    ...assetProto,
    symbol: 'aENJ',
    underlyingAsset: 'ENJ',
    name: 'Enjin',
    decimals: 18,
    aaveCollateral: true,
    address: aENJAddress,
    icon: EnjIcon,
  },
  {
    ...assetProto,
    symbol: 'ENJ',
    name: 'Enjin',
    decimals: 18,
    exchange: true,
    address: ENJAddress,
    icon: EnjIcon,
  },
  {
    ...assetProto,
    symbol: 'aREN',
    underlyingAsset: 'REN',
    name: 'Ren',
    decimals: 18,
    aaveCollateral: true,
    address: aRENAddress,
    icon: RenIcon,
  },
  {
    ...assetProto,
    symbol: 'REN',
    name: 'Ren',
    decimals: 18,
    exchange: true,
    address: RENAddress,
    icon: RenIcon,
  },
  {
    ...assetProto,
    symbol: 'CRV',
    name: 'Curve DAO',
    decimals: 18,
    exchange: true,
    address: CRVAddress,
    icon: CrvIcon,
  },
  {
    ...assetProto,
    symbol: 'YFI',
    name: 'Yearn Finance',
    decimals: 18,
    exchange: true,
    address: YFIAddress,
    icon: YfiIcon,
  },
  {
    ...assetProto,
    symbol: 'aYFI',
    decimals: 18,
    address: aYFIAddress,
    aaveCollateral: true,
    underlyingAsset: 'YFI',
    icon: YfiIcon,
  },
  {
    ...assetProto,
    symbol: 'PAXUSD',
    name: 'Paxos Standard',
    decimals: 18,
    exchange: true,
    mcdCollateral: true,
    address: PAXUSDAddress,
    icon: PaxusdIcon,
  },
  {
    ...assetProto,
    symbol: 'DPI',
    name: 'DefiPulse Index',
    decimals: 18,
    exchange: true,
    address: DPIAddress,
    icon: DpiIcon,
  },
  {
    ...assetProto,
    symbol: 'UNI',
    name: 'Uniswap',
    decimals: 18,
    exchange: true,
    address: UNIAddress,
    icon: UniIcon,
  },
  {
    ...assetProto,
    symbol: 'cUNI',
    decimals: 8,
    compoundCollateral: true,
    address: cUNIAddress,
    underlyingAsset: 'UNI',
  },
  {
    ...assetProto,
    symbol: 'LRC',
    name: 'Loopring Coin V2',
    decimals: 18,
    exchange: true,
    mcdCollateral: true,
    address: LRCAddress,
    icon: LrcIcon,
  },
  {
    ...assetProto,
    symbol: "cCOMP",
    name: "Compound Token",
    address: cCOMPAddress,
    underlyingAsset: "COMP",
    decimals: 8,
    icon: CompIcon,
  },
  {
    ...assetProto,
    symbol: 'aUNI',
    name: 'Uniswap',
    address: aUNIAddress,
    underlyingAsset: 'UNI',
    decimals: 18,
    aaveCollateral: true,
    icon: UniIcon,
  },
  {
    ...assetProto,
    symbol: 'AAVE',
    name: 'Aave',
    address: AAVEAddress,
    decimals: 18,
    icon: AaveIcon,
  },
  {
    ...assetProto,
    symbol: 'aAave',
    name: 'Aave',
    address: aAaveAddress,
    decimals: 18,
    underlyingAsset: 'AAVE',
    aaveCollateral: true,
    icon: AaveIcon,
  },
  {
    ...assetProto,
    symbol: 'BAL',
    name: 'Balancer',
    address: BALAddress,
    decimals: 18,
    icon: BalIcon,
  },
  {
    ...assetProto,
    symbol: 'GUSD',
    name: 'Gemini Dollar',
    address: GUSDAddress,
    decimals: 2,
    icon: GusdIcon,
  },
  {
    ...assetProto,
    symbol: 'RENBTC',
    name: 'renBTC',
    address: RENBTCAddress,
    decimals: 8,
    icon: RenBtcIcon,
  },
  {
    ...assetProto,
    symbol: 'UNIV2DAIETH',
    name: 'Uniswap V2: DAI/ETH ',
    address: UNIV2DAIETHAddress,
    decimals: 18,
    icon: UniV2DaiEthIcon,
  },
];


/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function ZrxIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "96.5",
    cy: "96.5",
    r: "96.5",
    fill: "url(#paint0_linear_zrx_icon)",
    fillOpacity: "0.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M124.777 114.576C128.508 119.59 132.356 124.72 136.204 129.851C128.508 138.946 118.947 144.776 107.403 147.224C94.5773 149.906 82.4507 147.924 70.6739 141.394C81.1681 133.582 91.429 125.886 101.807 118.19C104.139 120.406 106.354 122.621 108.57 124.72C111.018 127.052 110.085 127.169 113.234 125.42C117.548 122.971 121.162 119.59 123.961 115.509C124.078 115.275 124.311 115.042 124.427 114.809C124.311 114.809 124.427 114.809 124.777 114.576ZM78.9526 124.837C76.0376 127.052 73.3558 129.034 70.6739 131.133C68.6917 132.649 66.7095 134.048 64.7272 135.564C63.911 136.264 63.328 136.264 62.3952 135.448C53.5335 127.519 47.9366 117.724 45.8377 106.064C43.7389 94.2871 45.6045 83.0933 51.2014 72.4826C51.318 72.2494 51.5512 71.8996 51.6678 71.6664C51.6678 71.5498 51.7844 71.5498 52.0176 71.4332C59.7133 81.5775 67.5257 91.7219 75.2214 101.866C74.9882 102.216 74.8716 102.449 74.6384 102.682C72.3063 105.131 69.9743 107.58 67.5257 109.912C66.8261 110.611 66.7095 111.194 67.1759 112.011C69.6245 116.675 73.006 120.523 77.2036 123.671C77.7866 124.021 78.253 124.37 78.9526 124.837ZM122.445 52.4271C118.714 55.1089 114.983 57.7907 111.251 60.356C104.838 64.9035 98.4251 69.5675 92.1286 74.115C91.3124 74.698 90.7294 74.8146 90.0298 73.9984C87.931 71.783 85.7156 69.8007 83.6167 67.5853C83.0337 67.0023 82.4507 66.8857 81.6345 67.2355C76.6206 69.8007 72.6562 73.4154 69.3913 77.9629C69.1581 78.1961 68.9249 78.5459 68.6917 78.8957C66.8261 76.447 65.077 74.2316 63.328 71.8996C61.4624 69.4509 59.7134 67.0023 57.9643 64.6702C57.3813 63.854 57.2647 63.271 58.0809 62.4548C67.0593 52.5437 78.1364 46.7136 91.429 45.3143C101.923 44.1483 111.951 46.2472 121.279 51.261C121.629 51.4942 121.979 51.6108 122.329 51.844C122.329 52.1939 122.329 52.3105 122.445 52.4271ZM141.451 122.388C139.003 119.24 136.787 116.325 134.572 113.41C129.441 106.647 124.311 99.7674 119.064 93.0045C118.364 92.0717 118.364 91.4887 119.18 90.6725C121.396 88.457 123.495 86.2416 125.71 84.0261C126.293 83.4431 126.526 82.8601 126.06 82.0439C123.495 77.1466 119.996 73.0656 115.449 69.8007C115.099 69.5675 114.749 69.2177 114.283 68.9845C114.633 68.6347 114.983 68.4015 115.216 68.1683C119.647 64.7868 124.078 61.522 128.508 58.1405C129.208 57.5575 129.791 57.3243 130.607 58.1405C141.684 68.1683 147.631 80.6447 148.214 95.6863C148.447 104.431 146.465 112.71 142.501 120.523C142.151 120.989 141.801 121.572 141.451 122.388Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_zrx_icon",
    x1: "193",
    y1: "2.46321",
    x2: "193",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#00AE99"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#00907B"
  }))));
};

/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function UsdcIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "96.5",
    cy: "96.5",
    r: "96.5",
    fill: "url(#paint0_linear_usdc_icon)",
    fillOpacity: "0.9"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M84.3319 52.1967C84.3319 50.1568 84.2355 49.8424 83.3332 48.9401C81.9878 47.5947 81.8573 47.6122 75.8597 49.9285C71.433 51.6385 64.654 56.3341 60.2402 60.7478C55.8538 65.1343 51.11 71.9703 49.4602 76.2819C49.0974 77.2303 48.5152 78.751 48.1664 79.6608C47.6023 81.1319 46.4978 85.2296 45.8951 88.0851C45.6208 89.3861 45 95.9007 45 97.4804C45 99.285 45.6413 105.623 46.0198 107.559C46.6228 110.641 49.1257 117.669 50.6905 120.671C55.6611 130.21 65.4196 139.661 74.6031 143.831C80.5874 146.548 81.9332 146.834 83.3503 145.686C84.0469 145.122 84.1692 144.677 84.2762 142.32C84.3968 139.666 84.3742 139.575 83.2861 138.336C82.1959 137.094 79.3746 135.403 78.3934 135.403C78.1211 135.403 76.0667 134.193 73.8283 132.714C66.9871 128.194 62.5228 123.184 58.8897 115.951C55.6208 109.442 54.4811 104.578 54.4811 97.1388C54.4811 89.6342 55.613 84.8555 58.9799 78.1459C63.3277 69.4824 69.558 63.4503 78.8214 58.9361C84.0609 56.3829 84.3319 56.0515 84.3319 52.1967ZM128.132 56.3884C123.5 52.8103 119.268 50.5151 113.746 48.5865C111.32 47.7393 111.109 47.7604 109.893 48.976C108.89 49.9794 108.863 50.0905 108.981 52.6993C109.076 54.7905 109.255 55.5565 109.786 56.1448C110.161 56.5613 112.392 57.8664 114.743 59.0457C124.071 63.7232 129.928 69.4763 134.373 78.327C137.642 84.8361 138.781 89.6994 138.781 97.1388C138.781 104.017 138.336 106.153 135.077 114.89C132.163 122.701 121.463 133.136 113.327 136.101C109.748 137.405 108.943 138.488 108.936 142.006C108.931 144.132 109.019 144.427 109.929 145.337C111.448 146.856 112.333 146.704 118.659 143.831C126.205 140.404 134.764 132.934 139.63 125.525C142.793 120.71 145.287 115.444 146.359 111.317C148.518 103.007 148.81 94.834 147.239 86.7185C146.646 83.6543 144.141 76.6174 142.572 73.6061C139.378 67.4769 133.659 60.6576 128.132 56.3884ZM101.406 67.7417C101.256 64.9088 101.109 64.2248 100.52 63.6361C99.9483 63.0642 99.3319 62.918 97.2831 62.8664C92.487 62.7465 92.0681 63.0847 91.9216 67.194C91.8316 69.7099 91.809 70.7192 91.2963 71.2812C90.9368 71.6751 90.3365 71.8493 89.3032 72.1684C88.0951 72.5415 86.5044 73.1538 85.7685 73.5292C83.8167 74.5251 80.3776 78.1541 79.2933 80.3629C78.433 82.1145 78.353 82.6109 78.353 86.2061C78.353 89.7848 78.4354 90.3028 79.2772 92.0165C81.0442 95.6147 84.9885 98.5194 89.4566 99.5132C90.4901 99.7432 91.8915 100.071 92.5711 100.243C93.2506 100.415 94.2093 100.555 94.7016 100.555C95.6637 100.555 97.7446 101 100.698 101.837C103.638 102.67 106.197 105.367 106.197 107.632C106.197 108.724 105.085 111.966 104.446 112.735C103.461 113.923 98.8987 115.588 96.6312 115.588C95.4675 115.588 92.5263 114.856 90.8177 114.142C89.2164 113.472 87.5249 111.487 87.0487 109.72C86.8362 108.93 86.1532 107.775 85.5311 107.152C84.4354 106.057 84.3134 106.022 81.6065 106.022C78.9745 106.022 78.7552 106.079 77.8143 107.02C77.2649 107.57 76.8156 108.236 76.8156 108.501C76.8156 109.38 78.2246 113.345 79.0305 114.734C80.9612 118.062 85.0032 121.112 88.8051 122.11C90.1635 122.467 91.3654 122.849 91.4761 122.959C91.5868 123.069 91.7579 124.684 91.8567 126.549C92.022 129.673 92.1098 130.012 92.9749 130.878C93.8413 131.744 94.1225 131.816 96.6312 131.816C99.1444 131.816 99.4201 131.745 100.294 130.871C101.151 130.015 101.248 129.663 101.34 127.113C101.43 124.596 101.448 123.578 101.963 123.008C102.334 122.596 102.964 122.418 104.065 122.079C106.829 121.229 109.241 119.691 111.654 117.241C114.546 114.302 115.756 111.296 115.756 107.047C115.756 101.305 113.452 97.5122 108.348 94.8518C106.375 93.8234 105.134 93.448 101.243 92.7011C100.116 92.4845 98.6377 92.1647 97.9582 91.9902C97.2786 91.8152 96.2786 91.6724 95.7361 91.6724C94.4641 91.6724 90.2062 90.1302 89.3575 89.3622C88.2578 88.3666 87.7484 87.0106 87.7484 85.0779C87.7484 82.0246 89.4446 80.1182 92.9752 79.2033C95.2468 78.6146 96.788 78.5555 98.2031 79.0031C98.7477 79.1756 99.6203 79.41 100.142 79.5245C101.572 79.8377 103.819 82.0605 104.69 84.0246C105.116 84.986 105.719 85.8699 106.03 85.9891C106.34 86.1084 107.889 86.2061 109.471 86.2061C111.892 86.2061 112.455 86.0978 113.03 85.5228C114.056 84.4975 113.902 82.6481 112.562 79.876C110.835 76.3031 107.772 73.6211 103.977 72.3584C103.037 72.0458 102.115 71.644 101.927 71.4653C101.739 71.287 101.504 69.6112 101.406 67.7417Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_usdc_icon",
    x1: "193",
    y1: "2.46321",
    x2: "193",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#368CD1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#294C73"
  }))));
};

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

const BatIcon = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: "193",
  height: "193",
  viewBox: "0 0 193 193",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: "96.5",
  cy: "96.5",
  r: "96.5",
  fill: "url(#paint0_linear_bat_icon)",
  fillOpacity: "0.9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M96.5 84.907V49L47.1279 134.279L76.3023 116.326L96.5 84.907Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  d: "M145.872 134.279H47.1279L76.3023 116.326H116.698L96.5 84.907V49L145.872 134.279Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "paint0_linear_bat_icon",
  x1: "193",
  y1: "2.46321",
  x2: "193",
  y2: "193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#FF5000"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#9D1E63"
}))));

module.exports = BatIcon;

/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

const RepIcon = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: "193",
  height: "193",
  viewBox: "0 0 193 193",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: "96.5",
  cy: "96.5",
  r: "96.5",
  fill: "url(#paint0_linear_rep_icon)",
  fillOpacity: "0.9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M140.845 117.312L100.039 44.1217C99.6922 43.4802 99.1788 42.9443 98.5527 42.5707C97.9266 42.1972 97.2111 42 96.482 42C95.753 42 95.0375 42.1972 94.4114 42.5707C93.7852 42.9443 93.2718 43.4802 92.9255 44.1217L52.1345 117.312C51.0738 119.199 51.6821 121.648 53.5852 122.771L94.4386 147.199C95.0851 147.567 95.8162 147.76 96.56 147.76C97.3039 147.76 98.0349 147.567 98.6815 147.199L139.472 122.818C141.282 121.648 141.953 119.199 140.845 117.312V117.312ZM110.006 87.8141L109.008 86.9718L108.946 86.9094C108.628 86.6499 108.294 86.4102 107.947 86.1918L107.885 86.1295C107.557 85.9111 107.214 85.6771 106.824 85.4587C106.762 85.4587 106.762 85.3963 106.715 85.3963C106.387 85.1779 105.997 85.0063 105.654 84.8347C105.592 84.8347 105.592 84.7724 105.545 84.7724C105.217 84.6008 104.827 84.4448 104.437 84.2732C104.375 84.2732 104.375 84.2108 104.328 84.2108C104.001 84.1016 103.658 83.93 103.33 83.8208C102.428 83.4829 101.499 83.222 100.553 83.0409C99.8358 84.4292 98.8219 85.6615 97.7143 86.7066C99.4458 86.8158 101.115 87.2682 102.612 87.8765C103.498 88.2577 104.353 88.7062 105.171 89.218C105.192 89.2203 105.213 89.227 105.232 89.2377C105.251 89.2485 105.267 89.263 105.28 89.2804C105.498 89.3896 105.67 89.5612 105.888 89.7328C105.993 89.7905 106.087 89.8642 106.169 89.9512C106.371 90.0826 106.559 90.2342 106.73 90.4035C106.84 90.5127 106.949 90.5751 107.058 90.6843C107.23 90.8559 107.386 90.9651 107.557 91.1367L107.885 91.4643L108.337 91.9166L108.665 92.2442C108.783 92.4048 108.913 92.556 109.055 92.6966C109.164 92.8214 109.273 92.9774 109.382 93.0865L109.71 93.5857C109.819 93.7573 109.928 93.8665 109.991 94.0381L110.318 94.5372C110.427 94.7088 110.49 94.8648 110.599 94.9896C110.708 95.1612 110.771 95.3172 110.88 95.4888C110.989 95.6604 111.051 95.8163 111.161 95.9879C111.223 96.1595 111.332 96.3155 111.379 96.4871C111.488 96.7055 111.551 96.9395 111.66 97.0954C112.128 98.2353 112.448 99.4306 112.611 100.652L113.11 102.602C113.329 103.444 115.341 110.557 120.005 112.959C125.356 115.736 132.422 119.199 135.198 120.525L98.5411 142.457V127.435C98.5411 125.049 103.268 122.256 105.436 121.32L105.545 121.258C105.997 121.04 106.434 120.806 106.886 120.541L107.058 120.431C108.008 119.869 108.901 119.216 109.725 118.481C109.788 118.419 109.897 118.372 109.944 118.263C110.053 118.201 110.115 118.092 110.225 118.045C110.505 117.826 110.724 117.546 111.005 117.327L111.114 117.218C111.402 116.948 111.664 116.65 111.894 116.329C111.956 116.22 112.065 116.157 112.112 116.048C112.33 115.83 112.502 115.549 112.72 115.268C112.783 115.206 112.83 115.097 112.892 115.05L113.563 114.051C113.563 113.989 113.625 113.989 113.625 113.942C113.906 113.49 114.187 112.991 114.468 112.554C113.36 111.212 112.518 109.777 111.847 108.436C111.563 109.26 111.208 110.059 110.786 110.822C110.615 111.15 110.396 111.493 110.225 111.821C110.162 111.883 110.162 111.93 110.115 111.93C109.943 112.2 109.756 112.461 109.554 112.71C109.491 112.772 109.445 112.881 109.382 112.928C109.209 113.191 109.005 113.432 108.774 113.646C108.712 113.708 108.712 113.755 108.665 113.755C107.323 115.253 105.717 116.532 103.876 117.421L103.548 117.592C102.597 117.982 94.423 121.71 94.423 127.326V142.348L57.6877 120.478C60.0743 119.027 66.9846 114.909 72.6626 113.131C74.8932 112.414 79.6197 115.408 82.2871 117.577L82.4587 117.748C82.8025 118.094 83.1728 118.412 83.5662 118.7L83.6754 118.809C84.5177 119.48 85.4068 120.151 86.4052 120.65L87.0759 120.977C87.0975 120.98 87.1183 120.986 87.1371 120.997C87.1559 121.008 87.1722 121.022 87.1851 121.04C87.7935 121.367 88.4018 121.648 89.0726 121.929C89.1634 121.972 89.2572 122.008 89.3534 122.038C89.4158 122.038 89.4625 122.1 89.5717 122.1C90.5233 122.428 91.4592 122.709 92.4107 122.943C93.1283 121.554 94.189 120.322 95.3121 119.277C93.7478 119.171 92.2078 118.834 90.7417 118.279C90.6793 118.216 90.5701 118.216 90.5233 118.169C90.3489 118.117 90.1813 118.043 90.0241 117.951C89.9617 117.889 89.8525 117.889 89.8057 117.842C89.6341 117.78 89.4781 117.67 89.3534 117.624C88.2458 117.062 87.2319 116.454 86.296 115.674L84.8453 114.332C83.5046 113.154 82.0522 112.109 80.5088 111.212C76.8899 109.153 73.8325 108.483 71.4927 109.216C66.657 110.776 61.135 113.724 57.7969 115.674L94.4698 49.7841V78.6732C94.4698 79.6715 92.9723 82.3389 87.9027 84.632L87.5751 84.8036C87.0759 85.0219 86.6236 85.3027 86.1244 85.5835L86.0152 85.6459C85.0555 86.2233 84.1428 86.8752 83.2854 87.5957C82.7453 88.0351 82.2442 88.5205 81.7879 89.0464L81.7255 89.1088C81.2324 89.5875 80.7835 90.1096 80.384 90.6687L80.3216 90.7311C80.1032 91.0119 79.9316 91.2927 79.7133 91.5735C79.7133 91.6358 79.6509 91.6358 79.6509 91.6826C79.4793 91.9634 79.3233 92.1818 79.1517 92.4626C79.1517 92.525 79.0893 92.525 79.0893 92.5718L78.5901 93.4141C78.5278 93.4765 78.5277 93.5233 78.481 93.6325C78.3094 93.9133 78.2002 94.1941 78.091 94.4124C78.0887 94.434 78.082 94.4548 78.0713 94.4736C78.0605 94.4924 78.046 94.5088 78.0286 94.5216C77.9194 94.8024 77.8102 95.0208 77.701 95.3016C77.6579 95.3924 77.6214 95.4863 77.5918 95.5824L77.2642 96.4247C77.2211 96.5155 77.1846 96.6094 77.1551 96.7055C77.1032 96.9152 77.03 97.119 76.9367 97.3138C76.8743 97.423 76.8743 97.5322 76.8275 97.6414C76.7651 97.9222 76.6559 98.203 76.6091 98.4214C76.5467 98.5305 76.5467 98.7021 76.4999 98.8113C76.4375 98.9829 76.4375 99.2013 76.3907 99.3729C76.3283 99.5445 76.3283 99.7005 76.2815 99.872C76.2191 100.09 76.2191 100.324 76.1723 100.543C76.1723 100.714 76.1099 100.824 76.1099 100.995C76.1099 101.214 76.0475 101.385 76.0475 101.604C76.0577 101.808 76.0367 102.013 75.9851 102.212V103.054C75.9785 104.062 76.0516 105.069 76.2035 106.065C77.6542 106.392 79.1517 107.016 80.774 107.796C80.3216 106.346 80.1032 104.848 80.0564 103.288V103.007C80.0461 102.637 80.067 102.267 80.1188 101.9V101.619C80.1188 101.292 80.1812 101.011 80.228 100.668V100.558C80.2904 100.231 80.3372 99.8876 80.3996 99.4977C80.3996 99.3885 80.462 99.3261 80.462 99.2169C80.5244 98.9361 80.6336 98.6553 80.6804 98.3746C80.6804 98.3122 80.7428 98.2654 80.7428 98.203L81.0704 97.2046C81.1328 97.1422 81.1328 97.0331 81.1796 96.9863C81.2887 96.7055 81.3979 96.4247 81.5071 96.2063C81.5695 96.1439 81.5695 96.0971 81.6163 95.9879C81.7879 95.6603 81.8971 95.3796 82.1155 95.0988C82.1573 95.0453 82.1939 94.9878 82.2247 94.9272C82.3963 94.6464 82.5055 94.428 82.677 94.1473C82.7189 94.0937 82.7555 94.0363 82.7862 93.9757C82.9735 93.684 83.1766 93.4028 83.3946 93.1333C83.3944 93.1251 83.3958 93.1169 83.3989 93.1092C83.402 93.1015 83.4066 93.0946 83.4124 93.0887C83.4182 93.0829 83.4252 93.0783 83.4329 93.0753C83.4405 93.0722 83.4487 93.0707 83.457 93.0709C83.6754 92.7902 83.847 92.5718 84.0653 92.291C84.1072 92.2375 84.1438 92.18 84.1745 92.1194C85.1787 91.0102 86.3217 90.0351 87.5751 89.218L89.3066 88.3757C90.2581 87.9857 98.3851 84.1484 98.3851 78.5172V49.7373L135.401 116.188C132.11 114.582 126.276 111.68 121.768 109.341C119.147 107.999 117.431 103.273 116.932 101.541L116.433 99.5445C116.433 98.4837 116.152 97.423 115.825 96.3779C114.649 93.0728 112.646 90.1243 110.006 87.8141",
  fill: "white"
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "paint0_linear_rep_icon",
  x1: "193",
  y1: "2.46321",
  x2: "193",
  y2: "193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#723964"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#541B46"
}))));

module.exports = RepIcon;

/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function EthIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("circle", {
    opacity: "0.9",
    cx: "96.5",
    cy: "96.5",
    r: "96.5",
    fill: "url(#paint0_linear_eth_icon)",
    fillOpacity: "0.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M96.8925 38L96.1084 40.665V117.997L96.8925 118.78L132.789 97.5612L96.8925 38Z",
    fill: "#DEDEDE"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M96.8966 38L61 97.5612L96.8966 118.78V81.2453V38Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M96.8945 125.579L96.4526 126.118V153.665L96.8945 154.955L132.813 104.371L96.8945 125.579Z",
    fill: "#DEDEDE"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M96.8966 154.955V125.579L61 104.371L96.8966 154.955Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M96.9001 118.78L132.796 97.5618L96.9001 81.2458V118.78Z",
    fill: "#BDBDBD"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M61 97.5618L96.896 118.78V81.2458L61 97.5618Z",
    fill: "#DEDEDE"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_eth_icon",
    x1: "193",
    y1: "2.46321",
    x2: "193",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#697DBC"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#49589B"
  }))));
};

/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable */
const React = __webpack_require__(4);

const WbtcIcon = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: "193",
  height: "193",
  viewBox: "0 0 193 193",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: "96.5",
  cy: "96.5",
  r: "96.5",
  fill: "url(#paint0_linear_wbtc_icon)",
  fillOpacity: "0.9"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M110.017 81.7978C110.017 91.9371 94.2025 90.7035 89.1782 90.7035V72.8414C94.2025 72.8414 110.017 71.2529 110.017 81.7978ZM114.148 109.529C114.148 120.614 95.1972 119.347 89.1614 119.347V99.6768C95.1972 99.6937 114.148 97.9531 114.148 109.529ZM126.624 77.7927C125.613 67.214 116.508 63.6653 104.993 62.5837V48H96.0908V62.2965C93.7473 62.2965 91.3532 62.2965 88.9759 62.381V48H80.1244V62.6682H74.4595H62.0843V72.2161C62.0843 72.2161 68.6597 72.0978 68.5585 72.2161C71.0234 71.944 73.2591 73.6779 73.6165 76.1366V116.305C73.5086 118.048 72.0131 119.371 70.2749 119.264C70.2648 119.264 70.2546 119.264 70.2445 119.263C70.3625 119.364 63.7703 119.263 63.7703 119.263L62 129.926H73.5996H79.9727V144.831H88.8748V130.145H95.9897V144.763H104.909V130.027C119.948 129.115 130.435 125.397 131.75 111.286C132.812 99.9303 127.484 94.8606 118.97 92.8158C124.146 90.1796 127.4 85.5324 126.624 77.7927Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "paint0_linear_wbtc_icon",
  x1: "193",
  y1: "2.46321",
  x2: "193",
  y2: "193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#FB9D3E"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#E7892A"
}))));

module.exports = WbtcIcon;

/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function DaiIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "96.5",
    cy: "96.5",
    r: "96.5",
    transform: "rotate(-180 96.5 96.5)",
    fill: "url(#paint0_linear_dai_icon)",
    fillOpacity: "0.9"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: "0.9",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M63.7197 64.8383C63.7197 78.1827 63.7043 79.6938 63.5663 79.8476C63.4303 79.999 62.7638 80.0185 57.7064 80.0185H52V85.3476V90.6768H57.7064C62.7638 90.6768 63.4303 90.6962 63.5663 90.8476C63.7016 90.9984 63.7197 91.6467 63.7197 96.3322C63.7197 101.018 63.7016 101.666 63.5663 101.817C63.4303 101.968 62.7638 101.988 57.7064 101.988H52V107.317V112.646H57.7064C62.7638 112.646 63.4303 112.665 63.5663 112.817C63.7043 112.97 63.7197 114.462 63.7197 127.609V142.229L80.9819 142.182C99.2362 142.133 101.179 142.083 104.25 141.585C104.6 141.528 105.215 141.431 105.618 141.369C106.513 141.232 106.628 141.206 108.157 140.805C108.828 140.629 109.598 140.431 109.866 140.365C110.928 140.104 114.123 138.936 115.531 138.295C117.613 137.347 120.57 135.686 121.977 134.675C122.299 134.443 122.87 134.033 123.246 133.763C123.898 133.296 126.426 131.214 126.72 130.902C126.797 130.82 127.1 130.533 127.395 130.264C128.088 129.63 130.542 126.897 131.107 126.129C131.348 125.802 131.569 125.509 131.599 125.479C131.628 125.449 131.916 125.058 132.237 124.609C133.576 122.744 135.243 119.966 135.893 118.519C136.014 118.25 136.258 117.76 136.436 117.431C136.614 117.102 136.987 116.246 137.263 115.528C138.118 113.312 138.277 112.954 138.478 112.797C138.637 112.673 139.558 112.646 143.655 112.644C146.396 112.644 148.739 112.613 148.861 112.577L149.083 112.51L149.038 108.908C148.977 104.116 148.88 102.229 148.688 102.094C148.602 102.034 146.965 101.99 144.764 101.989C141.386 101.988 140.969 101.969 140.825 101.808C140.719 101.69 140.688 101.552 140.734 101.4C140.935 100.745 141.037 96.0032 140.921 92.7092C140.877 91.4501 140.892 90.9478 140.977 90.8332C141.075 90.7021 141.7 90.6768 144.835 90.6768C148.106 90.6768 148.595 90.6552 148.73 90.5059C148.865 90.3555 148.883 89.7365 148.883 85.3476C148.883 80.9587 148.865 80.3397 148.73 80.1893C148.594 80.0386 148.002 80.0185 143.695 80.0185H138.815L138.575 79.7515C138.443 79.6046 138.335 79.4076 138.335 79.3134C138.335 79.2192 138.203 78.8514 138.042 78.4958C137.881 78.1403 137.749 77.787 137.748 77.7105C137.746 77.4788 135.722 73.0649 135.191 72.1335C133.662 69.4536 132.404 67.5575 131.082 65.9414C128.992 63.3876 129.032 63.434 128.569 63.0151C128.381 62.8451 127.941 62.4182 127.592 62.0664C126.092 60.557 123.823 58.7272 121.635 57.2627C120.433 56.4582 117.199 54.6036 116.483 54.3081C116.144 54.1683 115.917 54.0681 114.627 53.4916C112.864 52.7032 108.343 51.3029 106.692 51.0339C106.45 50.9944 106.011 50.9169 105.715 50.8616C104.326 50.6015 102.162 50.3425 100.246 50.2071C99.2707 50.1381 91.745 50.0747 81.1772 50.0465L63.7197 50V64.8383ZM101.223 59.7695C103.266 60.0478 103.735 60.1142 104.055 60.1704C106.227 60.5515 110.191 61.7895 111.728 62.5666C115.413 64.4296 117.398 65.7183 119.584 67.6664C119.987 68.0254 120.338 68.346 120.365 68.3789C120.392 68.4118 120.655 68.6582 120.949 68.9266C121.631 69.5485 122.729 70.77 123.295 71.5371C123.537 71.8647 123.833 72.2449 123.953 72.3818C124.526 73.0334 126.162 75.5923 127.028 77.1907C128.006 78.9952 128.269 79.8058 127.926 79.9524C127.841 79.9888 115.495 80.0185 100.489 80.0185C75.8175 80.0185 73.1924 80.0021 73.0536 79.8476C72.9164 79.6947 72.9002 78.6333 72.9002 69.7952C72.9002 60.9297 72.9161 59.896 73.0547 59.7417C73.1944 59.5861 74.5042 59.5738 86.801 59.6131C95.3616 59.6404 100.7 59.6984 101.223 59.7695ZM130.89 90.7677C131.227 91.0058 131.422 93.0396 131.423 96.3322C131.425 99.3256 131.203 101.676 130.899 101.89C130.826 101.942 117.955 101.985 101.987 101.986C75.9524 101.987 73.1925 101.971 73.0536 101.817C72.9183 101.666 72.9002 101.018 72.9002 96.3322C72.9002 91.6467 72.9183 90.9984 73.0536 90.8476C73.1925 90.6931 75.9524 90.6769 101.987 90.6784C117.816 90.6794 130.822 90.7195 130.89 90.7677ZM127.988 112.815C128.145 113.027 127.989 113.404 126.942 115.35C126.198 116.732 125.329 118.097 124.23 119.606C123.458 120.666 120.909 123.502 119.974 124.342C117.834 126.262 115.382 127.895 112.316 129.444C111.397 129.909 108.432 130.968 106.887 131.383C104.591 132.001 104.598 132 101.223 132.46C100.7 132.531 95.3616 132.589 86.801 132.616C74.5042 132.656 73.1944 132.643 73.0547 132.488C72.9161 132.333 72.9002 131.319 72.9002 122.652C72.9002 114.011 72.9164 112.97 73.0536 112.817C73.1925 112.662 75.8216 112.646 100.534 112.646C125.161 112.646 127.874 112.663 127.988 112.815Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_dai_icon",
    x1: "193",
    y1: "2.46321",
    x2: "193",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FBB82D"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#FBCF6D"
  }))));
};

/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function DgdIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 43,
    height: 43,
    viewBox: "0 0 43 43",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "21.5",
    cy: "21.5",
    r: "21.5",
    fill: "url(#paint0_linear_dgd_icon)",
    fillOpacity: "0.6"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: "0.9",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.5411 12.8265V14.5883H15.0845H11.6279V17.1548V19.7213H16.0418H20.4558V15.393V11.0647H19.4984H18.5411V12.8265ZM21.7435 15.393V19.7213H26.1659H30.5883V17.1548V14.5883H27.8518H25.1154V15.4692V16.3501H26.8945H28.6736V17.1633V17.9764H26.1659H23.6582V15.393V12.8096H27.0385H30.4189V11.9371V11.0647H26.0812H21.7435V15.393ZM11.7974 12.259V13.3008H14.5169H17.2364V12.259V11.2172H14.5169H11.7974V12.259ZM18.3845 17.1675L18.3889 17.9764H15.8811H13.3732V17.1632V16.35L15.8766 16.3543L18.3801 16.3586L18.3845 17.1675ZM11.7974 26.7176V31.9353L18.9859 31.935C23.382 31.9348 26.3027 31.9283 26.5048 31.9183C26.6865 31.9092 26.9348 31.8871 27.0566 31.869C27.2792 31.8359 27.6221 31.759 27.6723 31.7308C27.6872 31.7224 27.8061 31.6806 27.9366 31.6379C28.3105 31.5153 28.944 31.1851 29.1785 30.9906C29.2093 30.9651 29.255 30.9328 29.2802 30.9189C29.4317 30.8347 29.9133 30.3821 30.1273 30.1227C30.1849 30.0528 30.2417 29.984 30.2534 29.9699C30.3237 29.8855 30.385 29.8027 30.385 29.7923C30.385 29.7856 30.4216 29.7295 30.4663 29.6676C30.5693 29.5252 30.6995 29.3151 30.7224 29.2545C30.7321 29.2288 30.7478 29.2079 30.7573 29.2079C30.7669 29.2079 30.7747 29.1963 30.7747 29.1822C30.7747 29.168 30.8117 29.0822 30.857 28.9916C30.9023 28.9009 30.9492 28.7965 30.9612 28.7596C30.9732 28.7227 31.0004 28.6579 31.0216 28.6156C31.0648 28.5295 31.1672 28.2019 31.2088 28.0165C31.2239 27.9497 31.2425 27.8871 31.2503 27.8773C31.2688 27.8541 31.3251 27.522 31.352 27.2767C31.3786 27.0349 31.3789 26.4886 31.3527 26.2179C31.3294 25.9779 31.2731 25.6293 31.2509 25.587C31.2422 25.5706 31.2185 25.4848 31.1982 25.3963C31.1596 25.2278 31.0323 24.818 31.014 24.8034C31.0082 24.7987 30.9774 24.7301 30.9455 24.6509C30.8598 24.4379 30.769 24.2547 30.6641 24.0834C30.6128 23.9996 30.5657 23.9195 30.5594 23.9055C30.5531 23.8916 30.5189 23.8432 30.4834 23.7981C30.4479 23.753 30.4189 23.7097 30.4189 23.7017C30.4189 23.6809 30.2648 23.482 30.1044 23.2957C29.813 22.9574 29.2813 22.4831 29.0448 22.3508C29.0113 22.332 28.9236 22.2792 28.85 22.2333C28.6423 22.1039 28.2601 21.918 28.0371 21.8379C27.9259 21.798 27.8273 21.7598 27.8179 21.7531C27.7288 21.6887 26.8964 21.5339 26.6395 21.5339C26.5836 21.5339 26.5387 21.5263 26.5387 21.5169C26.5387 21.5057 24.0705 21.5 19.168 21.5H11.7974V26.7176ZM26.5302 23.8006C26.7384 23.847 26.8377 23.8784 26.9762 23.9415C27.0351 23.9683 27.0894 23.9902 27.097 23.9902C27.1279 23.9902 27.4491 24.1538 27.4861 24.1884C27.508 24.2089 27.5511 24.2376 27.5817 24.2522C27.7792 24.3458 28.2839 24.8598 28.4225 25.1083C28.4459 25.1502 28.5051 25.2555 28.554 25.3423C28.6525 25.5167 28.7553 25.7897 28.8008 25.9977C28.8171 26.0722 28.8363 26.1408 28.8433 26.1501C28.8617 26.1744 28.8925 26.4229 28.9041 26.6409C28.9143 26.8303 28.8758 27.2615 28.8453 27.3005C28.8373 27.3107 28.8172 27.3762 28.8007 27.4461C28.7385 27.7083 28.6394 27.9469 28.4952 28.1813C28.4443 28.2642 28.4025 28.3385 28.4025 28.3464C28.4025 28.3544 28.3949 28.3609 28.3856 28.3609C28.3763 28.3609 28.3686 28.3723 28.3686 28.3863C28.3686 28.4002 28.3614 28.4117 28.3526 28.4117C28.3437 28.4117 28.3002 28.4631 28.256 28.526C28.1837 28.6287 27.8943 28.9368 27.8702 28.9368C27.8589 28.9368 27.797 28.9878 27.7007 29.0766C27.6628 29.1115 27.6262 29.1401 27.6195 29.1401C27.6127 29.1401 27.5479 29.1789 27.4754 29.2264C27.3199 29.3281 27.0528 29.4591 26.886 29.5152C26.8208 29.5372 26.7631 29.561 26.7578 29.568C26.7441 29.5865 26.3718 29.6611 26.1913 29.6816C26.0904 29.693 24.0361 29.6989 20.1127 29.699L14.1865 29.6991V26.7259V23.7527L20.2736 23.7578L26.3608 23.7629L26.5302 23.8006Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_dgd_icon",
    x1: 43,
    y1: "0.548799",
    x2: 43,
    y2: 43,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#37B06F"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#294C73"
  }))));
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function MkrIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "194",
    height: "194",
    viewBox: "0 0 194 194",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M96.9998 0.850333C43.7043 0.850329 0.499769 44.0549 0.499764 97.3503C0.49976 150.646 43.7043 193.85 96.9998 193.85C150.295 193.85 193.5 150.646 193.5 97.3503C193.5 44.0549 150.295 0.850338 96.9998 0.850333Z",
    fill: "url(#mkr_iconpaint0_linear)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M49.5019 126.301V80.8812L83.946 106.804V126.301H92.7371V104.974C92.7355 104.182 92.5502 103.4 92.1958 102.691C91.8414 101.983 91.3275 101.366 90.6945 100.889L48.9229 69.4395C48.1589 68.8721 47.2524 68.5276 46.3044 68.4443C45.3563 68.361 44.4037 68.5423 43.5525 68.9679C42.7012 69.3935 41.9847 70.0469 41.4824 70.8553C40.9802 71.6637 40.712 72.5955 40.7075 73.5472V126.301H49.5019ZM144.76 126.301V80.8812L110.316 106.804V126.301H101.525V104.974C101.527 104.182 101.712 103.4 102.066 102.691C102.421 101.983 102.935 101.366 103.568 100.889L145.339 69.4524C146.102 68.8856 147.008 68.5412 147.955 68.4574C148.902 68.3736 149.853 68.5538 150.704 68.9778C151.555 69.4019 152.272 70.0533 152.775 70.8599C153.278 71.6664 153.548 72.5966 153.555 73.5472V126.301H144.76Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "mkr_iconpaint0_linear",
    x1: "96.9998",
    y1: "193.85",
    x2: "96.9998",
    y2: "0.850333",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4FA89B"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#6ACEBB"
  }))));
};

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

const UsdtIcon = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: "193",
  height: "193",
  viewBox: "0 0 193 193",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("circle", {
  opacity: "0.9",
  cx: "96.5",
  cy: "96.5",
  r: "96.5",
  fill: "url(#paint0_linear_usdt_icon)"
}), /*#__PURE__*/React.createElement("path", {
  d: "M105.969 86.817V74.2096H134.834V55H56.2339V74.2096H85.1022V86.8069C61.6407 87.8832 44 92.5241 44 98.0838C44 103.643 61.6492 108.284 85.1022 109.367V149.751H105.976V109.364C129.395 108.284 147 103.647 147 98.0922C147 92.5377 129.395 87.9002 105.976 86.8204L105.969 86.817ZM105.976 105.944V105.933C105.387 105.971 102.361 106.152 95.6239 106.152C90.2375 106.152 86.448 105.999 85.1124 105.93V105.947C64.3848 105.03 48.9129 101.425 48.9129 97.1108C48.9129 92.797 64.3865 89.1968 85.1124 88.2781V102.355C86.4701 102.448 90.3529 102.677 95.7121 102.677C102.149 102.677 105.385 102.409 105.979 102.355V88.2781C126.666 89.1985 142.102 92.8072 142.102 97.1058C142.102 101.404 126.659 105.015 105.979 105.935",
  fill: "white"
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "paint0_linear_usdt_icon",
  x1: "96.5",
  y1: "0",
  x2: "96.5",
  y2: "193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#53AE94"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#3F9A80"
}))));

module.exports = UsdtIcon;

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

const KncIcon = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: "193",
  height: "193",
  viewBox: "0 0 193 193",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: "96.5",
  cy: "96.5",
  r: "96.5",
  fill: "url(#paint0_linear)",
  fillOpacity: "0.9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M91.0186 96.5027L130.175 118.931C130.49 119.121 130.849 119.223 131.216 119.227C131.583 119.231 131.945 119.137 132.264 118.956C132.583 118.774 132.848 118.51 133.031 118.192C133.214 117.874 133.31 117.513 133.307 117.146V75.8281C133.312 75.4604 133.218 75.0981 133.034 74.7793C132.851 74.4605 132.585 74.1968 132.265 74.0159C131.945 73.835 131.582 73.7435 131.214 73.7509C130.847 73.7584 130.488 73.8645 130.175 74.0583L91.0186 96.5027Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  d: "M129.345 64.1283L102.578 44.4405C102.3 44.2277 101.975 44.0864 101.631 44.029C101.286 43.9715 100.932 43.9998 100.601 44.1112C100.27 44.2226 99.9714 44.4138 99.7315 44.6679C99.4917 44.922 99.318 45.2312 99.2258 45.5682L89.4524 89.4233L129.11 67.4958C129.412 67.3405 129.668 67.1101 129.855 66.8268C130.042 66.5434 130.152 66.2167 130.176 65.8782C130.2 65.5397 130.135 65.2008 129.99 64.8943C129.844 64.5878 129.622 64.3239 129.345 64.1283",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  d: "M102.546 148.55L129.345 128.862C129.626 128.665 129.851 128.398 130 128.088C130.148 127.779 130.215 127.436 130.193 127.093C130.171 126.751 130.061 126.419 129.874 126.131C129.687 125.843 129.43 125.608 129.126 125.448L89.4524 103.52L99.2258 147.375C99.3069 147.716 99.4713 148.031 99.7044 148.293C99.9374 148.554 100.232 148.754 100.561 148.873C100.89 148.993 101.244 149.029 101.59 148.978C101.937 148.927 102.265 148.79 102.546 148.581",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  d: "M80.8377 95.6884L91.0184 48.0742C91.0961 47.6796 91.0543 47.2708 90.8984 46.9001C90.7425 46.5295 90.4795 46.2137 90.1431 45.9934C89.8067 45.773 89.4121 45.6581 89.01 45.6633C88.6079 45.6684 88.2165 45.7935 87.8858 46.0224L61.8077 66.0235C61.1473 66.5301 60.6129 67.1824 60.2462 67.9295C59.8794 68.6766 59.6902 69.4984 59.6933 70.3307V121.077C59.6804 121.92 59.865 122.754 60.2321 123.513C60.5993 124.272 61.1388 124.934 61.8077 125.447L87.7605 145.386C88.0912 145.615 88.4826 145.74 88.8847 145.745C89.2868 145.75 89.6814 145.635 90.0178 145.415C90.3542 145.194 90.6172 144.879 90.7731 144.508C90.929 144.137 90.9708 143.728 90.8931 143.334L80.8377 95.6884Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "paint0_linear",
  x1: "193",
  y1: "2.46321",
  x2: "193",
  y2: "193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#31CB9E"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#1A9F78"
}))));

module.exports = KncIcon;

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function CompIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "194",
    height: "193",
    viewBox: "0 0 194 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "96.6162",
    cy: "96.5",
    r: "96.5",
    fill: "url(#comp_icon_paint0_linear)",
    fillOpacity: "0.9"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M53.3139 129.449C50.2439 127.653 48.3662 124.454 48.3662 121.018V101.835C48.3662 101.101 48.5718 100.393 48.9555 99.7636C50.1479 97.7966 52.7931 97.1282 54.8489 98.2819L100.104 123.522C102.749 125.004 104.38 127.706 104.38 130.642V150.52C104.38 151.425 104.12 152.33 103.627 153.103C102.133 155.437 98.9529 156.172 96.5132 154.742L53.3139 129.449ZM120.772 93.0238C123.417 94.5055 125.048 97.2069 125.048 100.144V140.476C125.048 141.67 124.376 142.771 123.294 143.348L113.385 148.685C113.261 148.75 113.124 148.803 112.987 148.842V126.447C112.987 123.549 111.397 120.861 108.793 119.366L69.0477 96.6167V71.3366C69.0477 70.6023 69.2533 69.8943 69.637 69.2649C70.8294 67.2981 73.4746 66.6294 75.5304 67.7832L120.772 93.0238ZM140.576 63.2333C143.235 64.7019 144.866 67.4292 144.866 70.3663V129.279C144.866 130.485 144.167 131.599 143.057 132.177L133.669 137.028V96.0134C133.669 93.1159 132.079 90.4408 129.489 88.9459L88.8658 65.6329V41.6509C88.8658 40.9166 89.0713 40.2086 89.4414 39.5792C90.6338 37.6124 93.2789 36.9437 95.3348 38.0844L140.576 63.2333Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "comp_icon_paint0_linear",
    x1: "193.116",
    y1: "2.46321",
    x2: "193.116",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#01D395"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#01D395"
  }))));
};

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function SusdIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z",
    fill: "url(#susd_iconpaint0_linear)"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M82.6359 90.1542C85.2189 90.1542 87.3161 92.3008 87.3161 94.9548C87.3161 97.6055 85.2189 99.7554 82.6327 99.7554H70.4801C58.7103 99.7554 49.1697 89.9721 49.1697 77.9055C49.1697 65.8389 58.7103 56.0588 70.4801 56.0588H101.823C104.409 56.0588 106.504 58.2055 106.504 60.8562C106.504 63.5069 104.409 65.6568 101.823 65.6568H70.4769C63.8795 65.6568 58.5302 71.1404 58.5302 77.9055C58.5302 84.6706 63.8795 90.1542 70.4769 90.1542H82.6294H82.6359Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M73.0406 99.7559C70.4544 99.7559 68.3571 97.606 68.3571 94.9553C68.3571 92.3045 70.4544 90.1547 73.0406 90.1547H85.1932C96.963 90.1547 106.504 99.938 106.504 112.005C106.504 124.071 96.963 133.851 85.1932 133.851H53.8468C51.2606 133.851 49.1665 131.705 49.1665 129.051C49.1665 126.4 51.2606 124.253 53.8468 124.253H85.19C91.7873 124.253 97.1367 118.77 97.1367 112.005C97.1367 105.239 91.7873 99.7559 85.19 99.7559H73.0374H73.0406Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M57.5523 131.913L49.9385 126.322L97.8121 57.8317L105.426 63.4259L57.5523 131.913Z",
    fill: "white",
    fillOpacity: "0.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M114.047 124.643H129.226C131.343 124.643 132.938 124.233 134.01 123.414C135.081 122.594 135.618 121.3 135.618 119.537C135.618 117.771 135.081 116.473 134.01 115.64C132.938 114.808 131.343 114.391 129.226 114.391H114.047V108.797H128.927C132.665 108.797 135.518 109.711 137.484 111.539C139.455 113.367 140.443 116.031 140.443 119.537C140.443 123.04 139.455 125.7 137.484 127.515C135.521 129.327 132.668 130.237 128.93 130.237H114.047V124.643ZM131.694 100.074C132.987 99.9766 134.029 99.4464 134.814 98.4902C135.599 97.534 135.991 96.259 135.991 94.6686C135.991 93.3513 135.711 92.2748 135.151 91.4422C134.902 91.0468 134.556 90.7237 134.146 90.5048C133.736 90.2858 133.276 90.1784 132.813 90.1932C132.115 90.1932 131.558 90.4241 131.15 90.8827C130.738 91.3446 130.413 91.9886 130.179 92.8212C129.84 94.0969 129.547 95.3846 129.3 96.6818C128.975 98.3959 128.561 99.8367 128.046 101.008C127.556 102.15 126.767 103.136 125.765 103.86C124.758 104.592 123.417 104.959 121.748 104.959C120.226 104.959 118.869 104.543 117.672 103.71C116.44 102.833 115.465 101.635 114.851 100.243C114.166 98.7634 113.822 97.0917 113.822 95.228C113.822 93.3123 114.176 91.5918 114.886 90.0631C115.597 88.5345 116.575 87.3311 117.823 86.4464C119.061 85.5675 120.535 85.093 122.047 85.0869V90.5672C121.525 90.6115 121.017 90.7596 120.553 91.003C120.088 91.2464 119.675 91.5802 119.338 91.9853C118.65 92.8049 118.309 93.8847 118.309 95.228C118.309 96.4704 118.57 97.4657 119.094 98.2105C119.618 98.9586 120.364 99.3293 121.336 99.3293C122.034 99.3293 122.578 99.1049 122.964 98.6561C123.35 98.2105 123.662 97.5763 123.896 96.7566C124.134 95.937 124.414 94.6686 124.739 92.9513C125.061 91.2145 125.466 89.7476 125.955 88.554C126.438 87.3603 127.177 86.3976 128.158 85.6658C129.143 84.9308 130.458 84.5632 132.102 84.5632C133.698 84.5632 135.126 84.9991 136.383 85.8707C137.641 86.7391 138.635 87.9523 139.356 89.5037C140.097 91.1461 140.467 92.9349 140.44 94.7401C140.44 96.8315 140.06 98.6886 139.301 100.318C138.612 101.858 137.52 103.179 136.142 104.136C134.807 105.054 133.231 105.547 131.616 105.555L131.694 100.074ZM114.047 81.21V72.1487C114.047 69.5402 114.6 67.2375 115.71 65.234C116.78 63.2712 118.39 61.6646 120.345 60.609C122.327 59.5292 124.591 58.9893 127.132 58.9893C129.674 58.9893 131.935 59.5292 133.92 60.609C135.874 61.6651 137.483 63.2717 138.552 65.234C139.661 67.2342 140.215 69.5402 140.215 72.1487V81.21H114.047ZM135.544 72.1487C135.544 69.7874 134.775 67.953 133.244 66.652C131.71 65.3445 129.674 64.6941 127.132 64.6941C124.591 64.6941 122.552 65.3445 121.021 66.6488C119.483 67.9563 118.721 69.7874 118.721 72.1487V75.6158H135.544V72.1487Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M114.047 124.643H129.226C131.343 124.643 132.938 124.233 134.01 123.414C135.081 122.594 135.618 121.3 135.618 119.537C135.618 117.771 135.081 116.473 134.01 115.64C132.938 114.808 131.343 114.391 129.226 114.391H114.047V108.797H128.927C132.665 108.797 135.518 109.711 137.484 111.539C139.455 113.367 140.443 116.031 140.443 119.537C140.443 123.04 139.455 125.7 137.484 127.515C135.521 129.327 132.668 130.237 128.93 130.237H114.047V124.643ZM131.694 100.074C132.987 99.9766 134.029 99.4464 134.814 98.4902C135.599 97.534 135.991 96.259 135.991 94.6686C135.991 93.3513 135.711 92.2748 135.151 91.4422C134.902 91.0468 134.556 90.7237 134.146 90.5048C133.736 90.2858 133.276 90.1784 132.813 90.1932C132.115 90.1932 131.558 90.4241 131.15 90.8827C130.738 91.3446 130.413 91.9886 130.179 92.8212C129.84 94.0969 129.547 95.3846 129.3 96.6818C128.975 98.3959 128.561 99.8367 128.046 101.008C127.556 102.15 126.767 103.136 125.765 103.86C124.758 104.592 123.417 104.959 121.748 104.959C120.226 104.959 118.869 104.543 117.672 103.71C116.44 102.833 115.465 101.635 114.851 100.243C114.166 98.7634 113.822 97.0917 113.822 95.228C113.822 93.3123 114.176 91.5918 114.886 90.0631C115.597 88.5345 116.575 87.3311 117.823 86.4464C119.061 85.5675 120.535 85.093 122.047 85.0869V90.5672C121.525 90.6115 121.017 90.7596 120.553 91.003C120.088 91.2464 119.675 91.5802 119.338 91.9853C118.65 92.8049 118.309 93.8847 118.309 95.228C118.309 96.4704 118.57 97.4657 119.094 98.2105C119.618 98.9586 120.364 99.3293 121.336 99.3293C122.034 99.3293 122.578 99.1049 122.964 98.6561C123.35 98.2105 123.662 97.5763 123.896 96.7566C124.134 95.937 124.414 94.6686 124.739 92.9513C125.061 91.2145 125.466 89.7476 125.955 88.554C126.438 87.3603 127.177 86.3976 128.158 85.6658C129.143 84.9308 130.458 84.5632 132.102 84.5632C133.698 84.5632 135.126 84.9991 136.383 85.8707C137.641 86.7391 138.635 87.9523 139.356 89.5037C140.097 91.1461 140.467 92.9349 140.44 94.7401C140.44 96.8315 140.06 98.6886 139.301 100.318C138.612 101.858 137.52 103.179 136.142 104.136C134.807 105.054 133.231 105.547 131.616 105.555L131.694 100.074ZM114.047 81.21V72.1487C114.047 69.5402 114.6 67.2375 115.71 65.234C116.78 63.2712 118.39 61.6646 120.345 60.609C122.327 59.5292 124.591 58.9893 127.132 58.9893C129.674 58.9893 131.935 59.5292 133.92 60.609C135.874 61.6651 137.483 63.2717 138.552 65.234C139.661 67.2342 140.215 69.5402 140.215 72.1487V81.21H114.047ZM135.544 72.1487C135.544 69.7874 134.775 67.953 133.244 66.652C131.71 65.3445 129.674 64.6941 127.132 64.6941C124.591 64.6941 122.552 65.3445 121.021 66.6488C119.483 67.9563 118.721 69.7874 118.721 72.1487V75.6158H135.544V72.1487Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "susd_iconpaint0_linear",
    x1: "96.5",
    y1: "0",
    x2: "96.5",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1E1A31"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#141027"
  }))));
};

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function TusdIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M96.5 193C43.425 193 0 149.575 0 96.5C0 43.425 43.425 0 96.5 0C149.575 0 193 43.425 193 96.5C193 149.575 149.575 193 96.5 193Z",
    fill: "url(#tusd_iconpaint0_linear)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M138.92 147H54.08C49.636 147 46 143.364 46 138.92V54.08C46 49.636 49.636 46 54.08 46H138.92C143.364 46 147 49.636 147 54.08V138.92C147 143.364 143.364 147 138.92 147Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M65.7085 136.833C65.4426 136.833 65.2271 136.59 65.2271 136.324V122.753C65.2271 122.487 65.0116 122.245 64.7457 122.245H59.9549C59.6856 122.245 59.4465 122.029 59.4465 121.763V119.141C59.4465 118.875 59.6889 118.632 59.9549 118.632H74.7009C74.9669 118.632 75.2093 118.871 75.2093 119.141V121.763C75.2093 122.029 74.9669 122.245 74.7009 122.245H69.9371C69.6711 122.245 69.4287 122.484 69.4287 122.753V136.324C69.4287 136.59 69.2132 136.833 68.9473 136.833H65.7085Z",
    fill: "#002868"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M89.9283 119.141C89.9283 118.875 90.1438 118.632 90.4097 118.632H93.6215C93.8875 118.632 94.1299 118.871 94.1299 119.141V128.402C94.1299 133.89 91.0258 137.075 86.1004 137.075C81.2019 137.075 78.1248 133.89 78.1248 128.402V119.141C78.1248 118.875 78.3402 118.632 78.6062 118.632H81.818C82.084 118.632 82.3264 118.871 82.3264 119.141V128.534C82.3264 131.237 83.7168 133.163 86.1273 133.163C88.5379 133.163 89.9283 131.237 89.9283 128.534V119.141Z",
    fill: "#002868"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M108.879 124.575C108.452 124.575 108.317 124.413 108.155 124.093C107.593 122.78 106.361 121.952 104.489 121.952C102.802 121.952 101.385 122.541 101.385 123.666C101.385 124.898 102.698 125.406 105.587 125.753C109.977 126.261 112.492 127.601 112.492 131.079C112.492 134.988 109.064 137.048 104.678 137.048C100.877 137.048 97.6109 135.2 97.1026 131.321C97.0487 130.948 97.2372 130.813 97.6109 130.813H100.557C100.93 130.813 101.146 130.975 101.254 131.267C101.654 132.554 103.021 133.543 105.001 133.543C106.741 133.543 108.266 132.9 108.266 131.537C108.266 129.904 106.661 129.611 103.449 129.207C99.7555 128.726 97.1867 127.655 97.1867 124.255C97.1867 120.854 100.106 118.42 104.681 118.42C108.802 118.42 111.667 120.642 112.256 123.962C112.337 124.336 112.229 124.578 111.828 124.578H108.879V124.575Z",
    fill: "#002868"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M116.131 136.833C115.865 136.833 115.649 136.59 115.649 136.324V119.141C115.649 118.875 115.865 118.632 116.131 118.632H123.41C128.816 118.632 133.018 122.352 133.018 127.786C133.018 133.139 128.87 136.833 123.41 136.833H116.131ZM123.41 133.217C126.328 133.217 128.601 130.914 128.601 127.729C128.601 124.544 126.325 122.241 123.383 122.241H120.359C120.093 122.241 119.878 122.48 119.878 122.75V132.732C119.878 132.998 120.093 133.213 120.359 133.213H123.41V133.217Z",
    fill: "#002868"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M144.644 109H48.3562C47.6103 109 47 108.387 47 107.637V53.8132C47 50.0659 50.0514 47 53.7808 47H139.219C142.949 47 146 50.0659 146 53.8132V107.637C146 108.387 145.39 109 144.644 109Z",
    fill: "#002868"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M101.062 98H92.9375C92.4219 98 92 97.5461 92 96.9914V60.0086C92 59.4539 92.4219 59 92.9375 59H101.062C101.578 59 102 59.4539 102 60.0086V96.9914C102 97.5461 101.578 98 101.062 98Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M116.008 69H76.9919C76.4464 69 76 68.5781 76 68.0625V59.9375C76 59.4219 76.4464 59 76.9919 59H116.008C116.554 59 117 59.4219 117 59.9375V68.0625C117 68.5781 116.554 69 116.008 69Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "tusd_iconpaint0_linear",
    x1: "96.5",
    y1: "0",
    x2: "96.5",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#002868"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#001454"
  }))));
};

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function BusdIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "96.5",
    cy: "96.5",
    r: "96.5",
    fill: "url(#busd_iconpaint0_linear)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M96.9903 42L110.455 55.4679L76.6627 89.2694L63.1952 75.8015L96.9903 42ZM63.2597 116.25L76.7243 129.718L130.724 75.7179L117.259 62.25L63.2597 116.25ZM83.5097 136.5L96.9873 150L150.987 96L137.523 82.5321L83.5097 136.5ZM69.9325 96L56.4646 82.5321L43 96L56.4646 109.465L69.9325 96Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "busd_iconpaint0_linear",
    x1: "96.5",
    y1: "0",
    x2: "96.5",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F0B90B"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#DCA500"
  }))));
};

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function LendIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z",
    fill: "url(#lend_iconpaint0_linear)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M131.95 47.8504L122.083 38L89.1445 70.9358L122.08 103.891L131.947 94.0243L108.862 70.939L131.95 47.8504Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M103.856 122.067L70.9166 89.1118L61.05 98.9784L84.1354 122.064L61.05 145.149L70.9166 154.999L103.856 122.067Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M84.9385 75.1071L117.882 108.051L108.061 117.872L75.1173 84.9282L84.9385 75.1071Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "lend_iconpaint0_linear",
    x1: "97",
    y1: "0",
    x2: "97",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#01AEC9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#009AB5"
  }))));
};

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function LinkIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z",
    fill: "url(#link_iconpaint0_linear)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M97 42L87.2645 47.6972L60.7354 63.3027L51 69V123L60.7354 128.697L87.5079 144.303L97.2434 150L106.979 144.303L133.265 128.697L143 123V69L133.265 63.3027L106.735 47.6972L97 42ZM70.4709 111.605V80.3945L97 64.789L123.529 80.3945V111.605L97 127.211L70.4709 111.605Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "link_iconpaint0_linear",
    x1: "96.5",
    y1: "0",
    x2: "96.5",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2A5ADA"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#0232B2"
  }))));
};

/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function ManaIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z",
    fill: "url(#mana_iconpaint0_linear)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M80.3845 72.858L43.876 116.663C41.368 110.25 40 103.296 40 96C40 64.5075 65.5075 39 97 39C128.493 39 154 64.5075 154 96C154 113.414 146.191 129.003 133.879 139.462H60.121C56.9005 136.698 53.965 133.591 51.4 130.2H116.494V105.519L137.043 130.2H142.6L116.465 98.85L109.255 107.514L80.3845 72.858ZM116.465 61.8C108.6 61.8 102.215 68.184 102.215 76.05C102.215 83.916 108.6 90.3 116.465 90.3C124.331 90.3 130.715 83.916 130.715 76.05C130.715 68.184 124.331 61.8 116.465 61.8ZM80.3845 51.483C76.4515 51.483 73.2595 54.675 73.2595 58.608C73.2595 62.541 76.4515 65.733 80.3845 65.733C84.3175 65.733 87.5095 62.541 87.5095 58.608C87.5095 54.675 84.3175 51.483 80.3845 51.483ZM65.8495 143.738H128.151C119.202 149.58 108.486 153 97 153C85.5145 153 74.7985 149.58 65.8495 143.738ZM106.491 110.848L93.922 125.925H48.493C46.6975 122.99 45.13 119.912 43.876 116.663H80.3845V79.527L106.491 110.848Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "mana_iconpaint0_linear",
    x1: "97",
    y1: "193",
    x2: "97",
    y2: "2.21742e-06",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FF2D55"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.0001",
    stopColor: "#E19A3D"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#FFBC5B"
  }))));
};

/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function SnxIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M193 96.5C193 43.2046 149.795 0 96.5 0C43.2046 0 0 43.2046 0 96.5C0 149.795 43.2046 193 96.5 193C149.795 193 193 149.795 193 96.5Z",
    fill: "url(#snx_iconpaint0_linear)"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M101.351 93.3503C102.59 93.3821 103.768 93.8967 104.634 94.7845C105.499 95.6723 105.983 96.8631 105.983 98.1029C105.983 99.3427 105.499 100.533 104.634 101.421C103.768 102.309 102.59 102.824 101.351 102.855H89.0605C83.3675 102.787 77.9309 100.478 73.9293 96.4277C69.9277 92.3778 67.6836 86.9139 67.6836 81.2204C67.6836 75.527 69.9277 70.0631 73.9293 66.0132C77.9309 61.9632 83.3675 59.6538 89.0605 59.5854H120.754C121.993 59.6172 123.171 60.1318 124.036 61.0196C124.902 61.9075 125.386 63.0982 125.386 64.338C125.386 65.5778 124.902 66.7686 124.036 67.6564C123.171 68.5442 121.993 69.0589 120.754 69.0906H89.0605C85.8435 69.0906 82.7582 70.3685 80.4834 72.6433C78.2086 74.9181 76.9307 78.0034 76.9307 81.2204C76.9307 84.4375 78.2086 87.5228 80.4834 89.7976C82.7582 92.0724 85.8435 93.3503 89.0605 93.3503H101.351Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M91.6492 102.855C90.4098 102.824 89.2318 102.309 88.3665 101.421C87.5011 100.533 87.0168 99.3427 87.0168 98.1029C87.0168 96.8631 87.5011 95.6724 88.3665 94.7845C89.2318 93.8967 90.4098 93.3821 91.6492 93.3503H103.94C109.633 93.4187 115.069 95.7281 119.071 99.7781C123.072 103.828 125.316 109.292 125.316 114.985C125.316 120.679 123.072 126.143 119.071 130.193C115.069 134.243 109.633 136.552 103.94 136.62H72.2433C71.0039 136.589 69.8259 136.074 68.9605 135.186C68.0952 134.298 67.6108 133.108 67.6108 131.868C67.6108 130.628 68.0952 129.437 68.9605 128.549C69.8259 127.662 71.0039 127.147 72.2433 127.115H103.94C107.157 127.115 110.242 125.837 112.517 123.562C114.791 121.288 116.069 118.202 116.069 114.985C116.069 111.768 114.791 108.683 112.517 106.408C110.242 104.133 107.157 102.855 103.94 102.855H91.6492Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "snx_iconpaint0_linear",
    x1: "96.5",
    y1: "0",
    x2: "96.5",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1E1A31"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#141027"
  }))));
};

/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function EnjIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "96.5",
    cy: "96.5",
    r: "96.5",
    fill: "url(#enj_iconpaint0_linear)"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M133.848 58.3439C138.699 58.8717 141.073 59.6102 142.532 61.0449C143.842 62.3318 144.054 62.9646 144.051 65.58C144.049 67.4588 143.971 67.9762 143.55 68.8974C143.117 69.845 141.969 71.143 141.539 71.1713C141.46 71.1765 140.965 71.2921 140.439 71.4285C139.759 71.605 131.275 71.7202 111.099 71.8271C83.9095 71.9715 81.4503 72.0324 77.7187 72.6544C72.624 73.5037 69.3557 75.5375 67.6325 78.9307C66.7631 80.6426 66.1918 83.7017 66.2775 86.1861C66.3407 88.0118 66.3753 88.1357 66.9443 88.5676L67.5445 89.0231L104.257 89.1314L140.97 89.2396L141.821 89.7058C144.229 91.0251 145.017 93.7645 144.172 97.8765C143.681 100.265 142.663 101.129 139.563 101.788C138.187 102.08 133.628 102.121 102.482 102.121C71.3562 102.121 66.9143 102.161 66.5176 102.444C66.0932 102.747 66.0715 102.905 66.1687 104.988C66.5227 112.578 68.7589 116.401 73.7993 118.033C75.9838 118.74 78.2277 119.231 80.4827 119.496C81.5155 119.617 94.6334 119.767 111.099 119.846C143.618 120.001 141.378 119.874 142.869 121.648C144.508 123.597 144.825 125.798 143.844 128.401C142.836 131.074 141.248 132.146 136.714 133.217C134.198 133.81 126.268 134.005 104.827 134C81.7337 133.994 76.32 133.815 70.9684 132.88C70.2376 132.753 69.0895 132.556 68.417 132.444C65.7486 131.999 61.8627 130.673 59.3732 129.358C57.2658 128.245 54.3652 125.518 52.8295 123.206C51.2021 120.756 49.6724 116.299 49.1966 112.622C49.0886 111.788 48.8881 110.278 48.751 109.266C48.4159 106.794 48.4165 85.9101 48.7518 83.0693C49.4785 76.9101 50.0134 74.7012 51.5768 71.4015C53.6372 67.0535 55.9357 64.7231 60.4258 62.4301C64.9445 60.1224 70.2716 58.897 77.874 58.4168C79.3042 58.3263 80.5414 58.1841 80.6236 58.1005C80.8588 57.8611 131.541 58.0927 133.848 58.3439Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "enj_iconpaint0_linear",
    x1: "96.5",
    y1: "0",
    x2: "96.5",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7669C8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#4E41A0"
  }))));
};

/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function RenIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z",
    fill: "url(#ren_iconpaint0_linear)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M63.0147 64.5922L71.0939 59.9493L72.1777 61.8246L101.949 44.6444L99.7734 43.3932L97.5884 42.1245L96.5046 41.4991L48.0015 69.5171V70.7684L61.9309 62.7157L63.0147 64.5922Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M63.0147 82.2312L86.3477 68.7505L87.4405 70.6446L117.212 53.4638L115.036 52.1951L112.851 50.9438L111.758 50.3185L48.0015 87.1296V88.3808L61.9309 80.3275L63.0147 82.2312Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M63.0147 91.0501L93.9781 73.1645L95.071 75.0398L124.843 57.8389L122.658 56.6142L120.482 55.3364L119.386 54.715L48.0015 95.9317V97.2094L61.9309 89.1561L63.0147 91.0501Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M63.0147 99.8521L101.826 77.4464L102.919 79.3217L132.471 62.2644L130.285 60.9956L128.109 59.7444L127.016 59.1204L48.0015 104.751V106.002L61.9309 97.949L63.0147 99.8521Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M63.0147 108.646L109.456 81.8441L110.549 83.7472L140.101 66.6718L137.916 65.4121L135.74 64.1434L134.647 63.5181L48.0015 113.554V114.804L61.9309 106.77L63.0147 108.646Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M143.368 68.5655L142.276 67.9221L48.0015 122.372V123.624L61.9309 115.587L63.0147 117.462L109.456 90.6628L110.549 92.5381L144.999 72.662V69.5168L143.368 68.5655Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M53.975 128.972L61.7872 124.47L62.871 126.346L109.236 99.5872L110.328 101.481L144.998 81.4636V75.1653L52.9087 128.347L53.975 128.972Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M109.237 108.408L110.33 110.302L145 90.2843V83.9846L60.5396 132.743L61.6233 133.378L69.5532 128.796L70.646 130.69",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M69.2529 137.793L77.1821 133.197L78.2749 135.091L109.236 117.211L110.329 119.105L144.999 99.0874V92.7877L68.1426 137.15L69.2529 137.793Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M76.8834 142.197L84.8132 137.616L85.906 139.491L109.237 126.028L110.33 127.904L145 107.877V101.604L75.7905 141.572L76.8834 142.197Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M83.4204 145.968L84.5132 146.593L92.467 142.012L93.5333 143.906L109.234 134.822L110.327 136.725L144.997 116.698V110.409L83.4204 145.968Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M92.1436 151.016L100.073 146.408L101.164 148.313L109.235 143.626L110.328 145.529L144.998 125.519V119.227L91.0508 150.39L92.1436 151.016Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M109.58 49.0512L107.403 47.7999L105.218 46.55L104.134 45.8969L48.0015 78.3114V79.5626L61.9309 71.5358L63.0147 73.4111L78.7244 64.3451L79.8347 66.2482L109.58 49.0512Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ren_iconpaint0_linear",
    x1: "96.5",
    y1: "0",
    x2: "96.5",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#0E3158"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#001D44"
  }))));
};

/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

const RepV2Icon = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: "193",
  height: "193",
  viewBox: "0 0 193 193",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z",
  fill: "url(#paint0_linear_rep_v2_icon)"
}), /*#__PURE__*/React.createElement("path", {
  d: "M142.859 114.956L133.001 98.4857C132.629 97.877 131.834 97.6911 131.225 98.0631L124.816 102.172C124.241 102.544 124.055 103.305 124.41 103.897L130.041 113.299C130.21 113.586 130.126 113.975 129.838 114.161L96.9998 135.214C96.7968 135.349 96.5262 135.349 96.3232 135.214L63.4676 114.161C63.1801 113.975 63.0956 113.603 63.2647 113.299L68.8956 103.897C69.2507 103.305 69.0647 102.544 68.4898 102.172L62.081 98.0631C61.4722 97.674 60.6775 97.8601 60.3055 98.4857L50.4471 114.956C49.7369 116.14 50.1089 117.661 51.2587 118.389L95.2749 146.594C96.1034 147.135 97.1857 147.135 98.0142 146.594L142.03 118.389C143.197 117.661 143.552 116.14 142.859 114.956Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  d: "M67.2217 89.3205L73.6305 93.4295C74.2392 93.8184 75.034 93.6325 75.406 93.0068L96.1036 58.3925C96.3573 57.9867 96.9489 57.9867 97.1858 58.3925L117.9 93.0068C118.272 93.6157 119.067 93.8016 119.676 93.4295L126.085 89.3205C126.659 88.9484 126.846 88.1875 126.49 87.5957L101.751 46.2344C101.278 45.4735 100.466 45 99.5701 45H93.7362C92.8398 45 92.0114 45.4735 91.5549 46.2344L66.8158 87.5957C66.4607 88.1875 66.6467 88.9484 67.2217 89.3205Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "paint0_linear_rep_v2_icon",
  x1: "96.5",
  y1: "0",
  x2: "96.5",
  y2: "193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#2AE7A8"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#0CC98A"
}))));

module.exports = RepV2Icon;

/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

const CrvIcon = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: "193",
  height: "193",
  viewBox: "0 0 193 193",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z",
  fill: "url(#crv_icon_paint0_linear)"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M76.2177 148.008C58.0775 148.008 50.0676 119.058 50.0676 92.6451C49.5964 79.5308 54.5908 52.6895 78.338 50.2394C108.022 47.1768 138.913 74.2693 145.245 87.2266C151.576 100.184 151.134 111.021 133.465 116.911C119.33 121.622 100.794 126.099 93.2934 127.748C91.6185 140.004 87.3085 148.008 76.2177 148.008ZM94.3088 100.097C94.3251 100.126 94.3414 100.155 94.3578 100.184C94.0618 100.184 93.9688 100.124 94.2418 99.9766C94.264 100.017 94.2864 100.057 94.3088 100.097ZM94.2418 99.9766C87.6197 88.0796 88.9805 80.3907 101.16 80.3908C113.411 80.3908 145.009 87.9334 117.681 94.0587C100.666 97.8724 95.1998 99.46 94.2418 99.9766ZM77.4365 141.465C85.3512 139.905 89.8504 128.913 87.4859 116.914C85.1213 104.914 76.7883 96.4506 68.8736 98.0103C60.9589 99.5699 56.4596 110.562 58.8242 122.562C61.1888 134.561 69.5218 143.025 77.4365 141.465Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "crv_icon_paint0_linear",
  x1: "96.5",
  y1: "0",
  x2: "96.5",
  y2: "193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#3465A4"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#164786"
}))));

module.exports = CrvIcon;

/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

const YfiIcon = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: "193",
  height: "193",
  viewBox: "0 0 193 193",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z",
  fill: "url(#yfi_icon_paint0_linear)"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M92.1308 50.2803C86.275 51.3934 82.0009 53.8803 78.227 58.3713C75.9242 61.1117 74.1338 65.0921 73.3097 69.3036C72.9173 71.3087 73.1241 75.7259 73.7154 77.9642C74.7082 81.7229 77.3823 86.2173 80.1319 88.7482C82.6158 91.0342 87.4677 94.5833 88.3522 94.7611C89.6609 95.0244 90.0902 94.1065 89.9734 91.2943C89.8839 89.1355 89.8413 89.0008 88.9531 88.0747C88.4433 87.5431 87.2972 86.5834 86.4061 85.9421C83.2543 83.6734 81.524 81.2714 80.2174 77.3503C78.2859 71.5552 79.7585 65.5031 84.1825 61.0558C87.3944 57.8269 91.1034 56.268 95.5734 56.268C100.043 56.268 103.752 57.8266 106.965 61.0558C110.257 64.364 111.889 68.6513 111.68 73.4432C111.559 76.2166 111.058 77.3921 110.058 77.2484C109.367 77.1494 108.899 76.2405 108.268 73.7735C107.689 71.5113 107.197 70.7379 106.197 70.5172C105.13 70.2816 103.448 70.7789 102.447 71.6257C101.739 72.2252 101.634 72.468 101.732 73.2826C101.886 74.5517 106.048 88.8094 106.549 89.7824C107.282 91.2085 108.143 91.2147 111.916 89.82C118.637 87.3357 123.705 85.5513 124.039 85.5513C124.236 85.5513 124.764 85.2411 125.212 84.862C126.216 84.0134 126.251 83.2501 125.373 81.356C124.471 79.4079 123.842 79.1963 121.26 79.9736C118.335 80.8542 118.007 80.879 117.453 80.2627C116.981 79.7391 116.984 79.6363 117.56 76.7295C118.014 74.4391 118.114 73.2629 117.988 71.7237C117.62 67.2497 116.41 63.5033 114.317 60.3588C112.705 57.9347 109.374 54.5749 107.404 53.3841C102.859 50.6381 96.7651 49.3994 92.1308 50.2803ZM93.9641 68.227L93.1901 69.0051V96.7322V124.459L93.9943 125.268C94.7559 126.033 94.8899 126.07 96.5156 125.966C97.8442 125.881 98.3661 125.722 98.823 125.263L99.4132 124.67L99.5456 98.1226C99.6185 83.5214 99.6103 70.9288 99.5274 70.1387C99.316 68.1218 98.5166 67.4489 96.3326 67.4489C94.9236 67.4489 94.6484 67.5394 93.9641 68.227ZM102.43 99.8602C102.276 100.263 102.19 101.491 102.239 102.589C102.345 104.967 102.552 105.299 105.265 107.439C108.427 109.932 110.236 112.751 111.242 116.751C113.261 124.776 108.405 133.306 100.34 135.901C97.9345 136.675 94.0868 136.854 91.8658 136.296C85.98 134.816 81.2584 130.072 79.7879 124.16C78.8653 120.451 79.8612 115.618 81.5894 115.417C82.2414 115.342 82.338 115.454 82.7149 116.73C82.9415 117.498 83.1274 118.613 83.1277 119.209C83.128 120.558 83.8443 122.039 84.7161 122.493C85.4742 122.889 87.044 122.735 88.1578 122.156C89.1986 121.615 89.5399 120.444 89.237 118.453C88.9936 116.853 88.7243 114.729 88.1374 109.777C87.5215 104.579 87.1643 103.034 86.4289 102.389C86.0531 102.06 85.5439 101.791 85.297 101.792C85.0502 101.792 82.8822 102.215 80.479 102.73C78.0758 103.245 74.3817 104.031 72.2698 104.476C70.1579 104.921 68.1639 105.459 67.8384 105.671C67.1123 106.144 66.857 107.074 67.0757 108.449C67.5069 111.158 68.2327 111.532 71.8405 110.905C75.6359 110.246 75.8458 110.675 74.0859 115.5C73.2862 117.693 73.212 118.156 73.212 120.957C73.2115 128.318 76.827 134.982 83.0917 139.169C85.7057 140.916 88.0138 141.846 91.473 142.546C94.3447 143.127 94.4104 143.128 97.6673 142.675C102.196 142.045 104.577 141.236 107.402 139.365C116.743 133.181 120.339 122.015 116.246 111.904C115.824 110.861 115.081 109.343 114.596 108.531C112.603 105.195 105.504 99.1385 103.577 99.1313C102.875 99.1286 102.657 99.2668 102.43 99.8602Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "yfi_icon_paint0_linear",
  x1: "96.5",
  y1: "0",
  x2: "96.5",
  y2: "193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#1479F8"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#1360B3"
}))));

module.exports = YfiIcon;

/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

const PaxusdIcon = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: "193",
  height: "193",
  viewBox: "0 0 193 193",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z",
  fill: "url(#paxusd_icon_paint0_linear)"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M74.2169 59.9574C76.1711 57.7303 77.952 55.8296 79.6534 54.2381C50.8969 53.3049 59.2677 74.2527 49.8971 95.5412C39.1063 120.059 51.1668 129.402 69.1382 132.313C66.6471 129.35 64.6134 125.961 63.0653 122.303C51.4139 107.521 56.1034 80.5903 74.2169 59.9574Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M143.412 86.0738C140.736 93.668 135.825 102.19 128.883 110.577C123.472 117.112 117.456 122.259 111.247 125.986C104.069 130.672 95.1645 133.437 85.2088 133.437C79.6359 133.437 74.1567 133.125 69.1377 132.312C72.1031 135.836 75.7076 138.761 79.9001 140.802C105.899 153.472 107.54 129.936 135.047 117.994C150.493 111.287 150.55 98.1765 143.412 86.0738Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M111.238 61.5815C115.073 62.2857 118.711 63.5566 121.969 65.4115C130.701 70.3894 138.654 78.0066 143.411 86.0731C148.095 72.7796 145.914 62.3286 135.666 60.4365C124.403 58.3612 115.598 57.6942 107.136 51.7402C96.7148 44.4065 87.58 46.8253 79.6523 54.2392C80.2119 54.2563 80.7828 54.2821 81.3708 54.3165C92.3689 54.9691 102.864 57.1274 111.238 61.5815Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  d: "M62.6723 122.612L63.5255 122.108C58.3502 109.868 58.7143 94.602 65.9993 82.4271L65.9993 82.4271C75.6991 66.2143 95.1724 59.1351 111.148 62.075L111.474 61.1419C103.012 56.6382 92.4375 54.474 81.4042 53.8162L81.4034 53.8162C80.8071 53.7815 80.2318 53.7584 79.671 53.7384L79.4633 53.7309L79.3116 53.8729C77.5933 55.4802 75.8003 57.3944 73.8408 59.6275C64.7295 70.0061 58.9842 81.9792 56.9866 93.2368C54.9901 104.489 56.7322 115.076 62.6723 122.612Z",
  fill: "white",
  stroke: "#40A240"
}), /*#__PURE__*/React.createElement("path", {
  d: "M111.503 126.415C117.764 122.657 123.825 117.472 129.267 110.896C136.242 102.473 141.184 93.9005 143.882 86.2404L143.96 86.0208L143.842 85.8203C139.035 77.6718 131.016 69.9923 122.216 64.9782C118.904 63.0897 115.211 61.8041 111.328 61.0909L111.002 62.0241C116.453 64.9234 120.972 68.7977 124.119 73.8685C127.265 78.9378 129.059 85.2313 129.018 92.9988C128.945 106.441 122.057 118.326 110.972 125.568L111.503 126.415Z",
  fill: "white",
  stroke: "#40A240"
}), /*#__PURE__*/React.createElement("path", {
  d: "M116.967 81.4997L116.967 81.4997C123.051 94.896 121.319 110.223 109.152 118.103C96.9355 126.013 80.6463 122.486 72.7656 110.22C64.8952 97.9708 68.7695 82.1685 80.6348 73.6672C93.9031 64.1633 110.815 67.9504 116.967 81.4997ZM111.474 61.1403L111.405 61.104L111.329 61.09C94.9812 58.0845 75.0748 65.3091 65.1415 81.9122C57.6791 94.3834 57.313 109.99 62.6048 122.496L63.0653 122.301L62.6048 122.496C64.1706 126.196 66.2268 129.632 68.7556 132.636L68.8751 132.778L69.0582 132.808C74.1121 133.626 79.6197 133.936 85.2064 133.936C95.2587 133.936 104.259 131.145 111.518 126.404C122.87 118.992 129.945 106.8 130.017 93.0032C130.06 85.0729 128.227 78.5896 124.969 73.3402C121.712 68.0925 117.048 64.1062 111.474 61.1403Z",
  fill: "white",
  stroke: "#40A240"
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "paxusd_icon_paint0_linear",
  x1: "96.5",
  y1: "0",
  x2: "96.5",
  y2: "193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#51B849"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#005121"
}))));

module.exports = PaxusdIcon;

/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

const DpiIcon = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: "193",
  height: "193",
  viewBox: "0 0 193 193",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z",
  fill: "url(#dpi_icon_paint0_linear)"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M85.7577 119.631C90.1489 119.631 94.2992 119.081 98.2066 117.982C102.115 116.882 105.52 115.172 108.423 112.852C111.326 110.531 113.615 107.519 115.29 103.812C116.964 100.108 117.802 95.6092 117.802 90.3146C117.802 85.1045 117.057 81.0513 115.569 77.3045C114.079 73.5596 112.013 70.5253 109.372 68.2043C106.729 65.8834 103.603 64.1731 99.9931 63.0742C96.3821 61.9747 92.4182 61.4252 88.1021 61.4252H75.2625V119.631H85.7577ZM61.1941 47.5H92.3449C97.5543 47.5 102.579 48.3758 107.418 50.126C112.256 51.8782 116.535 54.5442 120.258 58.1272C123.98 61.7116 126.958 66.2097 129.19 71.6242C131.424 77.0407 132.54 82.986 132.54 90.3146C132.54 97.7257 131.256 104.139 128.688 109.553C126.12 114.97 122.807 119.447 118.751 122.99C114.693 126.533 110.19 129.179 105.241 130.929C100.289 132.682 95.4329 133.556 90.6701 133.556H61.1941V47.5Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  d: "M123.768 81.7726L123.768 81.7725C121.067 79.4013 117.877 77.6578 114.204 76.5397C110.54 75.4239 106.526 74.8691 102.168 74.8691H89.3281H88.8281V75.3691V124.736H89.8281V75.8691H102.168C106.441 75.8691 110.355 76.4131 113.913 77.4964L113.913 77.4964C117.46 78.5761 120.522 80.2531 123.108 82.5238C125.681 84.7855 127.705 87.7507 129.17 91.4331L130.099 91.0635C128.584 87.2561 126.476 84.1529 123.768 81.7726ZM142.302 123.283L142.302 123.283C139.76 128.645 136.486 133.064 132.488 136.557C128.476 140.059 124.028 142.673 119.14 144.402L119.14 144.402C114.236 146.137 109.436 147 104.736 147H75.4681L61.9431 133.364L70.1937 56.19C71.5731 56.1728 74.2088 56.0883 77.5544 55.981C82.005 55.8382 87.7118 55.6551 93.3875 55.5368C98.6311 55.4274 103.857 55.3729 108.072 55.4548C110.18 55.4957 112.029 55.5706 113.498 55.6891C114.905 55.8026 115.915 55.953 116.472 56.1323L116.551 56.2052L116.997 56.6174C117.384 56.9742 117.94 57.4879 118.619 58.1156C119.977 59.371 121.826 61.0821 123.792 62.9051C127.726 66.5529 132.119 70.6436 133.977 72.4312C137.642 75.9617 140.584 80.3996 142.794 85.7587C144.998 91.1049 146.105 96.9838 146.105 104.258C146.105 111.613 144.831 117.949 142.302 123.283Z",
  stroke: "white"
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "dpi_icon_paint0_linear",
  x1: "96.5",
  y1: "0",
  x2: "96.5",
  y2: "193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#8150E6"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#4F24A8"
}))));

module.exports = DpiIcon;

/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

const UniIcon = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: "193",
  height: "193",
  viewBox: "0 0 193 193",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z",
  fill: "url(#uni_icon_paint0_linear)"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M79.9651 55.0815C78.6985 54.8862 78.6451 54.8633 79.2411 54.7723C80.3833 54.5977 83.0804 54.8356 84.939 55.2748C89.278 56.2999 93.2262 58.9259 97.4407 63.5897L98.5603 64.8287L100.162 64.5728C106.91 63.495 113.774 64.3516 119.516 66.9878C121.095 67.713 123.586 69.1567 123.897 69.5277C123.996 69.6459 124.178 70.407 124.301 71.2191C124.728 74.0288 124.514 76.1824 123.65 77.791C123.179 78.6663 123.153 78.9437 123.469 79.6928C123.722 80.2906 124.426 80.7331 125.123 80.7321C126.549 80.7302 128.085 78.4378 128.797 75.2481L129.08 73.9811L129.64 74.6114C132.711 78.07 135.123 82.7866 135.538 86.1439L135.645 87.0193L135.129 86.2235C134.241 84.8542 133.348 83.922 132.205 83.1702C130.144 81.815 127.965 81.3538 122.195 81.0515C116.983 80.7786 114.034 80.3362 111.109 79.3883C106.133 77.7757 103.624 75.6281 97.7132 67.9201C95.0877 64.4964 93.4649 62.6022 91.8507 61.0768C88.1828 57.6105 84.5786 55.7927 79.9651 55.0815Z",
  fill: "white"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M125.074 62.7255C125.205 60.4314 125.518 58.9182 126.147 57.5362C126.396 56.9893 126.629 56.5416 126.666 56.5416C126.702 56.5416 126.593 56.9453 126.425 57.4387C125.967 58.7798 125.892 60.6142 126.207 62.7485C126.607 65.4564 126.835 65.8471 129.715 68.7723C131.065 70.1444 132.637 71.8748 133.206 72.6178L134.242 73.9687L133.206 73.0032C131.94 71.8226 129.027 69.5202 128.384 69.191C127.952 68.9703 127.888 68.9742 127.622 69.2374C127.377 69.4799 127.325 69.8444 127.292 71.5674C127.238 74.2528 126.87 75.9764 125.982 77.6998C125.501 78.6319 125.425 78.433 125.86 77.3809C126.184 76.5953 126.217 76.25 126.215 73.6504C126.21 68.4271 125.586 67.1714 121.928 65.0203C121.001 64.4754 119.473 63.6895 118.534 63.2738C117.594 62.8581 116.848 62.496 116.875 62.469C116.978 62.3665 120.546 63.4016 121.983 63.9507C124.119 64.7674 124.472 64.8733 124.731 64.7748C124.905 64.7087 124.989 64.2053 125.074 62.7255Z",
  fill: "white"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M82.4254 71.6614C79.8542 68.1431 78.2633 62.7486 78.6077 58.716L78.7142 57.4681L79.2995 57.5743C80.3986 57.7735 82.2937 58.4746 83.1811 59.0103C85.6162 60.4802 86.6705 62.4155 87.743 67.385C88.0572 68.8406 88.4694 70.4879 88.6591 71.0455C88.9644 71.9431 90.1182 74.0398 91.0563 75.4015C91.732 76.3822 91.2831 76.8469 89.7895 76.7129C87.5085 76.5083 84.4187 74.3888 82.4254 71.6614Z",
  fill: "white"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M121.954 97.8468C109.938 93.0382 105.706 88.8642 105.706 81.8216C105.706 80.7852 105.742 79.9373 105.785 79.9373C105.829 79.9373 106.294 80.2793 106.819 80.6974C109.255 82.6398 111.984 83.4695 119.537 84.5648C123.983 85.2093 126.484 85.7299 128.792 86.4905C136.125 88.908 140.663 93.814 141.745 100.496C142.06 102.438 141.875 106.079 141.365 107.998C140.963 109.514 139.735 112.246 139.409 112.351C139.319 112.38 139.23 112.036 139.207 111.568C139.084 109.059 137.808 106.616 135.665 104.786C133.229 102.706 129.957 101.049 121.954 97.8468Z",
  fill: "white"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M113.519 99.8444C113.368 98.9539 113.107 97.8167 112.939 97.3173L112.632 96.4094L113.201 97.0447C113.99 97.9239 114.612 99.0489 115.14 100.547C115.543 101.691 115.588 102.031 115.585 103.889C115.582 105.714 115.532 106.096 115.16 107.126C114.573 108.749 113.845 109.9 112.624 111.136C110.429 113.356 107.607 114.585 103.534 115.095C102.827 115.183 100.763 115.333 98.9495 115.426C94.3784 115.663 91.3698 116.151 88.6664 117.095C88.2778 117.23 87.9307 117.313 87.8955 117.278C87.7861 117.17 89.6267 116.079 91.147 115.351C93.2906 114.325 95.4245 113.765 100.206 112.973C102.567 112.582 105.006 112.108 105.626 111.919C111.475 110.137 114.481 105.538 113.519 99.8444Z",
  fill: "white"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M119.027 109.567C117.431 106.156 117.064 102.862 117.939 99.7909C118.032 99.4627 118.183 99.1941 118.273 99.1941C118.364 99.1941 118.741 99.3965 119.11 99.6438C119.846 100.136 121.322 100.965 125.253 103.095C130.158 105.754 132.955 107.812 134.857 110.163C136.523 112.223 137.553 114.569 138.05 117.429C138.33 119.049 138.165 122.947 137.747 124.578C136.428 129.723 133.363 133.763 128.991 136.121C128.351 136.467 127.776 136.75 127.714 136.752C127.651 136.753 127.885 136.163 128.232 135.441C129.703 132.385 129.87 129.413 128.758 126.105C128.077 124.079 126.689 121.607 123.887 117.429C120.628 112.572 119.829 111.28 119.027 109.567Z",
  fill: "white"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M73.8933 127.972C78.3524 124.23 83.9006 121.572 88.9545 120.755C91.1326 120.404 94.761 120.543 96.778 121.056C100.011 121.879 102.903 123.721 104.407 125.915C105.877 128.06 106.508 129.929 107.164 134.087C107.423 135.728 107.705 137.374 107.79 137.748C108.283 139.903 109.243 141.625 110.432 142.49C112.32 143.864 115.572 143.949 118.771 142.709C119.314 142.499 119.785 142.353 119.818 142.386C119.935 142.501 118.324 143.572 117.187 144.137C115.658 144.896 114.442 145.189 112.827 145.189C109.897 145.189 107.464 143.708 105.435 140.687C105.035 140.093 104.137 138.313 103.44 136.73C101.296 131.872 100.238 130.393 97.75 128.773C95.5846 127.364 92.7919 127.111 90.6911 128.135C87.9314 129.48 87.1614 132.985 89.1379 135.206C89.9235 136.089 91.3884 136.85 92.5863 136.999C94.8273 137.276 96.7532 135.581 96.7532 133.333C96.7532 131.872 96.1885 131.039 94.767 130.401C92.8255 129.531 90.7387 130.549 90.7487 132.361C90.753 133.135 91.0916 133.62 91.8712 133.97C92.3714 134.195 92.383 134.213 91.9752 134.129C90.1938 133.762 89.7765 131.627 91.2088 130.21C92.9284 128.509 96.4842 129.26 97.7053 131.582C98.2183 132.557 98.2778 134.5 97.8306 135.672C96.8296 138.298 93.911 139.678 90.9503 138.927C88.9345 138.415 88.1137 137.861 85.6833 135.373C81.4602 131.049 79.8207 130.211 73.7323 129.267L72.5657 129.086L73.8933 127.972Z",
  fill: "white"
})), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M54.077 50.5862C68.1803 67.5992 77.894 74.6185 78.9735 76.1014C79.8647 77.3259 79.5293 78.4268 78.0025 79.2896C77.1533 79.7693 75.4076 80.2553 74.5336 80.2553C73.5451 80.2553 73.2056 79.8763 73.2056 79.8763C72.6325 79.3359 72.3096 79.4304 69.3661 74.2374C65.2796 67.935 61.8596 62.7068 61.7663 62.6193C61.5506 62.4169 61.5543 62.4237 68.9494 75.5749C70.1443 78.3159 69.1871 79.3221 69.1871 79.7124C69.1871 80.5066 68.9691 80.924 67.9834 82.0168C66.3402 83.8388 65.6057 85.8859 65.0754 90.1227C64.481 94.8721 62.8095 98.227 58.1772 103.969C55.4657 107.33 55.022 107.946 54.3378 109.301C53.476 111.007 53.239 111.962 53.143 114.116C53.0415 116.394 53.2392 117.866 53.9393 120.043C54.5522 121.95 55.192 123.209 56.8277 125.726C58.2392 127.899 59.0519 129.514 59.0519 130.146C59.0519 130.649 59.1485 130.649 61.3358 130.158C66.5702 128.984 70.8205 126.917 73.2109 124.385C74.6903 122.817 75.0377 121.952 75.0489 119.805C75.0563 118.4 75.0066 118.106 74.6245 117.297C74.0026 115.982 72.8703 114.888 70.3748 113.193C67.1051 110.971 65.7085 109.183 65.3227 106.723C65.0062 104.705 65.3734 103.281 67.1823 99.5126C69.0545 95.6123 69.5185 93.9503 69.8324 90.0189C70.0351 87.479 70.3158 86.4774 71.05 85.6733C71.8158 84.8349 72.5052 84.5509 74.4003 84.2936C77.4899 83.8741 79.4573 83.0796 81.0744 81.5986C82.4772 80.3137 83.0642 79.0757 83.1543 77.212L83.2227 75.7994L82.4387 74.891C79.5998 71.6009 52.1758 48 52.0011 48C51.9638 48 52.898 49.1639 54.077 50.5862ZM60.6456 116.694C61.2875 115.564 60.9464 114.112 59.8727 113.402C58.8583 112.731 57.2823 113.047 57.2823 113.921C57.2823 114.188 57.4306 114.382 57.7649 114.553C58.3278 114.84 58.3687 115.164 57.9258 115.826C57.4773 116.496 57.5135 117.085 58.028 117.485C58.8571 118.13 60.0309 117.775 60.6456 116.694Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M85.173 85.0345C83.7226 85.4773 82.3126 87.0052 81.8762 88.6072C81.61 89.5846 81.761 91.2989 82.1598 91.8284C82.8041 92.6836 83.4272 92.9089 85.1143 92.8971C88.4174 92.8742 91.2889 91.4662 91.6227 89.706C91.8964 88.2631 90.6352 86.2635 88.8981 85.3856C88.0017 84.9328 86.0953 84.7532 85.173 85.0345ZM89.0343 88.0355C89.5437 87.3161 89.3208 86.5387 88.4545 86.0129C86.8048 85.0116 84.3099 85.8402 84.3099 87.3892C84.3099 88.1603 85.6109 89.0016 86.8035 89.0016C87.5972 89.0016 88.6835 88.5311 89.0343 88.0355Z",
  fill: "white"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "uni_icon_paint0_linear",
  x1: "96.5",
  y1: "0",
  x2: "96.5",
  y2: "193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#FC157B"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#CA0049"
}))));

module.exports = UniIcon;

/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function LrcIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z",
    fill: "url(#paint0_linear_lrc_icon)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M104.68 94.887H145V95.205L81.96 133.364L113.32 108.561L104.68 94.887ZM81 58V134L49 108.561L81 58Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_lrc_icon",
    x1: "96.5",
    y1: "192.988",
    x2: "96.5",
    y2: "-0.0118143",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#0042E1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#1C60FF"
  }))));
};

/***/ }),
/* 32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

const BalIcon = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: "193",
  height: "193",
  viewBox: "0 0 193 193",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z",
  fill: "url(#bal_paint0_linear)"
}), /*#__PURE__*/React.createElement("path", {
  d: "M96 128C72.8021 128 54 121.263 54 112.235C54 107.525 59.1212 103.281 67.3181 100.292C73.7161 104.419 84.4518 106.533 96.6238 106.533C108.506 106.533 119.009 103.952 125.465 100C133.198 102.96 138 107.087 138 111.637C138 120.679 119.198 128 96 128Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  d: "M96.5 105C79.1068 105 65 99.4155 65 92.523C65 88.7021 69.3483 85.2779 76.1649 83C81.0298 85.6012 88.32 87.2619 96.5 87.2619C104.68 87.2619 111.97 85.6012 116.835 83C123.666 85.2926 128 88.7021 128 92.523C128.014 99.4155 113.908 105 96.5 105Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("path", {
  d: "M96.5 85C82.9723 85 72 80.5143 72 75C72 69.4857 82.9723 65 96.5 65C110.028 65 121 69.4857 121 75C121 80.5143 110.028 85 96.5 85Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "bal_paint0_linear",
  x1: "96.5",
  y1: "0",
  x2: "96.5",
  y2: "193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#414141"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#1E1E1E"
}))));

module.exports = BalIcon;

/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

const GusdIcon = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: "193",
  height: "193",
  viewBox: "0 0 193 193",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: "96.5",
  cy: "96.5",
  r: "96.5",
  fill: "url(#gusd_paint0_linear)"
}), /*#__PURE__*/React.createElement("path", {
  d: "M110.819 52C94.9873 52 81.5405 64.1745 79.8509 79.8468C64.1705 81.5405 52 94.9873 52 110.815C52.0043 119.084 55.2907 127.013 61.1372 132.86C66.9837 138.707 74.9122 141.995 83.1809 142C99.0127 142 112.513 129.825 114.149 114.153C129.825 112.46 142 99.0127 142 83.185C141.996 74.9163 138.709 66.9874 132.863 61.1401C127.016 55.2928 119.088 52.0054 110.819 52V52ZM134.694 86.6745C133.915 91.7884 131.522 96.5196 127.865 100.177C124.207 103.835 119.476 106.228 114.362 107.006V86.6745H134.694V86.6745ZM59.3064 107.325C60.0744 102.202 62.4626 97.4588 66.1212 93.7906C69.7798 90.1225 74.5166 87.7219 79.6382 86.9405V107.272H59.3064V107.325V107.325ZM107.06 114.362C106.215 120.09 103.338 125.323 98.9534 129.104C94.5693 132.886 88.9708 134.965 83.1809 134.96C77.3921 134.965 71.7947 132.887 67.4112 129.106C63.0278 125.325 60.151 120.093 59.3064 114.366H107.06V114.362ZM107.325 86.6745V107.272H86.6745V86.6745H107.325ZM134.694 79.6382H86.9405C87.7851 73.9102 90.6624 68.6773 95.0466 64.8955C99.4307 61.1137 105.029 59.0355 110.819 59.0405C116.608 59.0355 122.205 61.1133 126.589 64.8943C130.972 68.6754 133.849 73.9072 134.694 79.6341V79.6382Z",
  fill: "white"
}), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "gusd_paint0_linear",
  x1: "96.5",
  y1: "0",
  x2: "96.5",
  y2: "193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#00DCFA"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#0096B4"
}))));

module.exports = GusdIcon;

/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function AaveIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "96.5",
    cy: "96.5",
    r: "96.5",
    fill: "url(#aave_paint0_linear)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M137.09 133.327L105.581 56.874C105.04 55.1899 103.985 53.7176 102.564 52.664C101.143 51.6104 99.4278 51.0285 97.659 51H94.8877C93.1242 51.0347 91.4155 51.6195 90.0005 52.6727C88.5856 53.7258 87.5349 55.1947 86.9954 56.874L73.2894 90.1903H62.8969C61.4026 90.206 59.9744 90.8087 58.9206 91.8682C57.8667 92.9277 57.2717 94.3591 57.2638 95.8534V95.9137C57.2717 97.408 57.8667 98.8394 58.9206 99.8989C59.9744 100.958 61.4026 101.561 62.8969 101.577H68.4697L55.3962 133.327C55.1472 134.023 55.0148 134.756 55.0046 135.496C54.9433 137.057 55.4946 138.582 56.5409 139.743C57.0821 140.297 57.7358 140.73 58.4581 141.01C59.1804 141.291 59.9544 141.413 60.728 141.37C61.8985 141.353 63.035 140.974 63.9813 140.285C64.9663 139.547 65.736 138.559 66.2104 137.423L80.6394 101.577H90.6102C92.1097 101.569 93.5456 100.97 94.6059 99.9094C95.6663 98.849 96.2655 97.4132 96.2734 95.9137V95.763C96.2655 94.2635 95.6663 92.8277 94.6059 91.7673C93.5456 90.707 92.1097 90.1078 90.6102 90.0999H85.2784L96.2734 62.6275L126.246 137.423C126.72 138.559 127.49 139.547 128.475 140.285C129.421 140.974 130.558 141.353 131.728 141.37C132.507 141.418 133.287 141.297 134.015 141.017C134.742 140.736 135.401 140.301 135.946 139.743C136.981 138.577 137.521 137.053 137.452 135.496C137.49 134.755 137.366 134.015 137.09 133.327Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "aave_paint0_linear",
    x1: "96.5",
    y1: "0",
    x2: "96.5",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2E8997"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#3B698E"
  }))));
};

/***/ }),
/* 35 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function UniV2DaiEthIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "194",
    viewBox: "0 0 193 194",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "96.5",
    cy: "97.3508",
    r: "91.5",
    transform: "rotate(-180 96.5 97.3508)",
    fill: "url(#paint0_linear_univ2daieth)",
    fillOpacity: "0.9",
    stroke: "#FD007A",
    strokeWidth: "10"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: "0.9",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M63.7197 65.6891C63.7197 79.0336 63.7043 80.5446 63.5663 80.6984C63.4303 80.8498 62.7638 80.8693 57.7064 80.8693H52V86.1984V91.5276H57.7064C62.7638 91.5276 63.4303 91.5471 63.5663 91.6984C63.7016 91.8492 63.7197 92.4975 63.7197 97.183C63.7197 101.869 63.7016 102.517 63.5663 102.668C63.4303 102.819 62.7638 102.838 57.7064 102.838H52V108.168V113.497H57.7064C62.7638 113.497 63.4303 113.516 63.5663 113.668C63.7043 113.821 63.7197 115.313 63.7197 128.459V143.08L80.9819 143.033C99.2362 142.983 101.179 142.934 104.25 142.436C104.6 142.379 105.215 142.282 105.618 142.22C106.513 142.083 106.628 142.057 108.157 141.656C108.828 141.48 109.598 141.282 109.866 141.216C110.928 140.954 114.123 139.787 115.531 139.146C117.613 138.197 120.57 136.537 121.977 135.525C122.299 135.294 122.87 134.884 123.246 134.614C123.898 134.147 126.426 132.065 126.72 131.752C126.797 131.671 127.1 131.384 127.395 131.115C128.088 130.481 130.542 127.748 131.107 126.98C131.348 126.653 131.569 126.36 131.599 126.33C131.628 126.3 131.916 125.909 132.237 125.46C133.576 123.595 135.243 120.817 135.893 119.37C136.014 119.101 136.258 118.611 136.436 118.282C136.614 117.953 136.987 117.097 137.263 116.379C138.118 114.163 138.277 113.805 138.478 113.648C138.637 113.524 139.558 113.497 143.655 113.495C146.396 113.494 148.739 113.464 148.861 113.427L149.083 113.361L149.038 109.758C148.977 104.966 148.88 103.079 148.688 102.945C148.602 102.885 146.965 102.841 144.764 102.84C141.386 102.839 140.969 102.82 140.825 102.659C140.719 102.54 140.688 102.403 140.734 102.251C140.935 101.596 141.037 96.854 140.921 93.5601C140.877 92.301 140.892 91.7986 140.977 91.684C141.075 91.5529 141.7 91.5276 144.835 91.5276C148.106 91.5276 148.595 91.5061 148.73 91.3567C148.865 91.2063 148.883 90.5874 148.883 86.1984C148.883 81.8095 148.865 81.1906 148.73 81.0401C148.594 80.8894 148.002 80.8693 143.695 80.8693H138.815L138.575 80.6023C138.443 80.4555 138.335 80.2584 138.335 80.1642C138.335 80.07 138.203 79.7022 138.042 79.3467C137.881 78.9911 137.749 78.6378 137.748 78.5613C137.746 78.3297 135.722 73.9157 135.191 72.9843C133.662 70.3044 132.404 68.4083 131.082 66.7923C128.992 64.2384 129.032 64.2849 128.569 63.8659C128.381 63.6959 127.941 63.2691 127.592 62.9172C126.092 61.4079 123.823 59.578 121.635 58.1135C120.433 57.309 117.199 55.4545 116.483 55.159C116.144 55.0191 115.917 54.9189 114.627 54.3424C112.864 53.554 108.343 52.1538 106.692 51.8847C106.45 51.8452 106.011 51.7678 105.715 51.7124C104.326 51.4524 102.162 51.1933 100.246 51.0579C99.2707 50.989 91.745 50.9255 81.1772 50.8974L63.7197 50.8508V65.6891ZM101.223 60.6204C103.266 60.8987 103.735 60.965 104.055 61.0212C106.227 61.4023 110.191 62.6403 111.728 63.4174C115.413 65.2804 117.398 66.5691 119.584 68.5172C119.987 68.8762 120.338 69.1968 120.365 69.2298C120.392 69.2626 120.655 69.5091 120.949 69.7775C121.631 70.3994 122.729 71.6208 123.295 72.3879C123.537 72.7156 123.833 73.0957 123.953 73.2326C124.526 73.8842 126.162 76.4432 127.028 78.0416C128.006 79.846 128.269 80.6567 127.926 80.8033C127.841 80.8396 115.495 80.8693 100.489 80.8693C75.8175 80.8693 73.1924 80.853 73.0536 80.6984C72.9164 80.5455 72.9002 79.4841 72.9002 70.646C72.9002 61.7805 72.9161 60.7468 73.0547 60.5925C73.1944 60.4369 74.5042 60.4246 86.801 60.464C95.3616 60.4913 100.7 60.5492 101.223 60.6204ZM130.89 91.6185C131.227 91.8566 131.422 93.8905 131.423 97.183C131.425 100.176 131.203 102.527 130.899 102.741C130.826 102.793 117.955 102.836 101.987 102.837C75.9524 102.838 73.1925 102.822 73.0536 102.668C72.9183 102.517 72.9002 101.869 72.9002 97.183C72.9002 92.4975 72.9183 91.8492 73.0536 91.6984C73.1925 91.5439 75.9524 91.5277 101.987 91.5292C117.816 91.5302 130.822 91.5703 130.89 91.6185ZM127.988 113.666C128.145 113.877 127.989 114.255 126.942 116.201C126.198 117.583 125.329 118.948 124.23 120.457C123.458 121.517 120.909 124.353 119.974 125.192C117.834 127.113 115.382 128.746 112.316 130.295C111.397 130.76 108.432 131.819 106.887 132.234C104.591 132.852 104.598 132.851 101.223 133.311C100.7 133.382 95.3616 133.44 86.801 133.467C74.5042 133.506 73.1944 133.494 73.0547 133.338C72.9161 133.184 72.9002 132.17 72.9002 123.502C72.9002 114.862 72.9164 113.82 73.0536 113.668C73.1925 113.513 75.8216 113.497 100.534 113.497C125.161 113.497 127.874 113.513 127.988 113.666Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M190.56 45.3508C190.56 68.5799 171.729 87.4108 148.5 87.4108C125.271 87.4108 106.44 68.5799 106.44 45.3508C106.44 22.1217 125.271 3.29077 148.5 3.29077C171.729 3.29077 190.56 22.1217 190.56 45.3508Z",
    fill: "#FD007A",
    stroke: "white",
    strokeWidth: "4.88"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M138.584 20.258C137.811 20.1388 137.778 20.1248 138.142 20.0693C138.839 19.9627 140.485 20.108 141.619 20.376C144.268 21.0017 146.677 22.6044 149.25 25.4508L149.933 26.207L150.91 26.0508C155.029 25.393 159.218 25.9158 162.723 27.5248C163.687 27.9674 165.207 28.8485 165.397 29.0749C165.457 29.1471 165.568 29.6116 165.643 30.1073C165.903 31.8221 165.773 33.1365 165.246 34.1183C164.958 34.6525 164.942 34.8218 165.136 35.279C165.29 35.6439 165.719 35.9139 166.145 35.9133C167.015 35.9121 167.953 34.513 168.387 32.5662L168.56 31.793L168.901 32.1777C170.776 34.2885 172.248 37.1672 172.501 39.2163L172.567 39.7505L172.252 39.2649C171.71 38.4291 171.165 37.8602 170.467 37.4013C169.209 36.5742 167.879 36.2927 164.358 36.1083C161.177 35.9417 159.377 35.6717 157.592 35.0931C154.555 34.1089 153.024 32.7982 149.416 28.0938C147.813 26.0042 146.823 24.8481 145.838 23.9171C143.599 21.8016 141.399 20.6921 138.584 20.258Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M166.115 24.9233C166.195 23.5232 166.385 22.5996 166.77 21.7562C166.922 21.4223 167.064 21.1491 167.086 21.1491C167.108 21.1491 167.042 21.3955 166.939 21.6967C166.66 22.5152 166.614 23.6348 166.806 24.9374C167.051 26.5901 167.19 26.8286 168.947 28.6139C169.771 29.4513 170.73 30.5074 171.078 30.9609L171.71 31.7854L171.078 31.1961C170.305 30.4756 168.528 29.0703 168.135 28.8694C167.871 28.7347 167.832 28.7371 167.67 28.8977C167.52 29.0458 167.489 29.2682 167.468 30.3198C167.436 31.9588 167.211 33.0107 166.669 34.0626C166.375 34.6315 166.329 34.5101 166.594 33.8679C166.792 33.3885 166.813 33.1777 166.811 31.5911C166.808 28.4032 166.427 27.6368 164.194 26.3239C163.629 25.9913 162.697 25.5117 162.123 25.258C161.55 25.0043 161.094 24.7833 161.111 24.7668C161.174 24.7042 163.351 25.336 164.228 25.6711C165.532 26.1696 165.747 26.2342 165.905 26.1741C166.012 26.1337 166.063 25.8265 166.115 24.9233Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M140.085 30.3771C138.516 28.2298 137.545 24.9374 137.755 22.4762L137.82 21.7146L138.177 21.7794C138.848 21.901 140.005 22.3289 140.546 22.6558C142.033 23.5529 142.676 24.7341 143.331 27.7671C143.522 28.6555 143.774 29.6609 143.89 30.0013C144.076 30.5491 144.78 31.8288 145.353 32.6598C145.765 33.2584 145.491 33.542 144.58 33.4602C143.187 33.3353 141.302 32.0418 140.085 30.3771Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M164.211 46.3589C156.877 43.424 154.294 40.8766 154.294 36.5783C154.294 35.9457 154.316 35.4282 154.343 35.4282C154.369 35.4282 154.653 35.6369 154.973 35.8921C156.46 37.0776 158.126 37.584 162.736 38.2525C165.449 38.6458 166.975 38.9636 168.384 39.4278C172.86 40.9033 175.629 43.8975 176.29 47.9759C176.482 49.161 176.369 51.3833 176.058 52.5546C175.813 53.4797 175.063 55.1472 174.864 55.2113C174.809 55.229 174.755 55.0189 174.741 54.7332C174.665 53.2018 173.887 51.7109 172.579 50.594C171.092 49.3243 169.095 48.3133 164.211 46.3589Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M159.062 47.578C158.97 47.0345 158.811 46.3405 158.708 46.0357L158.521 45.4816L158.869 45.8693C159.35 46.4059 159.73 47.0925 160.052 48.0071C160.298 48.7051 160.325 48.9126 160.324 50.0469C160.322 51.1604 160.291 51.3939 160.064 52.0221C159.706 53.0128 159.262 53.7153 158.516 54.4693C157.176 55.8246 155.454 56.5748 152.969 56.8859C152.537 56.9398 151.277 57.0311 150.17 57.0882C147.38 57.2325 145.544 57.5305 143.894 58.1064C143.657 58.189 143.445 58.2396 143.424 58.2182C143.357 58.152 144.48 57.4865 145.408 57.0422C146.717 56.4157 148.019 56.0741 150.937 55.5911C152.378 55.3522 153.867 55.0629 154.245 54.9477C157.815 53.8599 159.65 51.0527 159.062 47.578Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M162.424 53.512C161.45 51.4301 161.226 49.42 161.76 47.5454C161.817 47.3451 161.909 47.1812 161.964 47.1812C162.019 47.1812 162.249 47.3047 162.475 47.4556C162.924 47.7561 163.825 48.2621 166.224 49.5622C169.218 51.1846 170.925 52.4408 172.086 53.876C173.102 55.1329 173.731 56.5646 174.034 58.3104C174.206 59.2991 174.105 61.6783 173.85 62.6739C173.045 65.8137 171.174 68.2797 168.506 69.7189C168.115 69.9297 167.764 70.1028 167.726 70.1036C167.688 70.1044 167.83 69.7443 168.042 69.3037C168.94 67.4387 169.042 65.6246 168.363 63.6054C167.948 62.3689 167.101 60.8603 165.39 58.3104C163.401 55.3462 162.913 54.5573 162.424 53.512Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M134.878 64.7452C137.599 62.4613 140.986 60.8388 144.07 60.3406C145.4 60.126 147.614 60.2111 148.845 60.5243C150.818 61.0262 152.583 62.1505 153.501 63.4898C154.398 64.7986 154.783 65.9393 155.184 68.4773C155.342 69.4786 155.514 70.4837 155.566 70.7114C155.867 72.0268 156.453 73.0779 157.178 73.6062C158.331 74.4447 160.316 74.4965 162.268 73.7398C162.599 73.6111 162.887 73.5223 162.907 73.5425C162.978 73.6123 161.995 74.2663 161.301 74.6108C160.368 75.0741 159.626 75.2533 158.64 75.2533C156.852 75.2533 155.367 74.3494 154.128 72.5057C153.885 72.1428 153.337 71.0563 152.911 70.0907C151.603 67.1257 150.957 66.2225 149.438 65.2339C148.117 64.374 146.412 64.2198 145.13 64.8446C143.446 65.6655 142.976 67.8047 144.182 69.1605C144.662 69.6994 145.556 70.1639 146.287 70.2543C147.655 70.4237 148.83 69.3894 148.83 68.0169C148.83 67.1257 148.485 66.6172 147.618 66.2279C146.433 65.6964 145.159 66.3179 145.165 67.4241C145.168 67.896 145.375 68.192 145.85 68.4061C146.156 68.5434 146.163 68.5541 145.914 68.5027C144.827 68.2787 144.572 66.976 145.446 66.1111C146.496 65.0732 148.666 65.5311 149.411 66.9485C149.724 67.5437 149.76 68.7292 149.487 69.4449C148.877 71.0473 147.095 71.8895 145.288 71.4312C144.058 71.1188 143.557 70.7809 142.074 69.2624C139.496 66.6233 138.496 66.112 134.78 65.5356L134.068 65.4251L134.878 64.7452Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M122.783 17.5144C131.391 27.8979 137.319 32.182 137.978 33.0871C138.522 33.8344 138.318 34.5063 137.386 35.0329C136.867 35.3257 135.802 35.6223 135.269 35.6223C134.665 35.6223 134.458 35.391 134.458 35.391C134.108 35.0612 133.911 35.1189 132.115 31.9494C129.621 28.1028 127.533 24.912 127.476 24.8585C127.345 24.735 127.347 24.7391 131.86 32.7657C132.59 34.4386 132.005 35.0527 132.005 35.291C132.005 35.7757 131.872 36.0304 131.271 36.6974C130.268 37.8094 129.82 39.0588 129.496 41.6447C129.133 44.5434 128.113 46.5909 125.286 50.0954C123.631 52.1468 123.36 52.5228 122.942 53.3496C122.416 54.3908 122.272 54.974 122.213 56.2886C122.151 57.6788 122.272 58.577 122.699 59.906C123.073 61.0697 123.464 61.838 124.462 63.3746C125.324 64.7007 125.82 65.6865 125.82 66.072C125.82 66.3787 125.879 66.3791 127.213 66.0794C130.408 65.3625 133.002 64.1014 134.461 62.5558C135.364 61.5992 135.576 61.071 135.583 59.7605C135.588 58.903 135.557 58.7234 135.324 58.2301C134.944 57.4273 134.253 56.7597 132.73 55.725C130.735 54.369 129.882 53.2774 129.647 51.7762C129.454 50.5444 129.678 49.6754 130.782 47.3756C131.924 44.9951 132.208 43.9807 132.399 41.5813C132.523 40.0311 132.694 39.4198 133.142 38.9291C133.61 38.4174 134.031 38.244 135.187 38.087C137.073 37.831 138.274 37.3461 139.261 36.4421C140.117 35.6579 140.475 34.9023 140.53 33.7649L140.572 32.9027L140.093 32.3483C138.361 30.3403 121.623 15.936 121.516 15.936C121.494 15.936 122.064 16.6463 122.783 17.5144ZM126.792 57.8618C127.184 57.172 126.976 56.2857 126.321 55.8525C125.701 55.4434 124.74 55.6362 124.74 56.1694C124.74 56.3322 124.83 56.4506 125.034 56.555C125.378 56.7305 125.403 56.9282 125.132 57.3319C124.859 57.7409 124.881 58.1006 125.195 58.3448C125.701 58.7386 126.417 58.5219 126.792 57.8618Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M141.762 38.5392C140.877 38.8094 140.016 39.7419 139.75 40.7197C139.587 41.3162 139.68 42.3625 139.923 42.6857C140.316 43.2076 140.697 43.3451 141.726 43.3379C143.742 43.3239 145.495 42.4646 145.699 41.3903C145.866 40.5097 145.096 39.2892 144.036 38.7535C143.489 38.4771 142.325 38.3675 141.762 38.5392ZM144.119 40.3708C144.43 39.9317 144.294 39.4572 143.765 39.1363C142.758 38.5252 141.235 39.0309 141.235 39.9763C141.235 40.4469 142.029 40.9604 142.757 40.9604C143.242 40.9604 143.905 40.6732 144.119 40.3708Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_univ2daieth",
    x1: "193",
    y1: "3.31404",
    x2: "193",
    y2: "193.851",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FBB82D"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#FBCF6D"
  }))));
};

/***/ }),
/* 36 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = __webpack_require__(4);

module.exports = function RenBtcIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "193",
    height: "193",
    viewBox: "0 0 193 193",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "96.5",
    cy: "96.5",
    r: "96.5",
    fill: "url(#paint0_linear_ren_btc)"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M114.144 87.9962C110.762 97.5549 96.2646 91.1168 91.5281 89.441L97.4861 72.6018C102.223 74.2777 117.661 78.0552 114.144 87.9962ZM108.788 115.517C105.091 125.968 87.6481 118.452 81.9579 116.439L88.5191 97.8947C94.2036 99.924 112.65 104.604 108.788 115.517ZM131.136 89.76C133.711 79.4497 126.312 73.0673 115.817 68.2067L120.681 54.4582L112.289 51.4889L107.52 64.9666C105.311 64.1849 103.054 63.3863 100.785 62.673L105.581 49.1156L97.2368 46.1632L92.3442 59.9913L87.0036 58.1018L75.3372 53.9739L72.1524 62.975C72.1524 62.975 78.3907 65.0567 78.2558 65.1345C80.6704 65.7002 82.1996 68.0804 81.7164 70.5176L68.3179 108.386C67.635 109.992 65.7838 110.741 64.1806 110.061C64.1711 110.057 64.1616 110.054 64.1526 110.049C64.23 110.184 58.0491 107.889 58.0491 107.889L52.8234 117.351L63.7588 121.221L69.7669 123.346L64.7953 137.398L73.1875 140.367L78.0858 126.523L84.7932 128.896L79.9175 142.676L88.3256 145.651L93.2408 131.76C107.723 135.916 118.849 135.909 124.796 123.045C129.585 112.694 126.253 106.137 118.909 101.37C124.668 100.611 129.285 97.3151 131.136 89.76Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_ren_btc",
    x1: "96.5",
    y1: "0",
    x2: "96.5",
    y2: "193",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#999A9D"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#5F6064"
  }))));
};

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports) => {

/** AUTOMATICALLY GENERATED FILE **/

exports.ilks = [
    {
        "asset": "ETH",
        "ilkLabel": "ETH-A",
        "ilkBytes": "0x4554482d41000000000000000000000000000000000000000000000000000000",
        "join": "0x2F0b23f53734252Bda2277357e97e1517d6B042A",
        "flip": "0xF32836B9E1f47a0515c6Ec431592D5EbC276407f",
        "pip": "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763",
        "isLP": false
    },
    {
        "asset": "ETH",
        "ilkLabel": "ETH-B",
        "ilkBytes": "0x4554482d42000000000000000000000000000000000000000000000000000000",
        "join": "0x08638eF1A205bE6762A8b935F5da9b700Cf7322c",
        "flip": "0xD499d71bE9e9E5D236A07ac562F7B6CeacCa624c",
        "pip": "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763",
        "isLP": false
    },
    {
        "asset": "BAT",
        "ilkLabel": "BAT-A",
        "ilkBytes": "0x4241542d41000000000000000000000000000000000000000000000000000000",
        "join": "0x3D0B1912B66114d4096F48A8CEe3A56C231772cA",
        "flip": "0xF7C569B2B271354179AaCC9fF1e42390983110BA",
        "pip": "0xB4eb54AF9Cc7882DF0121d26c5b97E802915ABe6",
        "isLP": false
    },
    {
        "asset": "USDC",
        "ilkLabel": "USDC-A",
        "ilkBytes": "0x555344432d410000000000000000000000000000000000000000000000000000",
        "join": "0xA191e578a6736167326d05c119CE0c90849E84B7",
        "flip": "0xbe359e53038E41a1ffA47DAE39645756C80e557a",
        "pip": "0x77b68899b99b686F415d074278a9a16b336085A0",
        "isLP": false
    },
    {
        "asset": "USDC",
        "ilkLabel": "USDC-B",
        "ilkBytes": "0x555344432d420000000000000000000000000000000000000000000000000000",
        "join": "0x2600004fd1585f7270756DDc88aD9cfA10dD0428",
        "flip": "0x77282aD36aADAfC16bCA42c865c674F108c4a616",
        "pip": "0x77b68899b99b686F415d074278a9a16b336085A0",
        "isLP": false
    },
    {
        "asset": "WBTC",
        "ilkLabel": "WBTC-A",
        "ilkBytes": "0x574254432d410000000000000000000000000000000000000000000000000000",
        "join": "0xBF72Da2Bd84c5170618Fbe5914B0ECA9638d5eb5",
        "flip": "0x58CD24ac7322890382eE45A3E4F903a5B22Ee930",
        "pip": "0xf185d0682d50819263941e5f4EacC763CC5C6C42",
        "isLP": false
    },
    {
        "asset": "TUSD",
        "ilkLabel": "TUSD-A",
        "ilkBytes": "0x545553442d410000000000000000000000000000000000000000000000000000",
        "join": "0x4454aF7C8bb9463203b66C816220D41ED7837f44",
        "flip": "0x9E4b213C4defbce7564F2Ac20B6E3bF40954C440",
        "pip": "0xeE13831ca96d191B688A670D47173694ba98f1e5",
        "isLP": false
    },
    {
        "asset": "ZRX",
        "ilkLabel": "ZRX-A",
        "ilkBytes": "0x5a52582d41000000000000000000000000000000000000000000000000000000",
        "join": "0xc7e8Cd72BDEe38865b4F5615956eF47ce1a7e5D0",
        "flip": "0xa4341cAf9F9F098ecb20fb2CeE2a0b8C78A18118",
        "pip": "0x7382c066801E7Acb2299aC8562847B9883f5CD3c",
        "isLP": false
    },
    {
        "asset": "KNC",
        "ilkLabel": "KNC-A",
        "ilkBytes": "0x4b4e432d41000000000000000000000000000000000000000000000000000000",
        "join": "0x475F1a89C1ED844A08E8f6C50A00228b5E59E4A9",
        "flip": "0x57B01F1B3C59e2C0bdfF3EC9563B71EEc99a3f2f",
        "pip": "0xf36B79BD4C0904A5F350F1e4f776B81208c13069",
        "isLP": false
    },
    {
        "asset": "MANA",
        "ilkLabel": "MANA-A",
        "ilkBytes": "0x4d414e412d410000000000000000000000000000000000000000000000000000",
        "join": "0xA6EA3b9C04b8a38Ff5e224E7c3D6937ca44C0ef9",
        "flip": "0x0a1D75B4f49BA80724a214599574080CD6B68357",
        "pip": "0x8067259EA630601f319FccE477977E55C6078C13",
        "isLP": false
    },
    {
        "asset": "USDT",
        "ilkLabel": "USDT-A",
        "ilkBytes": "0x555344542d410000000000000000000000000000000000000000000000000000",
        "join": "0x0Ac6A1D74E84C2dF9063bDDc31699FF2a2BB22A2",
        "flip": "0x667F41d0fDcE1945eE0f56A79dd6c142E37fCC26",
        "pip": "0x7a5918670B0C390aD25f7beE908c1ACc2d314A3C",
        "isLP": false
    },
    {
        "asset": "PAXUSD",
        "ilkLabel": "PAXUSD-A",
        "ilkBytes": "0x5041585553442d41000000000000000000000000000000000000000000000000",
        "join": "0x7e62B7E279DFC78DEB656E34D6a435cC08a44666",
        "flip": "0x52D5D1C05CC79Fc24A629Cb24cB06C5BE5d766E7",
        "pip": "0x043B963E1B2214eC90046167Ea29C2c8bDD7c0eC",
        "isLP": false
    },
    {
        "asset": "COMP",
        "ilkLabel": "COMP-A",
        "ilkBytes": "0x434f4d502d410000000000000000000000000000000000000000000000000000",
        "join": "0xBEa7cDfB4b49EC154Ae1c0D731E4DC773A3265aA",
        "flip": "0x524826F84cB3A19B6593370a5889A58c00554739",
        "pip": "0xBED0879953E633135a48a157718Aa791AC0108E4",
        "isLP": false
    },
    {
        "asset": "LRC",
        "ilkLabel": "LRC-A",
        "ilkBytes": "0x4c52432d41000000000000000000000000000000000000000000000000000000",
        "join": "0x6C186404A7A238D3d6027C0299D1822c1cf5d8f1",
        "flip": "0x7FdDc36dcdC435D8F54FDCB3748adcbBF70f3dAC",
        "pip": "0x9eb923339c24c40Bef2f4AF4961742AA7C23EF3a",
        "isLP": false
    },
    {
        "asset": "LINK",
        "ilkLabel": "LINK-A",
        "ilkBytes": "0x4c494e4b2d410000000000000000000000000000000000000000000000000000",
        "join": "0xdFccAf8fDbD2F4805C174f856a317765B49E4a50",
        "flip": "0xB907EEdD63a30A3381E6D898e5815Ee8c9fd2c85",
        "pip": "0x9B0C694C6939b5EA9584e9b61C7815E8d97D9cC7",
        "isLP": false
    },
    {
        "asset": "BAL",
        "ilkLabel": "BAL-A",
        "ilkBytes": "0x42414c2d41000000000000000000000000000000000000000000000000000000",
        "join": "0x4a03Aa7fb3973d8f0221B466EefB53D0aC195f55",
        "flip": "0xb2b9bd446eE5e58036D2876fce62b7Ab7334583e",
        "pip": "0x3ff860c0F28D69F392543A16A397D0dAe85D16dE",
        "isLP": false
    },
    {
        "asset": "YFI",
        "ilkLabel": "YFI-A",
        "ilkBytes": "0x5946492d41000000000000000000000000000000000000000000000000000000",
        "join": "0x3ff33d9162aD47660083D7DC4bC02Fb231c81677",
        "flip": "0xEe4C9C36257afB8098059a4763A374a4ECFE28A7",
        "pip": "0x5F122465bCf86F45922036970Be6DD7F58820214",
        "isLP": false
    },
    {
        "asset": "GUSD",
        "ilkLabel": "GUSD-A",
        "ilkBytes": "0x475553442d410000000000000000000000000000000000000000000000000000",
        "join": "0xe29A14bcDeA40d83675aa43B72dF07f649738C8b",
        "flip": "0xCAa8D152A8b98229fB77A213BE16b234cA4f612f",
        "pip": "0xf45Ae69CcA1b9B043dAE2C83A5B65Bc605BEc5F5",
        "isLP": false
    },
    {
        "asset": "UNI",
        "ilkLabel": "UNI-A",
        "ilkBytes": "0x554e492d41000000000000000000000000000000000000000000000000000000",
        "join": "0x3BC3A58b4FC1CbE7e98bB4aB7c99535e8bA9b8F1",
        "flip": "0xF5b8cD9dB5a0EC031304A7B815010aa7761BD426",
        "pip": "0xf363c7e351C96b910b92b45d34190650df4aE8e7",
        "isLP": false
    },
    {
        "asset": "RENBTC",
        "ilkLabel": "RENBTC-A",
        "ilkBytes": "0x52454e4254432d41000000000000000000000000000000000000000000000000",
        "join": "0xFD5608515A47C37afbA68960c1916b79af9491D0",
        "flip": "0x30BC6eBC27372e50606880a36B279240c0bA0758",
        "pip": "0xf185d0682d50819263941e5f4EacC763CC5C6C42",
        "isLP": false
    },
    {
        "asset": "AAVE",
        "ilkLabel": "AAVE-A",
        "ilkBytes": "0x414156452d410000000000000000000000000000000000000000000000000000",
        "join": "0x24e459F61cEAa7b1cE70Dbaea938940A7c5aD46e",
        "flip": "0x16e1b844094c885a37509a8f76c533B5fbFED13a",
        "pip": "0x8Df8f06DC2dE0434db40dcBb32a82A104218754c",
        "isLP": false
    },
    {
        "asset": "UNIV2DAIETH",
        "ilkLabel": "UNIV2DAIETH-A",
        "ilkBytes": "0x554e4956324441494554482d4100000000000000000000000000000000000000",
        "join": "0x2502F65D77cA13f183850b5f9272270454094A08",
        "flip": "0x57dfd99f45747DD55C1c432Db4aEa07FBd5d2B5c",
        "pip": "0x87ecBd742cEB40928E6cDE77B2f0b5CFa3342A09",
        "isLP": true
    }
]

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports) => {

/**
 * @param hex {string}
 * @returns {string}
 */
exports.bytesToString = (hex) => {
  return Buffer.from(hex.replace(/^0x/, ''), 'hex')
      .toString()
      .replace(/\x00/g, '');
}

/**
 * @param str {string}
 * @returns {string} input encoded to hex, padded to 32 bytes
 */
exports.stringToBytes = (str) => {
  let n = Buffer.from(str).toString('hex');
  while (n.length < 64) n = `${n}0`;
  return `0x${n}`;
}

exports.compare = (a = '', b = '') => a.toLowerCase() === b.toLowerCase();


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })()
;
});