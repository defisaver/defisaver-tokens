package dfstokens

import (
        "github.com/ethereum/go-ethereum/common"
)

// List updated as of 2024-08-27 from https://github.com/defisaver/defisaver-tokens/blob/master/src/assets.ts

var arbitrumTokens = make(map[common.Address]struct{})

func init() {
        arbitrumTokens[common.HexToAddress("0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")] = struct{}{} // ETH
        arbitrumTokens[common.HexToAddress("0x82aF49447D8a07e3bd95BD0d56f35241523fBab1")] = struct{}{} // WETH
        arbitrumTokens[common.HexToAddress("0xda10009cbd5d07dd0cecc66161fc93d7c9000da1")] = struct{}{} // DAI
        arbitrumTokens[common.HexToAddress("0xaf88d065e77c8cC2239327C5EDb3A432268e5831")] = struct{}{} // USDC
        arbitrumTokens[common.HexToAddress("0xff970a61a04b1ca14834a43f5de4533ebddb5cc8")] = struct{}{} // USDC.e
        arbitrumTokens[common.HexToAddress("0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f")] = struct{}{} // WBTC
        arbitrumTokens[common.HexToAddress("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9")] = struct{}{} // USDT
        arbitrumTokens[common.HexToAddress("0x354A6dA3fcde098F8389cad84b0182725c6C91dE")] = struct{}{} // COMP
        arbitrumTokens[common.HexToAddress("0xf97f4df75117a78c1A5a0DBb814Af92458539FB4")] = struct{}{} // LINK
        arbitrumTokens[common.HexToAddress("0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978")] = struct{}{} // CRV
        arbitrumTokens[common.HexToAddress("0xba5ddd1f9d7f570dc94a51479a000e3bce967196")] = struct{}{} // AAVE
        arbitrumTokens[common.HexToAddress("0x93b346b6bc2548da6a1e7d98e9a421b42541425b")] = struct{}{} // LUSD
        arbitrumTokens[common.HexToAddress("0xd22a58f79e9481d1a88e00c343885a588b34b68b")] = struct{}{} // EURS
        arbitrumTokens[common.HexToAddress("0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F")] = struct{}{} // FRAX
        arbitrumTokens[common.HexToAddress("0x5979D7b546E38E414F7E9822514be443A4800529")] = struct{}{} // wstETH
        arbitrumTokens[common.HexToAddress("0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8")] = struct{}{} // rETH
        arbitrumTokens[common.HexToAddress("0x912CE59144191C1204E64559FE8253a0e49E6548")] = struct{}{} // ARB
        arbitrumTokens[common.HexToAddress("0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a")] = struct{}{} // GMX
        arbitrumTokens[common.HexToAddress("0x3f56e0c36d275367b8c502090edf38289b3dea0d")] = struct{}{} // MAI
        arbitrumTokens[common.HexToAddress("0x95aB45875cFFdba1E5f451B950bC2E42c0053f39")] = struct{}{} // sfrxETH
        arbitrumTokens[common.HexToAddress("0x498Bf2B1e120FeD3ad3D42EA2165E9b73f99C1e5")] = struct{}{} // crvUSD
        arbitrumTokens[common.HexToAddress("0x7dff72693f6a4149b17e7c6314655f6a9f7c8b33")] = struct{}{} // GHO
        arbitrumTokens[common.HexToAddress("0x6694340fc020c5e6b96567843da2df01b2ce1eb6")] = struct{}{} // STG
        arbitrumTokens[common.HexToAddress("0x178412e79c25968a32e89b11f63B33F733770c2A")] = struct{}{} // frxETH
        arbitrumTokens[common.HexToAddress("0x179F38f78346F5942E95C5C59CB1da7F55Cf7CAd")] = struct{}{} // FXN
        arbitrumTokens[common.HexToAddress("0x35751007a407ca6feffe80b3cb397736d2cf4dbe")] = struct{}{} // weETH
        arbitrumTokens[common.HexToAddress("0x4186BFC76E2E237523CBC30FD220FE055156b41F")] = struct{}{} // rsETH
}