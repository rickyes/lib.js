'use strict';

const tap = require('tap');
const test = tap.test;
const {LinkedList} = require('..');

const linkedList = new LinkedList();

test('add', (t) => {
  const position = linkedList.add('one');
  t.equal(position, 0);
  t.end();
});

test('get', (t) => {
  const element = linkedList.get(0);
  t.equal(element, 'one');
  t.end();
});

test('size', (t) => {
  const size = linkedList.size();
  t.equal(size, 1);
  t.end();
});