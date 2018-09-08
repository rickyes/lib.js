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

test('pollFirst', (t) => {
  const linkedList = new LinkedList();
  linkedList.add('one');
  linkedList.add('two');
  const value = linkedList.pollFirst();
  const oneValue = linkedList.get(0);
  t.equal(value, 'one');
  t.equal(oneValue, 'two');
  t.end();
});

test('peek', (t) => {
  const linkedList = new LinkedList();
  linkedList.add('one');
  linkedList.add('two');
  const value = linkedList.peek();
  const oneValue = linkedList.get(0);
  t.equal(value, 'one');
  t.equal(oneValue, 'one');
  t.end();
});

test('pop', (t) => {
  const linkedList = new LinkedList();
  linkedList.add('one');
  linkedList.add('two');
  const value = linkedList.pop();
  const oneValue = linkedList.get(0);
  const size = linkedList.size();
  t.equal(value, 'two');
  t.equal(oneValue, 'one');
  t.equal(size, 1);
  t.end();
});

test('peekLast', (t) => {
  const linkedList = new LinkedList();
  linkedList.add('one');
  linkedList.add('two');
  const value = linkedList.peekLast();
  const oneValue = linkedList.peek();
  const size = linkedList.size();
  t.equal(value, 'two');
  t.equal(oneValue, 'one');
  t.equal(size, 2);
  t.end();
});