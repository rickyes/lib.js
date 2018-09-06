'use strict';

class HashMap {
  
  constructor() {
    this._hash = '';
    this._cache = new Map();
  }

  put(key, value) {
    this._cache.set(key, value);
  }

  get(key) {
    return this._cache.get(key);
  }

}


module.exports = HashMap;