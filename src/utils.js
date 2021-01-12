/**
 * @param hex {string}
 * @returns {string}
 */
export const bytesToString = (hex) => {
  return Buffer.from(hex.replace(/^0x/, ''), 'hex')
    .toString()
    .replace(/\x00/g, '');
};

/**
 * @param str {string}
 * @returns {string} input encoded to hex, padded to 32 bytes
 */
export const stringToBytes = (str) => {
  let n = Buffer.from(str).toString('hex');
  while (n.length < 64) n = `${n}0`;
  return `0x${n}`;
};

export const compare = (a = '', b = '') => a.toLowerCase() === b.toLowerCase();
