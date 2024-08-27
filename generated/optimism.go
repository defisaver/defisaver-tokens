package dfstokens

import (
        "github.com/ethereum/go-ethereum/common"
)

// List updated as of 2024-08-27 from https://github.com/defisaver/defisaver-tokens/blob/master/src/assets.ts

var optimismTokens = make(map[common.Address]struct{})

func init() {
        optimismTokens[common.HexToAddress("0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")] = struct{}{} // ETH
        optimismTokens[common.HexToAddress("0x4200000000000000000000000000000000000006")] = struct{}{} // WETH
        optimismTokens[common.HexToAddress("0xda10009cbd5d07dd0cecc66161fc93d7c9000da1")] = struct{}{} // DAI
        optimismTokens[common.HexToAddress("0xab7badef82e9fe11f6f33f87bc9bc2aa27f2fcb5")] = struct{}{} // MKR
        optimismTokens[common.HexToAddress("0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85")] = struct{}{} // USDC
        optimismTokens[common.HexToAddress("0x7f5c764cbc14f9669b88837ca1490cca17c31607")] = struct{}{} // USDC.e
        optimismTokens[common.HexToAddress("0x68f180fcce6836688e9084f035309e29bf0a2095")] = struct{}{} // WBTC
        optimismTokens[common.HexToAddress("0x94b008aa00579c1307b0ef2c499ad98a8ce58e58")] = struct{}{} // USDT
        optimismTokens[common.HexToAddress("0x7e7d4467112689329f7E06571eD0E8CbAd4910eE")] = struct{}{} // COMP
        optimismTokens[common.HexToAddress("0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9")] = struct{}{} // SUSD
        optimismTokens[common.HexToAddress("0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6")] = struct{}{} // LINK
        optimismTokens[common.HexToAddress("0x8700daec35af8ff88c16bdf0418774cb3d7599b4")] = struct{}{} // SNX
        optimismTokens[common.HexToAddress("0x0994206dfe8de6ec6920ff4d779b0d950605fb53")] = struct{}{} // CRV
        optimismTokens[common.HexToAddress("0x6fd9d7ad17242c41f7131d257212c54a0e816691")] = struct{}{} // UNI
        optimismTokens[common.HexToAddress("0xFEaA9194F9F8c1B65429E31341a103071464907E")] = struct{}{} // LRC
        optimismTokens[common.HexToAddress("0x76FB31fb4af56892A25e32cFC43De717950c9278")] = struct{}{} // AAVE
        optimismTokens[common.HexToAddress("0x7FB688CCf682d58f86D7e38e03f9D22e7705448B")] = struct{}{} // RAI
        optimismTokens[common.HexToAddress("0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea")] = struct{}{} // UMA
        optimismTokens[common.HexToAddress("0xc40f949f8a4e094d1b49a23ea9241d289b7b2819")] = struct{}{} // LUSD
        optimismTokens[common.HexToAddress("0x9e1028F5F1D5eDE59748FFceE5532509976840E0")] = struct{}{} // PERP
        optimismTokens[common.HexToAddress("0xb548f63d4405466b36c0c0ac3318a22fdcec711a")] = struct{}{} // RGT
        optimismTokens[common.HexToAddress("0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb")] = struct{}{} // wstETH
        optimismTokens[common.HexToAddress("0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9")] = struct{}{} // SPANK
        optimismTokens[common.HexToAddress("0x217D47011b23BB961eB6D93cA9945B7501a5BB11")] = struct{}{} // THALES
        optimismTokens[common.HexToAddress("0x65559aA14915a70190438eF90104769e5E890A00")] = struct{}{} // ENS
        optimismTokens[common.HexToAddress("0xBA28feb4b6A6b81e3F26F08b83a19E715C4294fd")] = struct{}{} // UST
        optimismTokens[common.HexToAddress("0x9bcef72be871e61ed4fbbc7630889bee758eb81d")] = struct{}{} // rETH
        optimismTokens[common.HexToAddress("0x4200000000000000000000000000000000000042")] = struct{}{} // OP
        optimismTokens[common.HexToAddress("0xdfa46478f9e5ea86d57387849598dbfb2e964b02")] = struct{}{} // MAI
        optimismTokens[common.HexToAddress("0x484c2D6e3cDd945a8B2DF735e079178C1036578c")] = struct{}{} // sfrxETH
        optimismTokens[common.HexToAddress("0x296f55f8fb28e498b858d0bcda06d955b2cb3f97")] = struct{}{} // STG
        optimismTokens[common.HexToAddress("0x6806411765Af15Bddd26f8f544A34cC40cb9838B")] = struct{}{} // frxETH
}