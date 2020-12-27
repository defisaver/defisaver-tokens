const axios = require('axios');
const fs = require('fs').promises;
const {stringToBytes} = require('../util');

(async () => {
  const {data} = await axios('https://changelog.makerdao.com/releases/mainnet/active/contracts.json');

  const ilkInfo = Object.keys(data)
    .filter(k => k.substr(0, 8) === 'MCD_JOIN')
    .map(k => k.substr(9)).filter(k => k !== 'DAI')
    .map(ilk => ilk.toUpperCase().replace('-', '_')).map(ilk => ({
      asset: ilk.replace(/_.*/, ''),
      ilkLabel: ilk.replace('_', '-'),
      ilkBytes: stringToBytes(ilk.replace('_', '-')),
      join: data[`MCD_JOIN_${ilk}`],
      flip: data[`MCD_FLIP_${ilk}`],
      pip: data[`PIP_${ilk.replace(/_.*/, '')}`],
      isLP: ilk.substr(0, 5) === 'UNIV2',
    }));

  let fileData = '/** AUTOMATICALLY GENERATED FILE **/\n\n';
  fileData += 'exports.ilks = ' + JSON.stringify(ilkInfo, null, 4);

  const f = await fs.open(__dirname + '/../ilks.js', 'w');
  await f.write(fileData);
  await f.close();
})();
