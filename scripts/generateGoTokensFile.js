"use strict";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { assets } from "../cjs/index.js";

// Get directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

	      "github.com/DecenterApps/defisaver-backend/src/dto/tokensdto"
)

// List auto-generated on ${date} from https://github.com/defisaver/defisaver-tokens/blob/master/src/assets.ts

var ${chainName}Tokens = make(map[common.Address]tokensdto.Token)
var ${chainName}TokensSymbols = make(map[string]common.Address)

func init() {
`;

    assets.forEach(function (asset) {
        const address = asset.addresses[chainID];
        if (address) {
            output += `        ${chainName}TokensSymbols["${asset.symbol.toUpperCase()}"] = common.HexToAddress("${address}")\n`
            output += `        ${chainName}Tokens[common.HexToAddress("${address}")] = tokensdto.Token{
                Address:  common.HexToAddress("${address}"),
                ChainID:  ${chainID},
                Symbol:   "${asset.symbol.toUpperCase()}",
                Name:     "${asset.name}",
                Decimals: ${asset.decimals},
                IsStable: ${asset.isStable === true},
            }\n\n`;
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

generateTokenFile(1, assets);
generateTokenFile(10, assets);
generateTokenFile(42161, assets);
generateTokenFile(8453, assets);
