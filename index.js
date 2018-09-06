'use strict';

const lazyLoad = function (fnName) {
  return require(`./lib/${fnName}`);
};

module.exports = new Proxy(module.exports, {
  get: (target, key) => {
    if (typeof key === 'symbol' || key === 'inspect') return;
    return lazyLoad(key);
  }
});