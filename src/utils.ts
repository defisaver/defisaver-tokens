/**
 * @param hex {string}
 * @returns {string}
 */
export function bytesToString(hex: string): string {
  return Buffer.from(hex.replace(/^0x/, ''), 'hex')
    .toString()
    .replace(/\x00/g, '');
}

/**
 * @param str {string}
 * @return {string} input encoded to hex, padded to 32 bytes
 */
export function stringToBytes(str: string): string {
  let n = Buffer.from(str).toString('hex');while (n.length < 64) n = `${n}0`;
  return `0x${n}`;
}

export function compare(a: string = '', b: string = ''): boolean {
  return a.toLowerCase() === b.toLowerCase();
}
