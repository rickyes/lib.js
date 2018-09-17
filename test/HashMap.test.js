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

test('replace', (t) => {
  const hashmap = new HashMap();
  hashmap.put('one', 1);
  let oldValue = hashmap.replace('one', 1);
  t.equal(oldValue, null);
  oldValue = hashmap.replace('one', '1');
  t.equal(oldValue, 1);
  t.end();
});

test('containsKey', (t) => {
  const hashmap = new HashMap();
  hashmap.put('one', 1);
  hashmap.put('two', '1');
  let hasKey = hashmap.containsKey('one');
  t.equal(hasKey, true);
  hasKey = hashmap.containsKey('ts');
  t.equal(hasKey, false);
  t.end();
});

test('containsValue', (t) => {
  const hashmap = new HashMap();
  hashmap.put('one', 1);
  hashmap.put('two', '1');
  let hasValue = hashmap.containsValue(1);
  t.equal(hasValue, true);
  hasValue = hashmap.containsValue('1');
  t.equal(hasValue, true);
  hasValue = hashmap.containsValue(null);
  t.equal(hasValue, false);
  hasValue = hashmap.containsValue(2);
  t.equal(hasValue, false);
  t.end();
});

test('constructor', (t) => {
  try {
    const hashmap = new HashMap(-1);
  } catch (error) {
    t.type(error, Error);
    t.equal(error.message, 'Illegal initial capacity: -1');
  }

  try {
    const hashmap = new HashMap(16, -1);
  } catch (error) {
    t.type(error, Error);
    t.equal(error.message, 'Illegal load factor: -1');
  }

  try {
    const hashmap = new HashMap(16, 'string');
  } catch (error) {
    t.type(error, Error);
    t.equal(error.message, 'Illegal load factor: string');
  }
  t.end();
});

test('clone', (t) => {
  const hashmap = new HashMap();
  hashmap.put('one', 1);
  hashmap.put('two', '1');
  const hashmapTemp = hashmap.clone();
  let value = hashmapTemp.get('one');
  t.equal(value, 1);
  hashmapTemp.put('three', 'three');
  let size = hashmapTemp.size();
  let oldSize = hashmap.size();
  t.equal(size, 3);
  t.equal(oldSize, 2);
  t.end();
});

test('keys', (t) => {
  const hashmap = new HashMap();
  hashmap.put('one', 1);
  hashmap.put('two', '1');
  let keys = hashmap.keys();
  t.equal(keys.length, 2);
  t.end();
});

test('values', (t) => {
  const hashmap = new HashMap();
  hashmap.put('one', 1);
  hashmap.put('two', '1');
  hashmap.put(null, 2);
  let values = hashmap.values();
  t.equal(values.length, 2);
  t.end();
});

test('remove', (t) => {
  const hashmap = new HashMap();
  hashmap.put('test', 'test');
  hashmap.put('tet', 'tet');
  hashmap.put('tst', 'tst');
  let size = hashmap.size();
  t.equal(size, 3);
  let value = hashmap.remove('tet');
  t.equal(value, 'tet');
  size = hashmap.size();
  t.equal(size, 2);
  hashmap.put('tet', 'tet');
  value = hashmap.remove('tet');
  t.equal(value, 'tet');
  size = hashmap.size();
  t.equal(size, 2);
  t.end();
});

test('resize', (t) => {
  const hashmap = new HashMap(2);
  hashmap.put('one', 1);
  hashmap.put('two', 2);
  hashmap.put('three', 3);
  hashmap.put('four', 4);
  t.end();
});