const axios = require('axios');
const {compare} = require('../util');
const {getAssetInfo, getAssetInfoByAddress} = require('../index');

(async () => {
    const {data} = await axios.post("https://api.thegraph.com/subgraphs/name/aave/protocol-multy-raw", {
        query: "{\n  atokens (where: { pool: \"0x24a42fd28c976a61df5d00d0599c34c4f90748c8\" }) {\n    id\n    underlyingAssetAddress\n  }\n}",
        variables: null
    });

    const tokensInfo = data.data.atokens
        .filter(t => t.id !== '0x00ee7423162d312a5c3bba6c4c7d8332c4d20f2c') // aENJ is sent twice
        .map(t => {
            const aAssetInfo = getAssetInfoByAddress(t.id);
            const assetInfo = getAssetInfoByAddress(t.underlyingAssetAddress);
            return {
                symbol: `a${assetInfo.symbol}`,
                name: assetInfo.name,
                address: t.id,
                underlyingAsset: assetInfo.symbol,
                decimals: 18,
                aaveCollateral: true,
            }
        })

    tokensInfo.forEach(t => {
        const assetInfo = getAssetInfo(t.symbol);
        if (assetInfo.symbol === '?' || assetInfo.decimals !== t.decimals || !compare(assetInfo.address, t.address)) console.log(t)
    });
})();
