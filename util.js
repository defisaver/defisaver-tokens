exports.bytesToString = (hex) => {
  return Buffer.from(hex.replace(/^0x/, ''), 'hex')
      .toString()
      .replace(/\x00/g, '');
}

exports.stringToBytes = (str) => {
  let n = Buffer.from(str).toString('hex');
  while (n.length < 64) n = `${n}0`;
  return `0x${n}`;
}

exports.compare = (a = '', b = '') => a.toLowerCase() === b.toLowerCase();
