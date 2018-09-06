'use strict';

const tap = require('tap');
const test = tap.test;
const {HashMap} = require('..');

const hashMap = new HashMap();

test('put', (t) => {
  hashMap.put('key', 'value');
  t.end();
});

test('get', (t) => {
  t.equal(hashMap.get('key'), 'value');
  t.end();
});