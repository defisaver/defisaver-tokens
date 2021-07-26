import { AssetData } from './types';

const ETHAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
const DAIAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";
const SAIAddress = "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359";
const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const BATAddress = "0x0D8775F648430679A709E98d2b0Cb6250d2887EF";
const REPAddress = "0x1985365e9f78359a9B6AD760e32412f4a445E862";
const REPv2Address = "0x221657776846890989a759BA2973e427DfF5C9bB";
const ZRXAddress = "0xe41d2489571d322189246dafa5ebde1f4699f498";
const KNCLAddress = "0xdd974D5C2e2928deA5F71b9825b8b646686BD200";
const KNCAddress = "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202";
const USDCAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const WBTCAddress = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
const MKRAddress = "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
const COMPAddress = "0xc00e94cb662c3520282e6f5717214004a7f26888";
const cDAIAddress = "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643";
const cLINKAddress = "0xface851a4921ce59e912d19329929ce6da6eb0c7";
const cBATAddress = "0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e";
const cREPAddress = "0x158079ee67fce2f58472a96584a73c7ab9ac95c1";
const cZRXAddress = "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407";
const cUSDCAddress = "0x39aa39c021dfbae8fac545936693ac917d5e7563";
const cETHAddress = "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5";
const cWBTCAddressLegacy = "0xc11b1268c1a384e55c48c2391d8d480264a3a7f4";
const cWBTCAddress = "0xccf4429db6322d5c611ee964527d42e5d685dd6a";
const USDTAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";
const cUSDTAddress = "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9";
const cTUSDAddress = "0x12392F67bdf24faE0AF363c24aC620a2f67DAd86";
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
const aKNCLAddress = "0x9D91BE44C06d373a8a226E1f3b146956083803eB";
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
const stkAAVEAddress = "0x4da27a545c0c5B758a6BA100e3a049001de870f5";
const BALAddress = "0xba100000625a3754423978a60c9317c58a424e3D";
const GUSDAddress = "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd";
const RENBTCAddress = "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D";
const UNIV2DAIETHAddress = "0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11";
const aWETHAddress = "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e";
const UNIV2WBTCETHAddress = "0xBb2b8038a1640196FbE3e38816F3e67Cba72D940";
const UNIV2USDCETHAddress = "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc";
const xSUSHIAddress = "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272";
const UNIV2DAIUSDCAddress = "0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5";
const UNIV2ETHUSDTAddress = "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852";
const UNIV2LINKETHAddress = "0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974";
const UNIV2UNIETHAddress = "0xd3d2E2692501A5c9Ca623199D38826e513033a17";
const RAIAddress = "0x03ab458634910aad20ef5f1c8ee96f1d6ac54919";
const ONEINCHAddress = "0x111111111117dC0aa78b770fA6A738034120C302";
const BadgerAddress = "0x3472A5A71965499acd81997a54BBA8D852C6E53d";
const BntAddress = "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C";
const CoverAddress = "0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713";
const CreamAddress = "0x2ba592F78dB6436527729929AAf6c908497cB200";
const SushiAddress = "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2";
const DiggAddress = "0x798d1be841a82a273720ce31c822c61a67a601c3";
const MirAddress = "0x09a3ecafa817268f77be1283176b946c4ff2e608";
const RplAddress = "0xb4efd85c19999d84251304bda99e90b92300bd93";
const SntAddress = "0x744d70fdbe2ba4cf95131626614a1763df805b9e";
const TornAddress = "0x77777feddddffc19ff86db637967013e6c6a116c";
const UmaAddress = "0x04fa0d235c4abf4bcf4787af4cf447de572ef828";
const UNIV2AAVEETHAddress = "0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f";
const UNIV2WBTCDAIAddress = "0x231B7589426Ffe1b75405526fC32aC09D44364c4";
const UNIV2DAIUSDTAddress = "0xB20bd5D04BE54f870D5C0d3cA85d82b34B836405";
const EthfliAddress = "0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd";
const LqtyAddress = "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D";
const LusdAddress = "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0";
const FlxAddress = "0x6243d8cea23066d098a15582d81a598b4e8391f4";
const AlcxAddress = "0xdbdb4d16eda451d0503b854cf79d55697f90c8df";
const EursAddress = "0xdb25f211ab05b1c97d595516f45794528a807ad8";
const GrtAddress = "0xc944e90c64b2c07662a292be6244bdf05cda44a7";
const PoolAddress = "0x0cec1a9154ff802e7934fc916ed7ca50bde6844e";
const LdoAddress = "0x5a98fcbea516cf06857215779fd812ca3bef1b32";
const StethAddress = "0xae7ab96520de3a18e5e111b5eaab095312d7fe84";
const AxsAddress = "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b";
const BtcfliAddress = "0x0b498ff89709d3838a063f1dfa463091f9801c2b";
const FarmAddress = "0xa0246c9032bc3a600820415ae600c6388619a14d";
const FeiAddress = "0x956f47f50a910163d8bf957cf5846d573e7f87ca";
const GtcAddress = "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f";
const InstAddress = "0x6f40d4a6237c257fff2db00fa0510deeecd303eb";
const MtaAddress = "0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2";
const RuneAddress = "0x3155ba85d5f96b2d030a4966af206230e46849cb";
const TribeAddress = "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b";
const AmplAddress = "0xd46ba6d942050d489dbd938a2c909a5d5039a161";
const aAmplAddress = "0x1E6bb68Acec8fefBD87D192bE09bb274170a0548";

import BlankIcon from './TokenIcons/BlankIcon.js';
import ZrxIcon from './TokenIcons/ZrxIcon.js';
import UsdcIcon from './TokenIcons/UsdcIcon.js';
import BatIcon from './TokenIcons/BatIcon.js';
import RepIcon from './TokenIcons/RepIcon.js';
import EthIcon from './TokenIcons/EthIcon.js';
import WbtcIcon from './TokenIcons/WbtcIcon.js';
import DaiIcon from './TokenIcons/DaiIcon.js';
import MkrIcon from './TokenIcons/MkrIcon.js';
import UsdtIcon from './TokenIcons/UsdtIcon.js';
import KncIcon from './TokenIcons/KncIcon.js';
import KnclIcon from './TokenIcons/KnclIcon.js';
import CompIcon from './TokenIcons/CompIcon.js';
import SusdIcon from './TokenIcons/SusdIcon.js';
import TusdIcon from './TokenIcons/TusdIcon.js';
import BusdIcon from './TokenIcons/BusdIcon.js';
import LendIcon from './TokenIcons/LendIcon.js';
import LinkIcon from './TokenIcons/LinkIcon.js';
import ManaIcon from './TokenIcons/ManaIcon.js';
import SnxIcon from './TokenIcons/SnxIcon.js';
import EnjIcon from './TokenIcons/EnjIcon.js';
import RenIcon from './TokenIcons/RenIcon.js';
import RepV2Icon from './TokenIcons/RepV2Icon.js';
import CrvIcon from './TokenIcons/CrvIcon.js';
import YfiIcon from './TokenIcons/YfiIcon.js';
import PaxusdIcon from './TokenIcons/PaxusdIcon.js';
import DpiIcon from './TokenIcons/DpiIcon.js';
import UniIcon from './TokenIcons/UniIcon.js';
import LrcIcon from './TokenIcons/LrcIcon.js';
import BalIcon from './TokenIcons/BalIcon.js';
import GusdIcon from './TokenIcons/GusdIcon.js';
import AaveIcon from './TokenIcons/AaveIcon.js';
import RenBtcIcon from './TokenIcons/RenBtcIcon.js';
import StkAaveIcon from './TokenIcons/StkAaveIcon.js';
import SushiIcon from './TokenIcons/SushiIcon.js';
import OneInchIcon from './TokenIcons/OneInchIcon';
import BadgerIcon from './TokenIcons/BadgerIcon';
import BntIcon from './TokenIcons/BntIcon';
import CoverIcon from './TokenIcons/CoverIcon';
import CreamIcon from './TokenIcons/CreamIcon';
import DiggIcon from './TokenIcons/DiggIcon';
import MirIcon from './TokenIcons/MirIcon';
import RplIcon from './TokenIcons/RplIcon';
import SntIcon from './TokenIcons/SntIcon';
import TornIcon from './TokenIcons/TornIcon';
import UmaIcon from './TokenIcons/UmaIcon';
import RaiIcon from './TokenIcons/RaiIcon';
import UniV2DaiEthIcon from './TokenIcons/UniV2DaiEthIcon.js';
import UniV2WbtcEthIcon from './TokenIcons/UniV2WbtcEthIcon.js';
import UniV2UsdcEthIcon from './TokenIcons/UniV2UsdcEthIcon.js';
import UniV2DaiUsdcIcon from './TokenIcons/UniV2DaiUsdcIcon';
import UniV2EthUsdtIcon from './TokenIcons/UniV2EthUsdtIcon';
import UniV2LinkEthIcon from './TokenIcons/UniV2LinkEthIcon';
import UniV2UniEthIcon from './TokenIcons/UniV2UniEthIcon';
import UniV2AaveEthIcon from './TokenIcons/UniV2AaveEthIcon';
import UniV2WbtcDaiIcon from './TokenIcons/UniV2WbtcDaiIcon';
import UniV2DaiUsdtIcon from './TokenIcons/UniV2DaiUsdtIcon';
import EthfliIcon from './TokenIcons/EthfliIcon';
import LqtyIcon from './TokenIcons/LqtyIcon';
import LusdIcon from './TokenIcons/LusdIcon';
import FlxIcon from './TokenIcons/FlxIcon';
import AlcxIcon from './TokenIcons/AlcxIcon';
import EursIcon from './TokenIcons/EursIcon';
import GrtIcon from './TokenIcons/GrtIcon';
import PoolIcon from './TokenIcons/PoolIcon';
import LdoIcon from './TokenIcons/LdoIcon';
import StethIcon from './TokenIcons/StethIcon';
import AxsIcon from './TokenIcons/AxsIcon';
import BtcfliIcon from './TokenIcons/BtcfliIcon';
import FarmIcon from './TokenIcons/FarmIcon';
import FeiIcon from './TokenIcons/FeiIcon';
import GtcIcon from './TokenIcons/GtcIcon';
import InstIcon from './TokenIcons/InstIcon';
import MtaIcon from './TokenIcons/MtaIcon';
import RuneIcon from './TokenIcons/RuneIcon';
import TribeIcon from './TokenIcons/TribeIcon';
import AmplIcon from './TokenIcons/AmplIcon';

export const assetProto: AssetData = {
  symbol: '?',
  name: 'Unknown',
  address: '0x0',
  decimals: 18,
  icon: BlankIcon,
  underlyingAsset: '',
  exchange: false,
  compoundCollateral: false,
  aaveCollateral: false,
  isStable: false,
};

export const assets: AssetData[] = [
  {
    ...assetProto,
    symbol: 'ETH',
    name: 'Ether',
    decimals: 18,
    exchange: true,
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
    isStable: true,
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
    address: ZRXAddress,
    icon: ZrxIcon,
  },
  {
    ...assetProto,
    symbol: 'KNCL',
    name: 'Kyber Network Crystal Legacy',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
    address: KNCLAddress,
    icon: KnclIcon,
  },
  {
    ...assetProto,
    symbol: 'KNC',
    name: 'Kyber Network Crystal',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
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
    compoundCollateral: false,
    address: USDCAddress,
    isStable: true,
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
    compoundCollateral: false,
    address: WBTCAddress,
    icon: WbtcIcon,
  },
  {
    ...assetProto,
    symbol: 'cWBTC Legacy',
    underlyingAsset: 'WBTC',
    name: 'Wrapped Bitcoin (Legacy)',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    address: cWBTCAddressLegacy,
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
    symbol: 'USDT',
    name: 'Tether',
    decimals: 6,
    exchange: true,
    address: USDTAddress,
    isStable: true,
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
    decimals: 6,
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
    isStable: true,
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
    isStable: true,
    icon: TusdIcon,
  },
  {
    ...assetProto,
    symbol: 'cTUSD',
    underlyingAsset: 'TUSD',
    name: 'True USD',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    address: cTUSDAddress,
    icon: TusdIcon,
  },
  {
    ...assetProto,
    symbol: 'aUSDT',
    underlyingAsset: 'USDT',
    name: 'Tether',
    decimals: 6,
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
    isStable: true,
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
    symbol: 'aKNCL',
    underlyingAsset: 'KNCL',
    name: 'Kyber Network Crystal Legacy',
    decimals: 18,
    aaveCollateral: true,
    address: aKNCLAddress,
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
    address: LINKAddress,
    icon: LinkIcon,
  },
  {
    ...assetProto,
    symbol: 'cLINK',
    name: 'ChainLink',
    underlyingAsset: 'LINK',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    address: cLINKAddress,
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
    decimals: 8,
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
    address: PAXUSDAddress,
    isStable: true,
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
    icon: UniIcon,
  },
  {
    ...assetProto,
    symbol: 'LRC',
    name: 'Loopring Coin V2',
    decimals: 18,
    exchange: true,
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
    compoundCollateral: true,
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
    exchange: true,
    icon: AaveIcon,
  },
  {
    ...assetProto,
    symbol: 'aAAVE',
    name: 'Aave',
    address: aAaveAddress,
    decimals: 18,
    underlyingAsset: 'AAVE',
    aaveCollateral: true,
    icon: AaveIcon,
  },
  {
    ...assetProto,
    symbol: 'stkAAVE',
    // underlyingAsset: 'AAVE',
    name: 'AAVE',
    decimals: 18,
    address: stkAAVEAddress,
    icon: StkAaveIcon,
  },
  {
    ...assetProto,
    symbol: 'BAL',
    name: 'Balancer',
    address: BALAddress,
    exchange: true,
    decimals: 18,
    icon: BalIcon,
  },
  {
    ...assetProto,
    symbol: 'GUSD',
    name: 'Gemini Dollar',
    address: GUSDAddress,
    decimals: 2,
    isStable: true,
    exchange: true,
    icon: GusdIcon,
  },
  {
    ...assetProto,
    symbol: 'RENBTC',
    name: 'renBTC',
    address: RENBTCAddress,
    exchange: true,
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
  {
    ...assetProto,
    symbol: 'aWETH',
    underlyingAsset: 'WETH',
    name: 'WETH',
    decimals: 18,
    address: aWETHAddress,
    icon: EthIcon,
  },
  {
    ...assetProto,
    symbol: 'UNIV2WBTCETH',
    name: 'Uniswap V2: WBTC/ETH ',
    address: UNIV2WBTCETHAddress,
    decimals: 18,
    icon: UniV2WbtcEthIcon,
  },
  {
    ...assetProto,
    symbol: 'UNIV2USDCETH',
    name: 'Uniswap V2: USDC/ETH ',
    address: UNIV2USDCETHAddress,
    decimals: 18,
    icon: UniV2UsdcEthIcon,
  },
  {
    ...assetProto,
    symbol: 'xSUSHI',
    name: 'Sushi Bar',
    address: xSUSHIAddress,
    decimals: 18,
    icon: SushiIcon,
  },
  {
    ...assetProto,
    symbol: 'UNIV2DAIUSDC',
    name: 'Uniswap V2: DAI/USDC',
    address: UNIV2DAIUSDCAddress,
    decimals: 18,
    icon: UniV2DaiUsdcIcon,
  },
  {
    ...assetProto,
    symbol: 'UNIV2ETHUSDT',
    name: 'Uniswap V2: ETH/USDT',
    address: UNIV2ETHUSDTAddress,
    decimals: 18,
    icon: UniV2EthUsdtIcon,
  },
  {
    ...assetProto,
    symbol: 'UNIV2LINKETH',
    name: 'Uniswap V2: LINK/ETH',
    address: UNIV2LINKETHAddress,
    decimals: 18,
    icon: UniV2LinkEthIcon,
  },
  {
    ...assetProto,
    symbol: 'UNIV2UNIETH',
    name: 'Uniswap V2: UNI/ETH',
    address: UNIV2UNIETHAddress,
    decimals: 18,
    icon: UniV2UniEthIcon,
  },
  {
    ...assetProto,
    symbol: 'RAI',
    name: 'Rai Reflex Index',
    address: RAIAddress,
    decimals: 18,
    icon: RaiIcon,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: '1INCH',
    name: '1INCH Token',
    address: ONEINCHAddress,
    exchange: true,
    decimals: 18,
    icon: OneInchIcon,
  },
  {
    ...assetProto,
    symbol: 'BADGER',
    name: 'BadgerDAO',
    address: BadgerAddress,
    exchange: true,
    decimals: 18,
    icon: BadgerIcon,
  },
  {
    ...assetProto,
    symbol: 'DIGG',
    name: 'DIGG',
    address: DiggAddress,
    exchange: true,
    decimals: 9,
    icon: DiggIcon,
  },
  {
    ...assetProto,
    symbol: 'MIR',
    name: 'Mirror Protocol',
    address: MirAddress,
    exchange: true,
    decimals: 18,
    icon: MirIcon,
  },
  {
    ...assetProto,
    symbol: 'SUSHI',
    name: 'Sushi Token',
    address: SushiAddress,
    exchange: true,
    decimals: 18,
    icon: SushiIcon,
  },
  {
    ...assetProto,
    symbol: 'CREAM',
    name: 'C.R.E.A.M.',
    address: CreamAddress,
    exchange: true,
    decimals: 18,
    icon: CreamIcon,
  },
  {
    ...assetProto,
    symbol: 'COVER',
    name: 'Cover Protocol',
    address: CoverAddress,
    exchange: true,
    decimals: 18,
    icon: CoverIcon,
  },
  {
    ...assetProto,
    symbol: 'UMA',
    name: 'UMA Voting Token V1',
    address: UmaAddress,
    exchange: true,
    decimals: 18,
    icon: UmaIcon,
  },
  {
    ...assetProto,
    symbol: 'SNT',
    name: 'Status Network',
    address: SntAddress,
    exchange: true,
    decimals: 18,
    icon: SntIcon,
  },
  {
    ...assetProto,
    symbol: 'RPL',
    name: 'Rocket Pool',
    address: RplAddress,
    exchange: true,
    decimals: 18,
    icon: RplIcon,
  },
  {
    ...assetProto,
    symbol: 'TORN',
    name: 'Tornado Cash',
    address: TornAddress,
    exchange: true,
    decimals: 18,
    icon: TornIcon,
  },
  {
    ...assetProto,
    symbol: 'BNT',
    name: 'Bancor Network Token',
    address: BntAddress,
    exchange: true,
    decimals: 18,
    icon: BntIcon,
  },
  {
    ...assetProto,
    symbol: 'UNIV2AAVEETH',
    name: 'Uniswap V2: AAVE/ETH',
    address: UNIV2AAVEETHAddress,
    decimals: 18,
    icon: UniV2AaveEthIcon,
  },
  {
    ...assetProto,
    symbol: 'UNIV2WBTCDAI',
    name: 'Uniswap V2: WBTC/DAI',
    address: UNIV2WBTCDAIAddress,
    decimals: 18,
    icon: UniV2WbtcDaiIcon,
  },
  {
    ...assetProto,
    symbol: 'UNIV2DAIUSDT',
    name: 'Uniswap V2: DAI/USDT',
    address: UNIV2DAIUSDTAddress,
    decimals: 18,
    icon: UniV2DaiUsdtIcon,
  },
  {
    ...assetProto,
    symbol: 'ETH2x-FLI',
    name: 'ETH 2x Flexible Leverage Index',
    address: EthfliAddress,
    exchange: true,
    decimals: 18,
    icon: EthfliIcon,
  },
  {
    ...assetProto,
    symbol: 'LQTY',
    name: 'Liquity',
    address: LqtyAddress,
    exchange: true,
    decimals: 18,
    icon: LqtyIcon,
  },
  {
    ...assetProto,
    symbol: 'LUSD',
    name: 'Liquity USD',
    address: LusdAddress,
    exchange: true,
    decimals: 18,
    icon: LusdIcon,
  },
  {
    ...assetProto,
    symbol: 'FLX',
    name: 'Reflexer Ungovernance Token',
    address: FlxAddress,
    exchange: true,
    decimals: 18,
    icon: FlxIcon,
  },
  {
    ...assetProto,
    symbol: 'ALCX',
    name: 'Alchemix',
    address: AlcxAddress,
    exchange: true,
    decimals: 18,
    icon: AlcxIcon,
  },
  {
    ...assetProto,
    symbol: 'EURS',
    name: 'Stasis Euro',
    address: EursAddress,
    exchange: true,
    decimals: 2,
    icon: EursIcon,
  },
  {
    ...assetProto,
    symbol: 'GRT',
    name: 'The Graph',
    address: GrtAddress,
    exchange: true,
    decimals: 18,
    icon: GrtIcon,
  },
  {
    ...assetProto,
    symbol: 'POOL',
    name: 'PoolTogether',
    address: PoolAddress,
    exchange: true,
    decimals: 18,
    icon: PoolIcon,
  },
  {
    ...assetProto,
    symbol: 'LDO',
    name: 'Lido DAO',
    address: LdoAddress,
    exchange: true,
    decimals: 18,
    icon: LdoIcon,
  },
  {
    ...assetProto,
    symbol: 'stETH',
    name: 'Lido Staked Ether',
    address: StethAddress,
    exchange: true,
    decimals: 18,
    icon: StethIcon,
  },
  {
    ...assetProto,
    symbol: 'AXS',
    name: 'Axie Infinity',
    address: AxsAddress,
    exchange: true,
    decimals: 18,
    icon: AxsIcon,
  },
  {
    ...assetProto,
    symbol: 'BTC2x-FLI',
    name: 'BTC 2x Flexible Leverage Index',
    address: BtcfliAddress,
    exchange: true,
    decimals: 18,
    icon: BtcfliIcon,
  },
  {
    ...assetProto,
    symbol: 'FARM',
    name: 'Harvest Finance',
    address: FarmAddress,
    exchange: true,
    decimals: 18,
    icon: FarmIcon,
  },
  {
    ...assetProto,
    symbol: 'FEI',
    name: 'Fei Protocol',
    address: FeiAddress,
    exchange: true,
    decimals: 18,
    icon: FeiIcon,
  },
  {
    ...assetProto,
    symbol: 'GTC',
    name: 'Gitcoin',
    address: GtcAddress,
    exchange: true,
    decimals: 18,
    icon: GtcIcon,
  },
  {
    ...assetProto,
    symbol: 'INST',
    name: 'InstaDapp',
    address: InstAddress,
    exchange: true,
    decimals: 18,
    icon: InstIcon,
  },
  {
    ...assetProto,
    symbol: 'MTA',
    name: 'mStable Governance Token: Meta',
    address: MtaAddress,
    exchange: true,
    decimals: 18,
    icon: MtaIcon,
  },
  {
    ...assetProto,
    symbol: 'RUNE',
    name: 'THORChain ERC20',
    address: RuneAddress,
    exchange: true,
    decimals: 18,
    icon: RuneIcon,
  },
  {
    ...assetProto,
    symbol: 'TRIBE',
    name: 'Tribe',
    address: TribeAddress,
    exchange: true,
    decimals: 18,
    icon: TribeIcon,
  },
  {
    ...assetProto,
    symbol: 'AMPL',
    name: 'Ampleforth',
    decimals: 9,
    address: AmplAddress,
    icon: AmplIcon,
  },
  {
    ...assetProto,
    symbol: 'aAMPL',
    underlyingAsset: 'AMPL',
    name: 'Ampleforth',
    decimals: 9,
    aaveCollateral: true,
    address: aAmplAddress,
    icon: AmplIcon,
  },
];
