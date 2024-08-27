package dfstokens

import (
        "github.com/ethereum/go-ethereum/common"
)

// List updated as of 2024-08-27 from https://github.com/defisaver/defisaver-tokens/blob/master/src/assets.ts

var baseTokens = make(map[common.Address]struct{})

func init() {
        baseTokens[common.HexToAddress("0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")] = struct{}{} // ETH
        baseTokens[common.HexToAddress("0x4200000000000000000000000000000000000006")] = struct{}{} // WETH
        baseTokens[common.HexToAddress("0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb")] = struct{}{} // DAI
        baseTokens[common.HexToAddress("0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913")] = struct{}{} // USDC
        baseTokens[common.HexToAddress("0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA")] = struct{}{} // USDbC
        baseTokens[common.HexToAddress("0x9e1028F5F1D5eDE59748FFceE5532509976840E0")] = struct{}{} // COMP
        baseTokens[common.HexToAddress("0x8Ee73c484A26e0A5df2Ee2a4960B789967dd0415")] = struct{}{} // CRV
        baseTokens[common.HexToAddress("0x4158734D47Fc9692176B5085E0F52ee0Da5d47F1")] = struct{}{} // BAL
        baseTokens[common.HexToAddress("0xc5fecC3a29Fb57B5024eEc8a2239d4621e111CBE")] = struct{}{} // 1INCH
        baseTokens[common.HexToAddress("0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452")] = struct{}{} // wstETH
        baseTokens[common.HexToAddress("0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c")] = struct{}{} // rETH
        baseTokens[common.HexToAddress("0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22")] = struct{}{} // cbETH
        baseTokens[common.HexToAddress("0x04c0599ae5a44757c0af6f9ec3b93da8976c150a")] = struct{}{} // weETH
        baseTokens[common.HexToAddress("0x2416092f143378750bb29b79eD961ab195CcEea5")] = struct{}{} // ezETH
}