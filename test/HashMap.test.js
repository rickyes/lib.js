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

test('get', (t) => {
  const hashmap = new HashMap();
  hashmap.put('one', 1);
  hashmap.put('two', 'twoValue');
  let value = hashmap.get('one');
  t.equal(value, 1);
  value = hashmap.get('two');
  t.equal(value, 'twoValue');
  value = hashmap.get('three');
  t.equal(value, null);
  t.end();
});

test('isEmpty', (t) => {
  const hashmap = new HashMap();
  let isEmpty = hashmap.isEmpty();
  t.equal(isEmpty, true);
  hashmap.put('one', 1);
  isEmpty = hashmap.isEmpty();
  t.equal(isEmpty, false);
  t.end();
});

test('clear', (t) => {
  const hashmap = new HashMap();
  let length = hashmap.clear();
  t.equal(length, 0);
  let isEmpty = hashmap.isEmpty();
  t.equal(isEmpty, true);
  hashmap.put('one', 1);
  length = hashmap.clear();
  t.equal(length, 1);
  isEmpty = hashmap.isEmpty();
  t.equal(isEmpty, true);
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