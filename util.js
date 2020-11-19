/**
 * @param hex {string}
 * @returns {string}
 */
exports.bytesToString = (hex) => {
  return Buffer.from(hex.replace(/^0x/, ''), 'hex')
      .toString()
      .replace(/\x00/g, '');
}

/**
 * @param str {string}
 * @returns {string} input encoded to hex, padded to 32 bytes
 */
exports.stringToBytes = (str) => {
  let n = Buffer.from(str).toString('hex');
  while (n.length < 64) n = `${n}0`;
  return `0x${n}`;
}

exports.compare = (a = '', b = '') => a.toLowerCase() === b.toLowerCase();
