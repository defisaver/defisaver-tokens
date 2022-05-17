const axios = require('axios');
const {getAssetInfo, utils: {compare}} = require('../umd');

(async () => {
  const {data} = await axios('https://api.compound.finance/api/v2/ctoken');

  const tokensInfo = data.cToken
    .filter(t => t.symbol !== 'cSAI')
    .map(t => ({
      symbol: t.symbol,
      name: t.name,
      address: t.token_address,
      underlyingAsset: t.underlying_symbol,
      decimals: 8,
      compoundCollateral: true,
    }));

  tokensInfo.forEach(t => {
    const assetInfo = getAssetInfo(t.symbol);
    if (!assetInfo.compoundCollateral) console.log(`${t.symbol} missing compoundCollateral attr`)
    if (assetInfo.symbol === '?' || assetInfo.decimals !== t.decimals || !compare(assetInfo.addresses[1], t.address)) console.log(t)
  });
})();
