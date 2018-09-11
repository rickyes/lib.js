'use strict';

const util = require('../util/util');
const MAXIMUM_CAPACITY = 1 << 30;

const Node = function (hash, key, value, node) {
  this.hash = hash;
  this.value = value;
  this.key = key;
  this.next = node;
};

class HashMap {
  
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    if (initialCapacity < 0)
      throw new Error("Illegal initial capacity: " + initialCapacity);
    if (initialCapacity > MAXIMUM_CAPACITY)
      initialCapacity = MAXIMUM_CAPACITY;
    if (loadFactor <= 0 || isNaN(loadFactor))
      throw new Error("Illegal load factor: " + loadFactor);
    this.table;
    this.length = 0;
    this.threshold = initialCapacity;
    this.loadFactor = loadFactor;
    this._inflateTable(this.threshold);
  }

  _inflateTable(toSize) {
    const capacity = this._roundUpToPowerOf2(toSize);
    this.threshold = parseInt(Math.min(capacity * this.loadFactor, MAXIMUM_CAPACITY + 1));
    this.table = new Array(capacity);
  }

  _roundUpToPowerOf2(number) {
    return number >= MAXIMUM_CAPACITY
        ? MAXIMUM_CAPACITY
        : (number > 1) ? util.highestOneBit((number - 1) << 1) : 1;
  }

  _hash(key) {
    let h;
    return (key === null) ? 0 : (h = util.getASCII(key)) ^ (h >>> 16);
  }

  _indexFor(h, length) {
    return h & (length - 1);
  }

  _transfer(newTable, rehash) {
    let newCapacity = newTable.length;
    // for (const e of this.table) {
    //   while
    // }
  }

  _resize(newCapacity) {
    const oldTable = this.table;
    const oldCapacity = oldTable.length;
    const newTable = new Array(newCapacity);
  }

  put(key, value) {
    let hash = this._hash(key);
    let i = this._indexFor(hash, this.table.length);
    for(let e = this.table[i]; e != null; e.next) {
      let k;
      if (e.hash === hash && ((k = e.key) === key)) {
        e.value = value;
        return i;
      }
    }
    this.length++;
    let e = this.table[i];
    while (e != null) {
      if (e.next == null) {
        e.next = new Node(hash, key, value, null);
        return i;
      }
      e = e.next;
    }
    this.table[i] = new Node(hash, key, value, null);
    return i;
  }

  get(key) {
    if (this.length === 0) return null;
    const hash = this._hash(key);
    const i = this._indexFor(hash, this.table.length);
    for (let e = this.table[i]; e != null; e = e.next) {
      let k;
      if (e.hash === hash && ((k = e.key) === key)) {
        return e.value;
      }
    }
    return null;
  }

  clear() {}

  clone() {}

  isEmpty() {}

  remove() {}

  replace() {}

  size() {
    return this.length;
  }

  merge() {}

  containsKey() {}

  containsValue() {}

  replaceAll() {}

}


module.exports = HashMap;