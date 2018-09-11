'use strict';

/**
 * 取 i 这个数的二进制形式最左边的最高一位且高位后面全部补零，最后返回int型
 */
exports.highestOneBit = (i) => {
  i |= (i >> 1);
  i |= (i >> 2);
  i |= (i >> 4);
  i |= (i >> 8);
  i |= (i >> 16);
  return i - (i >>> 1);
};



exports.getASCII = (string) => {
  if (typeof string !== 'string') string += '';
  let asciiCode = '';
  let index = 0;
  while (index < string.length) {
    asciiCode += string.charCodeAt(index++);
  }
  return asciiCode;
};