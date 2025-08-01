import { AssetDataBase } from './types.js';

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
const CRVAddressArb = "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978";
const iDAIAddress = "0x493C57C4763932315A328269E1ADaD09653B9081";
const USDPAddress = "0x8e870d67f660d95d5be530380d0ec0bd388289e1";
const DPIAddress = "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b";
const UNIAddress = "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";
const LRCAddress = "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD";
const cCOMPAddress = "0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4";
const AAVEAddress = "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";
const aUNIAddress = "0xb124541127a0a657f056d9dd06188c4f1b0e5aab";
const aAaveAddress = "0xba3D9687Cf50fE253cd2e1cFeEdE1d6787344Ed5";
const stkAAVEAddress = "0x4da27a545c0c5B758a6BA100e3a049001de870f5";
const stkGHOAddress = "0x1a88Df1cFe15Af22B3c4c783D4e6F7F9e0C1885d";
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
const RplOldAddress = "0xb4efd85c19999d84251304bda99e90b92300bd93";
const RplAddress = "0xD33526068D116cE69F19A9ee46F0bd304F21A51f";
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
const FluidAddress = "0x6f40d4a6237c257fff2db00fa0510deeecd303eb";
const MtaAddress = "0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2";
const RuneAddress = "0x3155ba85d5f96b2d030a4966af206230e46849cb";
const TribeAddress = "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b";
const AmplAddress = "0xd46ba6d942050d489dbd938a2c909a5d5039a161";
const SteCrvAddress = "0x06325440D014e39736583c165C2963BA99fAf14E";
const ECrvAddress = "0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c";
const HegicAddress = "0x584bC13c7D411c00c01A62e8019472dE68768430";
const Ib3CRVAddress = "0x5282a4eF67D9C33135340fB3289cc1711c13638C";
const HCRVAddress = "0xb19059ebb43466C323583928285a49f558E572Fd";
const YveCRVDAOAddress = "0xc5bDdf9843308380375a611c18B50Fb9341f502A";
const CrvRenWSBTCAddress = "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3";
const CrvRenWBTCAddress = "0x49849C98ae39Fff122806C06791Fa73784FB3675";
const SaCRVAddress = "0x02d341CcB60fAaf662bC0554d13778015d1b285C";
const OBTCsbtcCRVAddress = "0x2fE94ea3d5d4a175184081439753DE15AeF9d614";
const PBTCsbtcCRVAddress = "0xDE5331AC4B3630f94853Ff322B66407e0D6331E8";
const LUSD3CRVfAddress = "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
const BBTCsbtcCRVAddress = "0x410e3E86ef427e30B9235497143881f717d93c2A";
const TBTCsbtcCRVAddress = "0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd";
const FRAX3CRVfAddress = "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B";
const YDAIyUSDCyUSDTyBUSDAddress = "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B";
const CDAIcUSDCAddress = "0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2";
const Gusd3CRVAddress = "0xD2967f45c4f384DEEa880F807Be904762a3DeA07";
const YDAIyUSDCyUSDTyTUSDAddress = "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8";
const CRV3Address = "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490";
const TUSD3CRVfAddress = "0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1";
const BUSD3CRVfAddress = "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a";
const Dusd3CRVAddress = "0x3a664Ab939FD8482048609f652f9a0B0677337B9";
const Ust3CRVAddress = "0x94e131324b6054c0D789b190b2dAC504e4361b53";
const Musd3CRVAddress = "0x1AEf73d49Dedc4b1778d0706583995958Dc862e6";
const CrvPlain3andSUSDAddress = "0xC25a3A3b969415c80451098fa907EC722572917F";
const LinkCRVAddress = "0xcee60cFa923170e4f8204AE08B4fA6A3F5656F3a";
const Usdn3CRVAddress = "0x4f3E8F405CF5aFC05D68142F3783bDfE13811522";
const Usdp3CRVAddress = "0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6";
const AlUSD3CRVfAddress = "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c";
const RCRVAddress = "0x53a901d48795C58f485cBB38df08FA96a24669D5";
const AnkrCRVAddress = "0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf";
const A3CRVAddress = "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900";
const Husd3CRVAddress = "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858";
const EursCRVAddress = "0x194eBd173F6cDacE046C53eACcE9B953F28411d1";
const CrvTricryptoAddress = "0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF";
const YpaxCrvAddress = "0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8";
const CDAIcUSDCUSDTAddress = "0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23";
const Usdk3CRVAddress = "0x97E2768e8E73511cA874545DC5Ff8067eB19B787";
const Rsv3CRVAddress = "0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35";
const Crv3cryptoAddress = "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff";
const cMKRAddress = "0x95b4eF2869eBD94BEb4eEE400a99824BF5DC325b";
const cSUSHIAddress = "0x4B0181102A0112A2ef11AbEE5563bb4a3176c9d7";
const cAAVEAddress = "0xe65cdB6479BaC1e22340E4E755fAE7E509EcD06c";
const cYFIAddress = "0x80a2AE356fc9ef4305676f7a3E2Ed04e12C33946";
const RENFILAddress = "0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5";
const MATICAddress = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";
const crvEURTAddress = "0xFD5dB7463a3aB53fD211b4af195c5BCCC1A03890";
const crvMIMAddress = "0x5a6a4d54456819380173272a5e8e9b9904bdf41b";
const DydxAddress = "0x92d6c1e31e14520e676a687f0a93788b716beff5";
const PerpAddress = "0xbc396689893d065f41bc2c6ecbee5e0085233447";
const TcapAddress = "0x16c52ceece2ed57dad87319d91b5e3637d50afa4";
const CtxAddress = "0x321c2fe4446c7c963dc41dd58879af648838f98d";
const RgtAddress = "0xd291e7a03283640fdc51b121ac401383a46cc623";
const DataAddress = "0x33d63Ba1E57E54779F7dDAeaA7109349344cf5F1";
const AmpAddress = "0xff20817765cb7f73d4bde2e66e067e58d11095c2";
const FraxAddress = "0x853d955acef822db058eb8505911ed77f175b99e";
const wstETHAddress = "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0";
const YfiiAddress = "0xa1d0e215a23d7030842fc67ce582a6afa3ccab83";
const TendAddress = "0x1453dbb8a29551ade11d89825ca812e05317eaeb";
const OmgAddress = "0xd26114cd6ee289accf82350c8d8487fedb8a0c07";
const PickleAddress = "0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5";
const RookAddress = "0xfa5047c9c78b8877af97bdcb85db743fd7313d4a";
const IdleAddress = "0x875773784af8135ea0ef43b5a374aad105c5d39e";
const TrbAddress = "0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0";
const YamAddress = "0x0aacfbec6a24756c20d41914f2caba817c0d8521";
const SpankAddress = "0x42d6622dece394b54999fbd73d108123806f6a18";
const CvxAddress = "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b";
const ShibAddress = "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce";
const MimAddress = "0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3";
const SpellAddress = "0x090185f2135308bad17527004364ebcc2d37e5f6";
const RobotAddress = "0xfb5453340c03db5ade474b27e68b6a9c6b2823eb";
const GelAddress = "0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05";
const GnoAddress = "0x6810e776880c02933d47db1b9fc05908e5386b96";
const TracAddress = "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f";
const FtmAddress = "0x4e15361fd6b4bb609fa63c81a2be19d873717870";
const AudioAddress = "0x18aaa7115705e8be94bffebde57af9bfc265b998";
const ThalesAddress = "0x03e173ad8d1581a4802d3b532ace27a62c5b81dc";
const RariAddress = "0xfca59cd816ab1ead66534d82bc21e7515ce441cf";
const FxsAddress = "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0";
const BedAddress = "0x2af1df3ab0ab157e1e2ad8f88a7d04fbea0c7dc6";
const FoxAddress = "0xc770eefad204b5180df6a14ee197d99d808ee52d";
const OhmAddress = "0x383518188c0c6d7730d91b2c03a03c837814a899";
const SohmAddress = "0x04f2694c8fcee23e8fd0dfea1d4f5bb8c352111f";
const AlusdAddress = "0xbc6da0fe9ad5f3b0d58160288917aa56653660e9";
const AlethAddress = "0x0100546f2cd4c9d97f798ffc9755e47865ff7ee6";
const EnsAddress = "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72";
const MusdAddress = "0xe2f2a5c287993345a840db3b0845fbc70f5935a5";
const ImusdAddress = "0x30647a72dc82d7fbb1123ea74716ab8a317eac19";
const cUSDPAddress = "0x041171993284df560249B57358F931D9eB7b925D";
const GuniDaiUsdc1Address = "0xAbDDAfB225e10B90D798bB8A886238Fb835e2053";
const GuniDaiUsdc2Address = "0x50379f632ca68D36E50cfBC8F78fe16bd1499d1e";
const USTAddress = "0xa693B19d2931d498c5B318dF961919BB4aee87a5"
const cFeiAddress = "0x7713DD9Ca933848F6819F38B8352D9A15EA73F67";
const bLUSDAddress = "0xB9D7DdDca9a4AC480991865EfEf82E01273F79C3";
const cbETHAddress = "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704";
const MORPHOLegacyAddress = "0x9994e35db50125e0df82e4c2dde62496ce330999";
const rETHCrvAddress = "0x6c38ce8984a890f5e46e6df6117c26b3f1ecfc9c";
const cbETHCrvAddress = "0x5b6c539b224014a09b3388e51caaa8e354c959c8";
const sfrxETH = "0xac3E018457B222d93114458476f3E3416Abbe38F";
const crvUSD = "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E";
const crvUSDArb = "0x498Bf2B1e120FeD3ad3D42EA2165E9b73f99C1e5";
const sDAIAddress = "0x83F20F44975D03b1b09e64809B757c47f942BEeA";
const tBTCAddress = "0x18084fbA666a33d37592fA2633fD49a74DD93a88";
const fxnAddress = "0x365accfca291e7d3914637abf1f7635db165bb09";
const fxnAddressArb = '0x179F38f78346F5942E95C5C59CB1da7F55Cf7CAd';
const USDSAddress = "0xdC035D45d973E3EC169d2276DDab16f1e407384F";
const SKYAddress = "0x56072C95FAA701256059aa122697B133aDEd9279";
const sUSDSAddress = "0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD";
const rswETHAddress = "0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0";
const wsuperOETHbAddress = "0x7FcD174E80f264448ebeE8c88a7C4476AAF58Ea6";
const boldLegacyAddress = "0xb01dd87b29d187f3e3a4bf6cdaebfb97f3d9ab98";
const boldAddress = "0x6440f144b7e50d6a8439336510312d2f54beb01d";
const kingAddress = "0x8F08B70456eb22f6109F57b8fafE862ED28E6040";
const sBOLD = "0x50Bd66D59911F5e086Ec87aE43C811e0D059DD11";
const yBOLD = "0x9F4330700a36B29952869fac9b33f45EEdd8A3d8";
const ysyYBOLD = "0x23346B04a7f55b8760E5860AA5A77383D63491cD";


export const assetProto: AssetDataBase = {
  symbol: '?',
  feedAvailability: {},
  name: 'Unknown',
  nativeChainId: 1,
  addresses: {},
  decimals: NaN,
  icon: () => {
    console.warn('Token icon function not present');
    return '';
  },
  underlyingAsset: '',
  exchange: false,
  compoundCollateral: false,
  aaveCollateral: false,
  yearnCollateral: false,
  isStable: false,
  isPendle: false,
  expiryTimestamp: 0,
  is4626: false,
};

export const assets: AssetDataBase[] = [
  {
    ...assetProto,
    symbol: 'ETH',
    feedAvailability: { 1: true, 10: true, 8453: true, 42161: true },
    name: 'Ether',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
    addresses: {
      1: ETHAddress,
      10: ETHAddress,
      8453: ETHAddress,
      42161: ETHAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'WETH',
    feedAvailability: { 1: true, 10: true, 8453: true, 42161: true },
    name: 'Wrapped Ether',
    decimals: 18,
    addresses: {
      1: WETHAddress,
      10: '0x4200000000000000000000000000000000000006',
      8453: '0x4200000000000000000000000000000000000006',
      42161: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    },
    yearnCollateral: true,
  },
  {
    ...assetProto,
    symbol: 'cETH',
    underlyingAsset: 'ETH',
    name: 'Ether',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    addresses: {
      1: cETHAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'DAI',
    feedAvailability: { 1: true, 10: true, 8453: true, 42161: true },
    name: 'Dai Stablecoin',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
    yearnCollateral: true,
    addresses: {
      1: DAIAddress,
      10: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
      8453: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
      42161: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
    },
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'cDAI',
    underlyingAsset: 'DAI',
    name: 'Dai',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    addresses: {
      1: cDAIAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'iDAI',
    underlyingAsset: 'DAI',
    name: 'Dai',
    decimals: 18,
    addresses: {
      1: iDAIAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'MKR',
    feedAvailability: { 1: true },
    name: 'Maker Protocol',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
    addresses: {
      1: MKRAddress,
      10: '0xab7badef82e9fe11f6f33f87bc9bc2aa27f2fcb5',
    },
  },
  {
    ...assetProto,
    symbol: 'BAT',
    feedAvailability: { 1: true },
    name: 'Basic Attention Token',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
    addresses: {
      1: BATAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'cBAT',
    underlyingAsset: 'BAT',
    name: 'Basic Attention Token',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    addresses: {
      1: cBATAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'ZRX',
    feedAvailability: { 1: true },
    name: '0x',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
    addresses: {
      1: ZRXAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'KNCL',
    feedAvailability: { 1: true },
    name: 'Kyber Network Crystal Legacy',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
    addresses: {
      1: KNCLAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'KNC',
    feedAvailability: { 1: true },
    name: 'Kyber Network Crystal',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
    addresses: {
      1: KNCAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'cZRX',
    underlyingAsset: 'ZRX',
    name: '0x',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    addresses: {
      1: cZRXAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'REP',
    name: 'Augur',
    decimals: 18,
    exchange: true,
    compoundCollateral: false,
    addresses: {
      1: REPAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'REPv2',
    name: 'Augur',
    decimals: 18,
    exchange: false, // not yet available
    compoundCollateral: false,
    addresses: {
      1: REPv2Address,
    },
  },
  {
    ...assetProto,
    symbol: 'cREP',
    underlyingAsset: 'REP',
    name: 'Augur',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    addresses: {
      1: cREPAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'USDC',
    feedAvailability: { 1: true, 10: true, 8453: true, 42161: true },
    name: 'USD Coin',
    decimals: 6,
    exchange: true,
    compoundCollateral: false,
    yearnCollateral: true,
    addresses: {
      1: USDCAddress,
      10: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
      8453: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      42161: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    },
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'USDC.e',
    feedAvailability: { 10: true, 42161: true },
    name: 'USD Coin (Legacy Bridged)',
    decimals: 6,
    nativeChainId: 42161,
    exchange: true,
    addresses: {
      10: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
      42161: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
    },
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'USDbC',
    feedAvailability: { 8453: true },
    name: 'USD Base Coin',
    decimals: 6,
    nativeChainId: 8453,
    exchange: true,
    addresses: {
      8453: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
    },
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'cUSDC',
    underlyingAsset: 'USDC',
    name: 'USD Coin',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    addresses: {
      1: cUSDCAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'WBTC',
    feedAvailability: { 1: true, 10: true, 42161: true },
    name: 'Wrapped Bitcoin',
    decimals: 8,
    exchange: true,
    compoundCollateral: false,
    yearnCollateral: true,
    addresses: {
      1: WBTCAddress,
      10: '0x68f180fcce6836688e9084f035309e29bf0a2095',
      42161: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
    },
  },
  {
    ...assetProto,
    symbol: 'cWBTC Legacy',
    underlyingAsset: 'WBTC',
    name: 'Wrapped Bitcoin (Legacy)',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    addresses: {
      1: cWBTCAddressLegacy,
    },
  },
  {
    ...assetProto,
    symbol: 'cWBTC',
    underlyingAsset: 'WBTC',
    name: 'Wrapped Bitcoin',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    addresses: {
      1: cWBTCAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'USDT',
    feedAvailability: { 1: true, 10: true, 42161: true },
    name: 'Tether',
    decimals: 6,
    exchange: true,
    yearnCollateral: true,
    addresses: {
      1: USDTAddress,
      10: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
      42161: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
    },
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'cUSDT',
    underlyingAsset: 'USDT',
    name: 'Tether',
    decimals: 8,
    compoundCollateral: true,
    addresses: {
      1: cUSDTAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'SAI',
    name: 'Sai',
    decimals: 18,
    addresses: {
      1: SAIAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'COMP',
    feedAvailability: { 1: true, 8453: true },
    name: 'Compound Token',
    decimals: 18,
    addresses: {
      1: COMPAddress,
      10: '0x7e7d4467112689329f7E06571eD0E8CbAd4910eE',
      8453: '0x9e1028F5F1D5eDE59748FFceE5532509976840E0',
      42161: '0x354A6dA3fcde098F8389cad84b0182725c6C91dE',
    },
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'aETH',
    underlyingAsset: 'ETH',
    name: 'ETH',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aETHAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aDAI',
    underlyingAsset: 'DAI',
    name: 'Dai',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aDAIAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aUSDC',
    underlyingAsset: 'USDC',
    name: 'USDC',
    decimals: 6,
    aaveCollateral: true,
    addresses: {
      1: aUSDCAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aSUSD',
    underlyingAsset: 'SUSD',
    name: 'Synth sUSD',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aSUSDAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'SUSD',
    feedAvailability: { 1: true, 10: true },
    name: 'Synth sUSD',
    decimals: 18,
    exchange: true,
    yearnCollateral: true,
    addresses: {
      1: SUSDAddress,
      10: '0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9',
    },
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'aTUSD',
    underlyingAsset: 'TUSD',
    name: 'True USD',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aTUSDAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'TUSD',
    feedAvailability: { 1: true },
    name: 'True USD',
    decimals: 18,
    exchange: true,
    addresses: {
      1: TUSDAddress,
    },
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'cTUSD',
    underlyingAsset: 'TUSD',
    name: 'True USD',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    addresses: {
      1: cTUSDAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aUSDT',
    underlyingAsset: 'USDT',
    name: 'Tether',
    decimals: 6,
    aaveCollateral: true,
    addresses: {
      1: aUSDTAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aBUSD',
    underlyingAsset: 'BUSD',
    name: 'Binance USD',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aBUSDAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'BUSD',
    feedAvailability: { 1: true },
    name: 'Binance USD',
    decimals: 18,
    exchange: true,
    addresses: {
      1: BUSDAddress,
    },
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'aBAT',
    underlyingAsset: 'BAT',
    name: 'Basic Attention Token',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aBATAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aKNCL',
    underlyingAsset: 'KNCL',
    name: 'Kyber Network Crystal Legacy',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aKNCLAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aLEND',
    underlyingAsset: 'LEND',
    name: 'Aave ETHLend',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aLENDAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'LEND',
    name: 'Aave ETHLend',
    decimals: 18,
    addresses: {
      1: LENDAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aLINK',
    underlyingAsset: 'LINK',
    name: 'ChainLink',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aLINKAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'LINK',
    feedAvailability: { 1: true, 10: true, 42161: true },
    name: 'ChainLink',
    decimals: 18,
    exchange: true,
    yearnCollateral: true,
    addresses: {
      1: LINKAddress,
      10: '0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6',
      42161: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
    },
  },
  {
    ...assetProto,
    symbol: 'cLINK',
    name: 'ChainLink',
    underlyingAsset: 'LINK',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    addresses: {
      1: cLINKAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aMANA',
    underlyingAsset: 'MANA',
    name: 'Decentraland',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aMANAAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'MANA',
    feedAvailability: { 1: true },
    name: 'Decentraland',
    decimals: 18,
    exchange: true,
    addresses: {
      1: MANAAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aMKR',
    underlyingAsset: 'MKR',
    name: 'Maker',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aMKRAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aREP',
    underlyingAsset: 'REP',
    name: 'Augur',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aREPAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aSNX',
    underlyingAsset: 'SNX',
    name: 'Synthetix Network',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aSNXAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'SNX',
    feedAvailability: { 1: true, 10: true },
    name: 'Synthetix Network',
    decimals: 18,
    exchange: true,
    yearnCollateral: true,
    addresses: {
      1: SNXAddress,
      10: '0x8700daec35af8ff88c16bdf0418774cb3d7599b4',
    },
  },
  {
    ...assetProto,
    symbol: 'aWBTC',
    underlyingAsset: 'WBTC',
    name: 'WBTC',
    decimals: 8,
    aaveCollateral: true,
    addresses: {
      1: aWBTCAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aZRX',
    underlyingAsset: 'ZRX',
    name: 'ZRX',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aZRXAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aENJ',
    underlyingAsset: 'ENJ',
    name: 'Enjin',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aENJAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'ENJ',
    feedAvailability: { 1: true },
    name: 'Enjin',
    decimals: 18,
    exchange: true,
    addresses: {
      1: ENJAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aREN',
    underlyingAsset: 'REN',
    name: 'Ren',
    decimals: 18,
    aaveCollateral: true,
    addresses: {
      1: aRENAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'REN',
    feedAvailability: { 1: true },
    name: 'Ren',
    decimals: 18,
    exchange: true,
    addresses: {
      1: RENAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'CRV',
    feedAvailability: { 1: true, 10: true, 42161: true },
    name: 'Curve DAO',
    decimals: 18,
    exchange: true,
    addresses: {
      1: CRVAddress,
      10: '0x0994206dfe8de6ec6920ff4d779b0d950605fb53',
      8453: '0x8Ee73c484A26e0A5df2Ee2a4960B789967dd0415',
      42161: CRVAddressArb,
    },
  },
  {
    ...assetProto,
    symbol: 'YFI',
    feedAvailability: { 1: true },
    name: 'Yearn Finance',
    decimals: 18,
    exchange: true,
    yearnCollateral: true,
    addresses: {
      1: YFIAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'aYFI',
    decimals: 18,
    addresses: {
      1: aYFIAddress,
    },
    aaveCollateral: true,
    underlyingAsset: 'YFI',
  },
  {
    ...assetProto,
    symbol: 'USDP',
    feedAvailability: { 1: true },
    name: 'Pax Dollar',
    decimals: 18,
    exchange: true,
    addresses: {
      1: USDPAddress,
    },
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'cUSDP',
    underlyingAsset: 'USDP',
    name: 'Pax Dollar',
    decimals: 8,
    exchange: false,
    compoundCollateral: true,
    addresses: {
      1: cUSDPAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'DPI',
    feedAvailability: { 1: true },
    name: 'DefiPulse Index',
    decimals: 18,
    exchange: true,
    addresses: {
      1: DPIAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'UNI',
    feedAvailability: { 1: true, 10: true },
    name: 'Uniswap',
    decimals: 18,
    exchange: true,
    yearnCollateral: true,
    addresses: {
      1: UNIAddress,
      10: '0x6fd9d7ad17242c41f7131d257212c54a0e816691',
    },
  },
  {
    ...assetProto,
    symbol: 'cUNI',
    decimals: 8,
    compoundCollateral: true,
    addresses: {
      1: cUNIAddress,
    },
    underlyingAsset: 'UNI',
  },
  {
    ...assetProto,
    symbol: 'LRC',
    feedAvailability: { 1: true },
    name: 'Loopring Coin V2',
    decimals: 18,
    exchange: true,
    addresses: {
      1: LRCAddress,
      10: '0xFEaA9194F9F8c1B65429E31341a103071464907E',
    },
  },
  {
    ...assetProto,
    symbol: "cCOMP",
    name: "Compound Token",
    addresses: {
      1: cCOMPAddress,
    },
    underlyingAsset: "COMP",
    decimals: 8,
    compoundCollateral: true,
  },
  {
    ...assetProto,
    symbol: 'aUNI',
    name: 'Uniswap',
    addresses: {
      1: aUNIAddress,
    },
    underlyingAsset: 'UNI',
    decimals: 18,
    aaveCollateral: true,
  },
  {
    ...assetProto,
    symbol: 'AAVE',
    feedAvailability: { 1: true, 10: true, 8453: true, 42161: true },
    name: 'Aave',
    addresses: {
      1: AAVEAddress,
      10: '0x76FB31fb4af56892A25e32cFC43De717950c9278',
      8453: '0x63706e401c06ac8513145b7687A14804d17f814b',
      42161: '0xba5ddd1f9d7f570dc94a51479a000e3bce967196',
    },
    decimals: 18,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'aAAVE',
    name: 'Aave',
    addresses: {
      1: aAaveAddress,
    },
    decimals: 18,
    underlyingAsset: 'AAVE',
    aaveCollateral: true,
  },
  {
    ...assetProto,
    symbol: 'stkAAVE',
    // underlyingAsset: 'AAVE',
    name: 'AAVE',
    decimals: 18,
    addresses: {
      1: stkAAVEAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'BAL',
    feedAvailability: { 1: true },
    name: 'Balancer',
    addresses: {
      1: BALAddress,
      8453: '0x4158734D47Fc9692176B5085E0F52ee0Da5d47F1',
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'GUSD',
    feedAvailability: { 1: true },
    name: 'Gemini Dollar',
    addresses: {
      1: GUSDAddress,
    },
    decimals: 2,
    isStable: true,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'RENBTC',
    name: 'renBTC',
    addresses: {
      1: RENBTCAddress,
    },
    exchange: true,
    decimals: 8,
  },
  {
    ...assetProto,
    symbol: 'UNIV2DAIETH',
    feedAvailability: { 1: true },
    name: 'Uniswap V2: DAI/ETH ',
    addresses: {
      1: UNIV2DAIETHAddress,
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'aWETH',
    underlyingAsset: 'WETH',
    name: 'WETH',
    decimals: 18,
    addresses: {
      1: aWETHAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'UNIV2WBTCETH',
    feedAvailability: { 1: true },
    name: 'Uniswap V2: WBTC/ETH ',
    addresses: {
      1: UNIV2WBTCETHAddress,
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'UNIV2USDCETH',
    feedAvailability: { 1: true },
    name: 'Uniswap V2: USDC/ETH ',
    addresses: {
      1: UNIV2USDCETHAddress,
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'xSUSHI',
    feedAvailability: { 1: true },
    name: 'Sushi Bar',
    addresses: {
      1: xSUSHIAddress,
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'UNIV2DAIUSDC',
    feedAvailability: { 1: true },
    name: 'Uniswap V2: DAI/USDC',
    addresses: {
      1: UNIV2DAIUSDCAddress,
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'UNIV2ETHUSDT',
    name: 'Uniswap V2: ETH/USDT',
    addresses: {
      1: UNIV2ETHUSDTAddress,
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'UNIV2LINKETH',
    feedAvailability: { 1: true },
    name: 'Uniswap V2: LINK/ETH',
    addresses: {
      1: UNIV2LINKETHAddress,
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'UNIV2UNIETH',
    feedAvailability: { 1: true },
    name: 'Uniswap V2: UNI/ETH',
    addresses: {
      1: UNIV2UNIETHAddress,
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'RAI',
    feedAvailability: { 1: true },
    name: 'Rai Reflex Index',
    addresses: {
      1: RAIAddress,
      10: '0x7FB688CCf682d58f86D7e38e03f9D22e7705448B',
    },
    decimals: 18,
    yearnCollateral: true,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: '1INCH',
    feedAvailability: { 1: true },
    name: '1INCH Token',
    addresses: {
      1: ONEINCHAddress,
      8453: '0xc5fecC3a29Fb57B5024eEc8a2239d4621e111CBE',
    },
    yearnCollateral: true,
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'BADGER',
    feedAvailability: { 1: true },
    name: 'BadgerDAO',
    addresses: {
      1: BadgerAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'DIGG',
    name: 'DIGG',
    addresses: {
      1: DiggAddress,
    },
    exchange: true,
    decimals: 9,
  },
  {
    ...assetProto,
    symbol: 'MIR',
    name: 'Mirror Protocol',
    addresses: {
      1: MirAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'SUSHI',
    feedAvailability: { 1: true },
    name: 'Sushi Token',
    addresses: {
      1: SushiAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'CREAM',
    name: 'C.R.E.A.M.',
    addresses: {
      1: CreamAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'COVER',
    name: 'Cover Protocol',
    addresses: {
      1: CoverAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'UMA',
    name: 'UMA Voting Token V1',
    addresses: {
      1: UmaAddress,
      10: '0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea',
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'SNT',
    name: 'Status Network',
    addresses: {
      1: SntAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'RPL Legacy',
    name: 'Rocket Pool Legacy',
    addresses: {
      1: RplOldAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'RPL',
    feedAvailability: { 1: true },
    name: 'Rocket Pool',
    addresses: {
      1: RplAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'TORN',
    name: 'Tornado Cash',
    addresses: {
      1: TornAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'BNT',
    name: 'Bancor Network Token',
    addresses: {
      1: BntAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'UNIV2AAVEETH',
    feedAvailability: { 1: true },
    name: 'Uniswap V2: AAVE/ETH',
    addresses: {
      1: UNIV2AAVEETHAddress,
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'UNIV2WBTCDAI',
    name: 'Uniswap V2: WBTC/DAI',
    addresses: {
      1: UNIV2WBTCDAIAddress,
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'UNIV2DAIUSDT',
    name: 'Uniswap V2: DAI/USDT',
    addresses: {
      1: UNIV2DAIUSDTAddress,
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'ETH2x-FLI',
    name: 'ETH 2x Flexible Leverage Index',
    addresses: {
      1: EthfliAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'LQTY',
    name: 'Liquity',
    addresses: {
      1: LqtyAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'LUSD',
    feedAvailability: { 1: true, 10: true, 42161: true },
    name: 'Liquity USD',
    addresses: {
      1: LusdAddress,
      10: '0xc40f949f8a4e094d1b49a23ea9241d289b7b2819',
      42161: '0x93b346b6bc2548da6a1e7d98e9a421b42541425b',
    },
    exchange: true,
    decimals: 18,
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'FLX',
    name: 'Reflexer Ungovernance Token',
    addresses: {
      1: FlxAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'ALCX',
    feedAvailability: { 1: true },
    name: 'Alchemix',
    addresses: {
      1: AlcxAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'EURS',
    feedAvailability: { 42161: true },
    name: 'Stasis Euro',
    addresses: {
      1: EursAddress,
      42161: '0xd22a58f79e9481d1a88e00c343885a588b34b68b',
    },
    exchange: true,
    decimals: 2,
  },
  {
    ...assetProto,
    symbol: 'GRT',
    feedAvailability: { 1: true },
    name: 'The Graph',
    addresses: {
      1: GrtAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'POOL',
    name: 'PoolTogether',
    addresses: {
      1: PoolAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'LDO',
    feedAvailability: { 1: true },
    name: 'Lido DAO',
    addresses: {
      1: LdoAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'stETH',
    feedAvailability: { 1: true },
    name: 'Lido Staked Ether',
    addresses: {
      1: StethAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'AXS',
    name: 'Axie Infinity',
    addresses: {
      1: AxsAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'BTC2x-FLI',
    name: 'BTC 2x Flexible Leverage Index',
    addresses: {
      1: BtcfliAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'FARM',
    name: 'Harvest Finance',
    addresses: {
      1: FarmAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'FEI',
    feedAvailability: { 1: true },
    name: 'Fei Protocol',
    addresses: {
      1: FeiAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'GTC',
    name: 'Gitcoin',
    addresses: {
      1: GtcAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'FLUID',
    name: 'InstaDapp Fluid',
    addresses: {
      1: FluidAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'MTA',
    name: 'mStable Governance Token: Meta',
    addresses: {
      1: MtaAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'RUNE',
    name: 'THORChain ERC20',
    addresses: {
      1: RuneAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'TRIBE',
    name: 'Tribe',
    addresses: {
      1: TribeAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'AMPL',
    feedAvailability: { 1: true },
    name: 'Ampleforth',
    decimals: 9,
    addresses: {
      1: AmplAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'steCRV',
    name: 'Curve.fi ETH/stETH',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: SteCrvAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvSETH',
    name: 'Curve.fi ETH/sETH',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: ECrvAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'HEGIC',
    name: 'Hegic',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: HegicAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvIB',
    name: 'Curve.fi cyDAI/cyUSDC/cyUSDT',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: Ib3CRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvHBTC',
    name: 'Curve.fi hBTC/wBTC',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: HCRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'yveCRV',
    name: 'veCRV-DAO yVault',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: YveCRVDAOAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvSBTC',
    name: 'Curve.fi renBTC/wBTC/sBTC',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: CrvRenWSBTCAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvRENBTC',
    name: 'Curve.fi renBTC/wBTC',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: CrvRenWBTCAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvSAAVE',
    name: 'Curve.fi aDAI/aSUSD',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: SaCRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvOBTC',
    name: 'Curve.fi oBTC/sbtcCRV',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: OBTCsbtcCRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvPBTC',
    name: 'Curve.fi pBTC/sbtcCRV',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: PBTCsbtcCRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvLUSD',
    name: 'Curve.fi Factory USD Metapool: Liquity',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: LUSD3CRVfAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvBBTC',
    name: 'Curve.fi bBTC/sbtcCRV',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: BBTCsbtcCRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvTBTC',
    name: 'Curve.fi tBTC/sbtcCRV',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: TBTCsbtcCRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvFRAX',
    name: 'Curve.fi Factory USD Metapool: Frax',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: FRAX3CRVfAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvYBUSD',
    name: 'yDAI+yUSDC+yUSDT+yBUSD',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: YDAIyUSDCyUSDTyBUSDAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvCOMP',
    name: 'cDAI+cUSDC',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: CDAIcUSDCAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvGUSD',
    name: 'Curve.fi GUSD/3Crv',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: Gusd3CRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'yCRV',
    name: 'yDAI+yUSDC+yUSDT+yTUSD',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: YDAIyUSDCyUSDTyTUSDAddress,
    },
  },
  {
    ...assetProto,
    symbol: '3Crv',
    name: 'Curve.fi DAI/USDC/USDT',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: CRV3Address,
    },
  },
  {
    ...assetProto,
    symbol: 'crvTUSD',
    name: 'Curve.fi Factory USD Metapool: TrueUSD',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: TUSD3CRVfAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvBUSD',
    name: 'Curve.fi Factory USD Metapool: Binance USD',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: BUSD3CRVfAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvDUSD',
    name: 'Curve.fi DUSD/3Crv',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: Dusd3CRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvUST',
    name: 'Curve.fi UST/3Crv',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: Ust3CRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvMUSD',
    name: 'Curve.fi MUSD/3Crv',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: Musd3CRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvSUSD',
    name: 'Curve.fi DAI/USDC/USDT/sUSD',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: CrvPlain3andSUSDAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvLINK',
    name: 'Curve.fi LINK/sLINK',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: LinkCRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvUSDN',
    name: 'Curve.fi USDN/3Crv',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: Usdn3CRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvUSDP',
    name: 'Curve.fi USDP/3Crv',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: Usdp3CRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvALUSD',
    name: 'Curve.fi Factory USD Metapool: Alchemix USD',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: AlUSD3CRVfAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvRETH',
    name: 'Curve.fi ETH/rETH',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: RCRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvAETHc',
    name: 'Curve.fi ETH/aETH',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: AnkrCRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvAAVE',
    name: 'Curve.fi aDAI/aUSDC/aUSDT',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: A3CRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvHUSD',
    name: 'Curve.fi HUSD/3Crv',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: Husd3CRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvEURS',
    name: 'Curve.fi EURS/sEUR',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: EursCRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvTricrypto',
    name: 'Curve.fi USD-BTC-ETH',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: CrvTricryptoAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvPAX',
    name: 'Curve.fi DAI/USDC/USDT/PAX',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: YpaxCrvAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvUSDT',
    name: 'Curve.fi cDAI/cUSDC/USDT',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: CDAIcUSDCUSDTAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvUSDK',
    name: 'Curve.fi USDK/3Crv',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: Usdk3CRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvRSV',
    name: 'Curve.fi RSV/3Crv',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: Rsv3CRVAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crv3crypto',
    name: 'Curve.fi USD-BTC-ETH',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: Crv3cryptoAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'cMKR',
    decimals: 8,
    compoundCollateral: true,
    addresses: {
      1: cMKRAddress,
    },
    underlyingAsset: 'MKR',
  },
  {
    ...assetProto,
    symbol: 'cSUSHI',
    decimals: 8,
    compoundCollateral: true,
    addresses: {
      1: cSUSHIAddress,
    },
    underlyingAsset: 'SUSHI',
  },
  {
    ...assetProto,
    symbol: 'cAAVE',
    decimals: 8,
    compoundCollateral: true,
    addresses: {
      1: cAAVEAddress,
    },
    underlyingAsset: 'AAVE',
  },
  {
    ...assetProto,
    symbol: 'cYFI',
    decimals: 8,
    compoundCollateral: true,
    addresses: {
      1: cYFIAddress,
    },
    underlyingAsset: 'YFI',
  },
  {
    ...assetProto,
    symbol: 'RENFIL',
    feedAvailability: { 1: true },
    name: 'renFIL',
    decimals: 18,
    exchange: true,
    addresses: {
      1: RENFILAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'MATIC',
    feedAvailability: { 1: true },
    name: 'Polygon (Matic)',
    decimals: 18,
    exchange: true,
    addresses: {
      1: MATICAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvEURT',
    name: 'Curve.fi Factory Plain Pool: Euro Tether',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: crvEURTAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'crvMIM',
    name: 'Curve.fi Factory USD Metapool: Magic Internet Money Internet Magic 3Pool',
    decimals: 18,
    yearnCollateral: true,
    addresses: {
      1: crvMIMAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'DYDX',
    name: 'dYdX',
    decimals: 18,
    exchange: true,
    addresses: {
      1: DydxAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'PERP',
    feedAvailability: { 1: true },
    name: 'Perpetual Protocol',
    decimals: 18,
    exchange: true,
    addresses: {
      1: PerpAddress,
      10: '0x9e1028F5F1D5eDE59748FFceE5532509976840E0',
    },
  },
  {
    ...assetProto,
    symbol: 'TCAP',
    name: 'Total Crypto Market Cap',
    decimals: 18,
    exchange: true,
    addresses: {
      1: TcapAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'CTX',
    name: 'Cryptex Finance',
    decimals: 18,
    exchange: true,
    addresses: {
      1: CtxAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'RGT',
    name: 'Rari Governance Token',
    decimals: 18,
    exchange: true,
    addresses: {
      1: RgtAddress,
      10: '0xb548f63d4405466b36c0c0ac3318a22fdcec711a',
    },
  },
  {
    ...assetProto,
    symbol: 'DATA',
    name: 'DATA Economy Index',
    decimals: 18,
    exchange: true,
    addresses: {
      1: DataAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'AMP',
    name: 'Amp Token',
    decimals: 18,
    exchange: true,
    addresses: {
      1: AmpAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'FRAX',
    feedAvailability: { 1: true, 42161: true },
    name: 'Frax',
    decimals: 18,
    exchange: true,
    addresses: {
      1: FraxAddress,
      42161: '0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F',
    },
  },
  {
    ...assetProto,
    symbol: 'wstETH',
    feedAvailability: { 1: true, 10: true, 8453: true, 42161: true },
    name: 'Wrapped stETH',
    decimals: 18,
    exchange: true,
    addresses: {
      1: wstETHAddress,
      10: '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb',
      42161: '0x5979D7b546E38E414F7E9822514be443A4800529',
      8453: '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452'
    },
  },
  {
    ...assetProto,
    symbol: 'YFII',
    name: 'YFII.finance',
    decimals: 18,
    exchange: true,
    addresses: {
      1: YfiiAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'TEND',
    name: 'Tendies',
    decimals: 18,
    exchange: true,
    addresses: {
      1: TendAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'OMG',
    feedAvailability: { 1: true },
    name: 'OMG Network',
    decimals: 18,
    exchange: true,
    addresses: {
      1: OmgAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'PICKLE',
    name: 'Pickle Finance',
    decimals: 18,
    exchange: true,
    addresses: {
      1: PickleAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'ROOK',
    name: 'KeeperDAO',
    decimals: 18,
    exchange: true,
    addresses: {
      1: RookAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'IDLE',
    name: 'IDLE.finance',
    decimals: 18,
    exchange: true,
    addresses: {
      1: IdleAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'TRB',
    name: 'Tellor',
    decimals: 18,
    exchange: true,
    addresses: {
      1: TrbAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'YAM',
    name: 'yam.finance',
    decimals: 18,
    exchange: true,
    addresses: {
      1: YamAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'SPANK',
    name: 'SpankChain',
    decimals: 18,
    exchange: true,
    addresses: {
      1: SpankAddress,
      10: '0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9',
    },
  },
  {
    ...assetProto,
    symbol: 'CVX',
    feedAvailability: { 1: true },
    name: 'Convex Finance',
    decimals: 18,
    exchange: true,
    addresses: {
      1: CvxAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'SHIB',
    feedAvailability: { 1: true },
    name: 'Shiba Inu',
    decimals: 18,
    exchange: true,
    addresses: {
      1: ShibAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'MIM',
    feedAvailability: { 1: true },
    name: 'Magic Internet Money',
    decimals: 18,
    exchange: true,
    addresses: {
      1: MimAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'SPELL',
    feedAvailability: { 1: true },
    name: 'Spell Token',
    decimals: 18,
    exchange: true,
    addresses: {
      1: SpellAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'ROBOT',
    name: 'Robot',
    decimals: 18,
    exchange: true,
    addresses: {
      1: RobotAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'GEL',
    name: 'Gelato',
    decimals: 18,
    exchange: true,
    addresses: {
      1: GelAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'GNO',
    feedAvailability: { 1: true },
    name: 'Gnosis',
    decimals: 18,
    exchange: true,
    addresses: {
      1: GnoAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'TRAC',
    name: 'OriginTrail',
    decimals: 18,
    exchange: true,
    addresses: {
      1: TracAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'FTM',
    feedAvailability: { 1: true },
    name: 'Fantom',
    decimals: 18,
    exchange: true,
    addresses: {
      1: FtmAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'AUDIO',
    feedAvailability: { 1: true },
    name: 'Audius',
    decimals: 18,
    exchange: true,
    addresses: {
      1: AudioAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'THALES',
    name: 'Thales',
    decimals: 18,
    exchange: true,
    addresses: {
      1: ThalesAddress,
      10: '0x217D47011b23BB961eB6D93cA9945B7501a5BB11',
    },
  },
  {
    ...assetProto,
    symbol: 'RARI',
    name: 'Rarible',
    decimals: 18,
    exchange: true,
    addresses: {
      1: RariAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'FXS',
    feedAvailability: { 1: true },
    name: 'Frax Share',
    decimals: 18,
    exchange: true,
    addresses: {
      1: FxsAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'BED',
    name: 'Bankless BED Index',
    decimals: 18,
    exchange: true,
    addresses: {
      1: BedAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'FOX',
    feedAvailability: { 1: true },
    name: 'ShapeShift',
    decimals: 18,
    exchange: true,
    addresses: {
      1: FoxAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'OHM',
    name: 'Olympus',
    decimals: 9,
    exchange: true,
    addresses: {
      1: OhmAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'SOHM',
    name: 'Staked Olympus',
    decimals: 9,
    addresses: {
      1: SohmAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'ALUSD',
    name: 'Alchemix USD',
    decimals: 18,
    exchange: true,
    addresses: {
      1: AlusdAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'ALETH',
    name: 'Alchemix ETH',
    decimals: 18,
    addresses: {
      1: AlethAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'ENS',
    feedAvailability: { 1: true },
    name: 'Ethereum Name Service',
    exchange: true,
    decimals: 18,
    addresses: {
      1: EnsAddress,
      10: '0x65559aA14915a70190438eF90104769e5E890A00',
    },
  },
  {
    ...assetProto,
    symbol: 'mUSD',
    name: 'mStable USD',
    exchange: true,
    decimals: 18,
    addresses: {
      1: MusdAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'imUSD',
    name: 'Interest bearing mUSD',
    decimals: 18,
    addresses: {
      1: ImusdAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'GUNIV3DAIUSDC1',
    name: 'Gelato Uniswap DAI/USDC LP 0.05%',
    decimals: 18,
    addresses: {
      1: GuniDaiUsdc1Address,
    },
  },
  {
    ...assetProto,
    symbol: 'GUNIV3DAIUSDC2',
    feedAvailability: { 1: true },
    name: 'Gelato Uniswap DAI/USDC LP 0.01%',
    decimals: 18,
    addresses: {
      1: GuniDaiUsdc2Address,
    },
  },
  {
    ...assetProto,
    symbol: 'UST',
    feedAvailability: { 1: true },
    name: 'UST (Wormhole)',
    decimals: 6,
    addresses: {
      1: USTAddress,
      10: '0xBA28feb4b6A6b81e3F26F08b83a19E715C4294fd',
    },
  },
  {
    ...assetProto,
    symbol: 'cFEI',
    underlyingAsset: 'FEI',
    name: 'Fei Protocol',
    addresses: {
      1: cFeiAddress,
    },
    exchange: false,
    compoundCollateral: true,
    decimals: 8,
  },
  {
    ...assetProto,
    symbol: 'rETH',
    feedAvailability: { 1: true, 10: true, 8453: true, 42161: true },
    name: 'Rocket Pool ETH',
    addresses: {
      1: '0xae78736cd615f374d3085123a210448e74fc6393',
      10: '0x9bcef72be871e61ed4fbbc7630889bee758eb81d',
      42161: '0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8',
      8453: '0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c',
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'OP',
    feedAvailability: { 10: true },
    name: 'Optimism',
    nativeChainId: 10,
    addresses: {
      10: '0x4200000000000000000000000000000000000042',
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'bLUSD',
    name: 'Boosted LUSD',
    addresses: {
      1: bLUSDAddress,
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'cbETH',
    feedAvailability: { 1: true, 8453: true },
    name: 'Coinbase Wrapped Staked ETH',
    addresses: {
      1: cbETHAddress,
      8453: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'MORPHO Legacy',
    name: 'Morpho Lebacy Token',
    addresses: {
      1: MORPHOLegacyAddress,
    },
    exchange: false,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'MORPHO',
    name: 'Morpho Token',
    feedAvailability: { 1: true, 8453: true },
    addresses: {
      1: '0x58D97B57BB95320F9a05dC918Aef65434969c2B2',
      8453: '0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842',
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'ARB',
    feedAvailability: { 42161: true },
    name: 'Arbitrum',
    nativeChainId: 42161,
    addresses: {
      42161: '0x912CE59144191C1204E64559FE8253a0e49E6548',
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'GMX',
    feedAvailability: { 42161: true },
    name: 'GMX',
    nativeChainId: 42161,
    addresses: {
      42161: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'wOUSD',
    name: 'Wrapped Origin Dollar',
    nativeChainId: 1,
    addresses: {
      1: '0xD2af830E8CBdFed6CC11Bab697bB25496ed6FA62',
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'OETH',
    feedAvailability: { 1: true },
    name: 'Origin Ether',
    nativeChainId: 1,
    addresses: {
      1: '0x856c4Efb76C1D1AE02e20CEB03A2A6a08b0b8dC3',
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'wOETH',
    name: 'Wrapped Origin Ether',
    nativeChainId: 1,
    addresses: {
      1: '0xDcEe70654261AF21C44c093C300eD3Bb97b78192',
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'OUSD',
    name: 'Origin Dollar',
    nativeChainId: 1,
    addresses: {
      1: '0x2A8e1E676Ec238d8A992307B495b45B3fEAa5e86',
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'OGV',
    name: 'Origin Dollar Governance',
    nativeChainId: 1,
    addresses: {
      1: '0x9c354503C38481a7A7a51629142963F98eCC12D0',
    },
    exchange: true,
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'MAI',
    feedAvailability: { 10: true, 42161: true },
    name: 'Mai Finance',
    nativeChainId: 10,
    addresses: {
      1: '0x8d6cebd76f18e1558d4db88138e2defb3909fad6',
      10: '0xdfa46478f9e5ea86d57387849598dbfb2e964b02',
      42161: '0x3f56e0c36d275367b8c502090edf38289b3dea0d',
    },
    exchange: true,
    decimals: 18,
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'reCRV',
    name: 'Curve.fi ETH/rETH',
    addresses: {
      1: rETHCrvAddress,
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'cbeCRV',
    name: 'Curve.fi ETH/cbETH',
    addresses: {
      1: cbETHCrvAddress,
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'sfrxETH',
    name: 'Staked Frax Ether',
    addresses: {
      1: sfrxETH,
      10: '0x484c2D6e3cDd945a8B2DF735e079178C1036578c',
      42161: '0x95aB45875cFFdba1E5f451B950bC2E42c0053f39'
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'crvUSD',
    feedAvailability: { 1: true },
    name: 'Curve.Fi USD Stablecoin',
    addresses: {
      1: crvUSD,
      42161: crvUSDArb
    },
    decimals: 18,
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'sDAI',
    feedAvailability: { 1: true },
    name: 'Savings DAI',
    nativeChainId: 1,
    addresses: {
      1: sDAIAddress,
    },
    decimals: 18,
    isStable: true,
    is4626: true,
  },
  {
    ...assetProto,
    symbol: 'GHO',
    feedAvailability: { 1: true, 8453: true, 42161: true },
    name: 'GHO',
    addresses: {
      1: '0x40d16fc0246ad3160ccc09b8d0d3a2cd28ae6c2f',
      42161: '0x7dff72693f6a4149b17e7c6314655f6a9f7c8b33',
      8453: '0x6Bb7a212910682DCFdbd5BCBb3e28FB4E8da10Ee',
    },
    nativeChainId: 1,
    decimals: 18,
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'tBTC',
    feedAvailability: { 1: true },
    name: 'tBTC',
    addresses: {
      1: tBTCAddress,
      8453: '0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b',
    },
    decimals: 18,
  },
  {
    ...assetProto,
    symbol: 'STG',
    feedAvailability: { 1: true },
    name: 'STG',
    addresses: {
      1: '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6',
      10: '0x296f55f8fb28e498b858d0bcda06d955b2cb3f97',
      42161: '0x6694340fc020c5e6b96567843da2df01b2ce1eb6'
    },
    decimals: 18,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'frxETH',
    name: 'Frax Ether',
    addresses: {
      1: '0x5E8422345238F34275888049021821E8E08CAa1f',
      10: '0x6806411765Af15Bddd26f8f544A34cC40cb9838B',
      42161: '0x178412e79c25968a32e89b11f63B33F733770c2A',
    },
    decimals: 18,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'sETH',
    name: 'Synth sETH',
    addresses: {
      1: "0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb",
    },
    decimals: 18,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'PYUSD',
    feedAvailability: { 1: true },
    name: 'PayPal USD',
    isStable: true,
    addresses: {
      1: "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8",
    },
    decimals: 6,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'sUSDe',
    feedAvailability: { 1: true },
    name: 'Staked USDe',
    addresses: {
      1: "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
    },
    decimals: 18,
    exchange: true,
    isStable: true,
    is4626: true,
  },
  {
    ...assetProto,
    symbol: 'USDe',
    feedAvailability: { 1: true },
    name: 'USDe',
    addresses: {
      1: "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
    },
    decimals: 18,
    exchange: true,
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'ENA',
    name: 'Ethena',
    addresses: {
      1: "0x57e114B691Db790C35207b2e685D4A43181e6061",
    },
    decimals: 18,
    exchange: false,
    isStable: false,
  },
  {
    ...assetProto,
    symbol: 'FXN',
    name: 'f(x) Protocol',
    addresses: {
      1: fxnAddress,
      42161: fxnAddressArb,
    },
    decimals: 18,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'weETH',
    feedAvailability: { 1: true, 8453: true, 42161: true },
    name: 'Wrapped eETH',
    addresses: {
      1: "0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee",
      10: "0x346e03f8cce9fe01dcb3d0da3e9d00dc2c0e08f0",
      42161: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
      8453: "0x04c0599ae5a44757c0af6f9ec3b93da8976c150a",
    },
    decimals: 18,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'USDA',
    name: 'USDA',
    addresses: {
      1: '0x0000206329b97DB379d5E1Bf586BbDB969C63274',
    },
    decimals: 18,
    exchange: true,
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'ezETH',
    feedAvailability: { 1: true, 8453: true, 42161: true },
    name: 'Renzo Restaked ETH',
    addresses: {
      1: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
      10: "0x2416092f143378750bb29b79eD961ab195CcEea5",
      8453: "0x2416092f143378750bb29b79eD961ab195CcEea5",
      42161: "0x2416092f143378750bb29b79ed961ab195cceea5",
    },
    decimals: 18,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'osETH',
    feedAvailability: { 1: true },
    name: 'StakeWise Staked ETH',
    addresses: {
      1: "0xf1C9acDc66974dFB6dEcB12aA385b9cD01190E38",
    },
    decimals: 18,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'ETHx',
    feedAvailability: { 1: true },
    name: 'Stader ETHx',
    addresses: {
      1: "0xA35b1B31Ce002FBF2058D22F30f95D405200A15b",
    },
    decimals: 18,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'rsETH',
    feedAvailability: { 1: true, 42161: true },
    name: 'Kelp DAO Restaked ETH',
    addresses: {
      1: "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
      10: "0x4186BFC76E2E237523CBC30FD220FE055156b41F",
      42161: "0x4186BFC76E2E237523CBC30FD220FE055156b41F",
      8453: "0x1Bc71130A0e39942a7658878169764Bbd8A45993"
    },
    decimals: 18,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'wrsETH',
    feedAvailability: { 8453: true },
    nativeChainId: 8453,
    name: 'Wrapped Kelp DAO Restaked ETH',
    addresses: {
      10: "0x87eEE96D50Fb761AD85B1c982d28A042169d61b1",
      8453: "0xEDfa23602D0EC14714057867A78d01e94176BEA0"
    },
    decimals: 18,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'pufETH',
    feedAvailability: { 1: true },
    name: 'Puffer Finance ETH',
    addresses: {
      1: "0xD9A442856C234a39a81a089C06451EBAa4306a72",
    },
    decimals: 18,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'cbBTC',
    feedAvailability: { 1: true, 8453: true },
    name: 'Coinbase Wrapped BTC',
    addresses: {
      1: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
      8453: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
    },
    decimals: 8,
    exchange: true,
  },
  {
    ...assetProto,
    symbol: 'USDS',
    feedAvailability: { 1: true },
    name: 'USDS Stablecoin',
    decimals: 18,
    exchange: true,
    addresses: {
      1: USDSAddress,
      8453: "0x820C137fa70C8691f0e44Dc420a5e53c168921Dc",
    },
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'SKY',
    feedAvailability: { 1: true },
    name: 'SKY Protocol',
    decimals: 18,
    exchange: true,
    addresses: {
      1: SKYAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'sUSDS',
    feedAvailability: { 1: true },
    name: 'Savings USDS',
    addresses: {
      1: sUSDSAddress,
      42161: "0xddb46999f8891663a8f2828d25298f70416d7610",
      8453: "0x5875eee11cf8398102fdad704c9e96607675467a"
    },
    decimals: 18,
    isStable: true,
    is4626: true,
  },
  {
    ...assetProto,
    symbol: 'rswETH',
    feedAvailability: { 1: true },
    name: 'Swell Liquid Restaking Token (ETH)',
    decimals: 18,
    addresses: {
      1: rswETHAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'wsuperOETHb',
    name: "Super OETH",
    decimals: 18,
    nativeChainId: 8453,
    addresses: {
      8453: wsuperOETHbAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'BOLD Legacy',
    name: "BOLD Legacy",
    decimals: 18,
    feedAvailability: { 1: true },
    addresses: {
      1: boldLegacyAddress,
    },
    isStable: true,
  },
  {
    ...assetProto,
    symbol: 'BOLD',
    name: "BOLD",
    decimals: 18,
    feedAvailability: { 1: true },
    addresses: {
      1: boldAddress,
    },
    isStable: true,
  },
  {
  ...assetProto,
    symbol: 'wM',
    name: "WrappedM by M^0",
    decimals: 6,
    nativeChainId: 1,
    addresses: {
      1: '0x437cc33344a0B27A429f795ff6B469C72698B291',
    },
  },
  {
    ...assetProto,
    symbol: 'mTBILL',
    name: "Midas US Treasury Bill Token",
    decimals: 18,
    nativeChainId: 1,
    addresses: {
      1: '0xDD629E5241CbC5919847783e6C96B2De4754e438',
    },
  },
  {
    ...assetProto,
    symbol: 'LBTC',
    feedAvailability: { 1: true, 8453: true },
    name: "Lombard Staked Bitcoin",
    decimals: 8,
    nativeChainId: 1,
    addresses: {
      1: '0x8236a87084f8B84306f72007F36F2618A5634494',
      8453: '0xecAc9C5F704e954931349Da37F60E39f515c11c1',
    },
  },
  {
    ...assetProto,
    symbol: 'stkGHO',
    name: 'Staked GHO',
    decimals: 18,
    nativeChainId: 1,
    addresses: {
      1: stkGHOAddress,
    },
  },
  {
    ...assetProto,
    symbol: 'wUSDM',
    name: 'Wrapped Mountain Protocol USD',
    decimals: 18,
    nativeChainId: 1,
    addresses: {
      1: '0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812',
      42161: '0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812',
    },
  },
  {
    ...assetProto,
    symbol: 'sFRAX',
    name: 'Staked FRAX',
    decimals: 18,
    nativeChainId: 1,
    addresses: {
      1: '0xA663B02CF0a4b149d2aD41910CB81e23e1c41c32',
    },
  },
  {
    ...assetProto,
    symbol: 'mETH',
    feedAvailability: { 1: true },
    name: 'Mantle Staked Ether',
    decimals: 18,
    nativeChainId: 1,
    addresses: {
      1: '0xd5F7838F5C461fefF7FE49ea5ebaF7728bB0ADfa',
    },
  },
  {
    ...assetProto,
    symbol: 'EURC',
    feedAvailability: { 1: true, 8453: true },
    name: 'Euro Coin',
    decimals: 6,
    nativeChainId: 1,
    isStable: true,
    addresses: {
      1: '0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c',
      8453: '0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42',
    },
  },
  {
    ...assetProto,
    symbol: 'RLP',
    name: 'Resolv Liquidity Provider Token',
    decimals: 18,
    nativeChainId: 1,
    addresses: {
      1: '0x4956b52aE2fF65D74CA2d61207523288e4528f96',
    },
  },
  {
    ...assetProto,
    symbol: 'USR',
    feedAvailability: { 1: true },
    name: 'Resolv USD',
    decimals: 18,
    nativeChainId: 1,
    isStable: true,
    addresses: {
      1: '0x66a1E37c9b0eAddca17d3662D6c05F4DECf3e110',
    }
  },
  {
    ...assetProto,
    symbol: 'weETHs',
    name: 'Super Symbiotic LRT',
    decimals: 18,
    nativeChainId: 1,
    isStable: true,
    addresses: {
      1: '0x917cee801a67f933f2e6b33fc0cd1ed2d5909d88',
    }
  },
  {
    ...assetProto,
    symbol: 'KING',
    name: 'King',
    decimals: 18,
    nativeChainId: 1,
    isStable: false,
    addresses: {
      1: kingAddress,
    }
  },
  {
    ...assetProto,
    symbol: 'eBTC',
    feedAvailability: { 1: true },
    name: 'ether.fi Staked BTC',
    decimals: 8,
    nativeChainId: 1,
    addresses: {
      1: '0x657e8C867D8B37dCC18fA4Caead9C45EB088C642',
    }
  },
  {
    ...assetProto,
    symbol: 'tETH',
    name: 'Treehouse ETH',
    decimals: 18,
    nativeChainId: 1,
    addresses: {
      1: '0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8',
    }
  },
  {
    ...assetProto,
    symbol: 'RLUSD',
    feedAvailability: { 1: true },
    name: 'Ripple USD',
    decimals: 18,
    nativeChainId: 1,
    isStable: true,
    addresses: {
      1: '0x8292Bb45bf1Ee4d140127049757C2E0fF06317eD',
    }
  },
  {
    ...assetProto,
    symbol: 'PT eUSDe May',
    name: 'PT Ethereal eUSDe May',
    underlyingAsset: 'eUSDe',
    feedAvailability: { 1: true },
    decimals: 18,
    nativeChainId: 1,
    isStable: true,
    isPendle: true,
    exchange: true,
    expiryTimestamp: 1748476800,
    addresses: {
      1: '0x50D2C7992b802Eef16c04FeADAB310f31866a545',
    }
  },
  {
    ...assetProto,
    symbol: 'PT sUSDe July',
    name: 'PT Ethena sUSDe July',
    underlyingAsset: 'sUSDe',
    feedAvailability: { 1: true },
    decimals: 18,
    nativeChainId: 1,
    isStable: true,
    isPendle: true,
    exchange: true,
    expiryTimestamp: 1753920000,
    addresses: {
      1: '0x3b3fB9C57858EF816833dC91565EFcd85D96f634',
    }
  },
  {
    ...assetProto,
    symbol: 'USDtb',
    feedAvailability: { 1: true },
    name: 'USDtb',
    decimals: 18,
    nativeChainId: 1,
    isStable: true,
    exchange: true,
    addresses: {
      1: '0xC139190F447e929f090Edeb554D95AbB8b18aC1C',
      8453: '0xc708B6887DB46005dA033501f8aeBee72d191a5d',
      42161: '0xc708B6887DB46005dA033501f8aeBee72d191a5d',
    }
  },
  {
    ...assetProto,
    symbol: 'eUSDe',
    feedAvailability: { 1: true },
    name: 'Ethereal eUSDe',
    decimals: 18,
    nativeChainId: 1,
    isStable: true,
    exchange: true,
    is4626: true,
    addresses: {
      1: '0x90D2af7d622ca3141efA4d8f1F24d86E5974Cc8F',
    }
  },
  {
    ...assetProto,
    symbol: 'PT USDe July',
    name: 'PT Ethena USDe July',
    underlyingAsset: 'USDe',
    feedAvailability: { 1: true },
    decimals: 18,
    nativeChainId: 1,
    isStable: true,
    isPendle: true,
    exchange: true,
    expiryTimestamp: 1753920000,
    addresses: {
      1: '0x917459337CaAC939D41d7493B3999f571D20D667',
    }
  },
  {
    ...assetProto,
    symbol: 'PT eUSDe Aug',
    name: 'PT Ethereal eUSDe August',
    underlyingAsset: 'eUSDe',
    feedAvailability: { 1: true },
    decimals: 18,
    nativeChainId: 1,
    isStable: true,
    isPendle: true,
    exchange: true,
    expiryTimestamp: 1755129600,
    addresses: {
      1: '0x14Bdc3A3AE09f5518b923b69489CBcAfB238e617',
    }
  },
  {
    ...assetProto,
    symbol: 'SPK',
    name: 'Spark',
    decimals: 18,
    nativeChainId: 1,
    exchange: true,
    addresses: {
      1: '0xc20059e0317DE91738d13af027DfC4a50781b066'
    }
  },
  {
    ...assetProto,
    symbol: 'syrupUSDC',
    name: 'Syrup USDC',
    decimals: 6,
    nativeChainId: 1,
    exchange: true,
    isStable: true,
    addresses: {
      1: '0x80ac24aA929eaF5013f6436cdA2a7ba190f5Cc0b'
    }
  },
  {
    ...assetProto,
    symbol: 'PT syrupUSDC Aug',
    name: 'PT Syrup USDC August',
    underlyingAsset: 'syrupUSDC',
    feedAvailability: { 1: true },
    decimals: 6,
    nativeChainId: 1,
    isStable: true,
    isPendle: true,
    exchange: true,
    expiryTimestamp: 1756339200,
    addresses: {
      1: '0xCcE7D12f683c6dAe700154f0BAdf779C0bA1F89A',
    }
  },
  {
    ...assetProto,
    symbol: 'aEthWETH',
    name: 'Aave Ethereum WETH',
    underlyingAsset: 'WETH',
    decimals: 18,
    nativeChainId: 1,
    exchange: false,
    addresses: {
      1: '0x4d5F47FA6A74757f35C14fD3a6Ef8E3C9BC514E8'
    }
  },
  {
    ...assetProto,
    symbol: 'aEthUSDC',
    name: 'Aave Ethereum USDC',
    underlyingAsset: 'USDC',
    decimals: 6,
    nativeChainId: 1,
    exchange: false,
    addresses: {
      1: '0x98C23E9d8f34FEFb1B7BD6a91B7FF122F4e16F5c'
    }
  },
  {
    ...assetProto,
    symbol: 'aEthUSDT',
    name: 'Aave Ethereum USDT',
    underlyingAsset: 'USDT',
    decimals: 6,
    nativeChainId: 1,
    exchange: false,
    addresses: {
      1: '0x23878914EFE38d27C4D67Ab83ed1b93A74D4086a'
    }
  },
  {
    ...assetProto,
    symbol: 'FBTC',
    feedAvailability: { 1: true },
    name: 'Fire Bitcoin',
    decimals: 8,
    nativeChainId: 1,
    exchange: true,
    addresses: {
      1: '0xC96dE26018A54D51c097160568752c4E3BD6C364'
    }
  },
  {
    ...assetProto,
    symbol: 'PT sUSDe Sep',
    name: 'PT Ethena sUSDe September',
    underlyingAsset: 'sUSDe',
    feedAvailability: { 1: true },
    decimals: 18,
    nativeChainId: 1,
    isStable: true,
    isPendle: true,
    exchange: true,
    expiryTimestamp: 1758758400,
    addresses: {
      1: '0x9f56094c450763769ba0ea9fe2876070c0fd5f77',
    }
  },
  {
    ...assetProto,
    symbol: 'sBOLD',
    name: 'sBOLD',
    underlyingAsset: 'BOLD',
    decimals: 18,
    nativeChainId: 1,
    exchange: false,
    is4626: true,
    addresses: {
      1: sBOLD
    }
  },
  {
    ...assetProto,
    symbol: 'yBOLD',
    name: 'Yearn BOLD',
    underlyingAsset: 'BOLD',
    decimals: 18,
    nativeChainId: 1,
    exchange: false,
    is4626: true,
    addresses: {
      1: yBOLD
    }
  },
  {
    ...assetProto,
    symbol: 'ysyBOLD',
    name: 'Staked yBOLD',
    underlyingAsset: 'yBOLD',
    decimals: 18,
    nativeChainId: 1,
    exchange: false,
    is4626: true,
    addresses: {
      1: ysyYBOLD
    }
  },
  {
    ...assetProto,
    symbol: 'deUSD',
    feedAvailability: { 1: true },
    name: 'Elixir deUSD',
    decimals: 18,
    nativeChainId: 1,
    exchange: false,
    addresses: {
      1: '0x15700B564Ca08D9439C58cA5053166E8317aa138'
    }
  },
  {
    ...assetProto,
    symbol: 'sdeUSD',
    name: 'Elixir Staked deUSD',
    underlyingAsset: 'deUSD',
    decimals: 18,
    nativeChainId: 1,
    exchange: false,
    is4626: true,
    addresses: {
      1: '0x5C5b196aBE0d54485975D1Ec29617D42D9198326'
    }
  },
  {
    ...assetProto,
    symbol: 'PT USDe Sep',
    name: 'PT Ethena USDe September',
    underlyingAsset: 'USDe',
    feedAvailability: { 1: true },
    decimals: 18,
    nativeChainId: 1,
    isStable: true,
    isPendle: true,
    exchange: true,
    expiryTimestamp: 1758758400,
    addresses: {
      1: '0xBC6736d346a5eBC0dEbc997397912CD9b8FAe10a',
    }
  },
];
