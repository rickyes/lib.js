'use strict';

const tap = require('tap');
const test = tap.test;
const {HashMap} = require('..');

test('put', (t) => {
  const hashmap = new HashMap();
  hashmap.put('test', 1);
  const size = hashmap.size();
  t.equal(size, 1);
  t.end();
});

test('size', (t) => {
  const hashmap = new HashMap();
  hashmap.put('one', 1);
  hashmap.put('two', 2);
  const size = hashmap.size();
  t.equal(size, 2);
  t.end();
});

// test('test', (t) => {
  // const hashmap = new HashMap();
  // let hash = hashmap._hash('test');
  // let index = hashmap._indexFor(hash, hashmap.table.length);
  // console.log(hash, index);
  // hash = hashmap._hash('tst');
  // index = hashmap._indexFor(hash, hashmap.table.length);
  // console.log(hash, index);
  // hash = hashmap._hash('txt');
  // index = hashmap._indexFor(hash, hashmap.table.length);
  // console.log(hash, index);
  // hash = hashmap._hash('tat');
  // index = hashmap._indexFor(hash, hashmap.table.length);
  // console.log(hash, index);
  // hash = hashmap._hash('mh');
  // index = hashmap._indexFor(hash, hashmap.table.length);
  // console.log(hash, index);
  // hash = hashmap._hash('ji');
  // index = hashmap._indexFor(hash, hashmap.table.length);
  // console.log(hash, index);
  // hash = hashmap._hash('yt');
  // index = hashmap._indexFor(hash, hashmap.table.length);
  // console.log(hash, index);
  // t.end();
// });