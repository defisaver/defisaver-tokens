"use strict";
const fs = require('fs');
const path = require('path');
const a = require("src/assets");

// Function to map chainID to chain_name
function getChainName(chainID) {
    const chainMap = {
        1: 'mainnet',
        10: 'optimism',
        42161: 'arbitrum',
        8453: 'base'
    };
    return chainMap[chainID] || 'unknown_chain';
}

// Function to generate the Go file
function generateTokenFile(chainID, assets) {
    const chainName = getChainName(chainID);
    const date = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

    let output = `package dfstokens

import (
        "github.com/ethereum/go-ethereum/common"
)

// List updated as of ${date} from https://github.com/defisaver/defisaver-tokens/blob/master/src/assets.ts

var ${chainName}Tokens = make(map[common.Address]struct{})

func init() {
`;

    assets.forEach(function (asset) {
        const address = asset.addresses[chainID];
        if (address) {
            output += `        ${chainName}Tokens[common.HexToAddress("${address}")] = struct{}{} // ${asset.symbol}\n`;
        }
    });

    output += `}`;

    // Ensure the 'generated' directory exists at the same level as 'src'
    const dir = path.join(__dirname, '..', 'generated');
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    // Write the output to a file in the 'generated' directory
    const filePath = path.join(dir, `${chainName}.go`);
    fs.writeFileSync(filePath, output, 'utf8');
}

generateTokenFile(1, a.assets);
generateTokenFile(10, a.assets);
generateTokenFile(42161, a.assets);
generateTokenFile(8453, a.assets);
