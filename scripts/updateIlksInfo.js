const axios = require('axios');
const fs = require('fs').promises;
const {utils: {stringToBytes}} = require('../umd');

(async () => {
  const {data} = await axios('https://changelog.makerdao.com/releases/mainnet/active/contracts.json');

  const ilkInfo = Object.keys(data)
    .filter(k => k.substr(0, 8) === 'MCD_JOIN')
    .filter(k => !k.includes('RWA'))
    .map(k => k.substr(9)).filter(k => k !== 'DAI' && k !== 'RWA001')
    .map(ilk => ilk.toUpperCase().replace('-', '_')).map(ilk => ({
      asset: ilk.replace(/_.*/, '').replace(/^KNC$/, 'KNCL').replace(/^PAXUSD$/, 'USDP'),
      ilkLabel: ilk.replace('_', '-'),
      ilkBytes: stringToBytes(ilk.replace('_', '-')),
      join: data[`MCD_JOIN_${ilk}`],
      flip: data[`MCD_FLIP_${ilk}`],
      clip: data[`MCD_CLIP_${ilk}`],
      clipCalc: data[`MCD_CLIP_CALC_${ilk}`],
      pip: data[`PIP_${ilk.replace(/_.*/, '')}`],
      isLP: ilk.substr(0, 5) === 'UNIV2',
    }));

  let fileData = '/** AUTOMATICALLY GENERATED FILE **/\n\n';
  fileData += 'import { IlkData } from \'./types\';\n\nexport const ilks:IlkData[] = ';
  fileData += JSON.stringify(ilkInfo, null, 2) + ';\n';

  const f = await fs.open(__dirname + '/../src/ilks.ts', 'w');
  await f.write(fileData);
  await f.close();
})();
