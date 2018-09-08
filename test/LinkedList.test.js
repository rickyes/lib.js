'use strict';

const tap = require('tap');
const test = tap.test;
const {LinkedList} = require('..');

test('add', (t) => {
  const linkedList = new LinkedList();
  const position = linkedList.add('one');
  t.equal(position, 0);
  t.end();
});

test('get', (t) => {
  const linkedList = new LinkedList();
  linkedList.add('one');
  const element = linkedList.get(0);
  t.equal(element, 'one');
  t.end();
});

test('size', (t) => {
  const linkedList = new LinkedList();
  linkedList.add('one');
  const size = linkedList.size();
  t.equal(size, 1);
  t.end();
});

test('unshift', (t) => {
  const linkedList = new LinkedList();
  linkedList.add('one');
  const position = linkedList.unshift('newOne');
  const size = linkedList.size();
  const oneValue = linkedList.get(0);
  const twoValue = linkedList.get(1);
  t.equal(position, 0);
  t.equal(size, 2);
  t.equal(oneValue, 'newOne');
  t.equal(twoValue, 'one');
  t.end();
});