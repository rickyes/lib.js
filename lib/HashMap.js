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

  _getNode(key) {
    if (this.length === 0) return null;
    const hash = this._hash(key);
    const i = this._indexFor(hash, this.table.length);
    for (let e = this.table[i]; e != null; e = e.next) {
      let k;
      if (e.hash === hash && ((k = e.key) === key)) {
        return e;
      }
    }
    return null;
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
    let node;
    return (node = this._getNode(key)) && node.value;
  }


  clear() {
    const length = this.length;
    if (length === 0) return 0;
    this._inflateTable(this.threshold);
    this.length = 0;
    return length;
  }


  clone() {
    let result;
    result = new HashMap(this.initialCapacity, this.loadFactor);
    this.table.some((node, i) => {
      let e = node;
      for (; e != null; e = e.next) {
        result.table[i] = e;
        result.length++;
      }
    });
    return result;
  }


  isEmpty() {
    return this.length > 0 ? false : true;
  }


  // 单元素桶节点：则将当前桶节点设置为null。
  // 链表的桶节点：则断开被删除的键值对节点，然后重新连接
  // 红黑树桶节点：删除键值对节点并调整树结构保持平衡，如果有必要则将红黑树缩减为链表。
  // remove(key) {
  //   const hash = this._hash(key);
  //   const i = this._indexFor(hash, this.table.length);
  //   for (let e = this.table[i]; e != null; e = e.next) {
  //     let k;
  //     if (e.hash === hash && ((k = e.key) === key)) {
  //       const value = e.value;
  //       //
  //       this.length--;
  //       return value;
  //     }
  //   }
  //   return null;
  // }

  
  replace(key, newValue) {
    const node = this._getNode(key);
    if (node != null && node.value !== newValue) {
      let oldValue = node.value;
      node.value = newValue;
      return oldValue;
    }
    return null;
  }


  size() {
    return this.length;
  }


  containsKey(key) {
    return this._getNode(key) != null;
  }


  containsValue(value) {
    if (value == null) return false; 
    let tab;
    if ((tab = this.table) != null && this.length > 0) {
      for (let e of tab) {
        for (; e != null; e = e.next) {
          if (e.value === value) return true;
        }
      }
    }
    return false;
  }


  keys() {
    const keys = [];
    for (let e of this.table) {
      for (; e != null; e = e.next) {
        keys.push(e.key);
      }
    }
    return keys;
  }

}


module.exports = HashMap;