# lucky.js
Basic high-level data structure library for Node.js, inspired by Java

[![Travis](https://img.shields.io/travis/rickyes/lucky.js.svg?style=for-the-badge)](https://travis-ci.org/rickyes/lucky.js)
[![Node Version](https://img.shields.io/badge/node-%3E=9.0.0-brightgreen.svg?longCache=true&style=for-the-badge)](https://www.npmjs.com/package/lucky.js)
[![npm](https://img.shields.io/npm/v/lucky.js.svg?style=for-the-badge)](https://www.npmjs.com/package/lucky.js)
[![Codecov](https://img.shields.io/codecov/c/github/rickyes/lucky.js/master.svg?style=for-the-badge)](https://codecov.io/gh/rickyes/lucky.js)

## Install

``` bash
$ npm i lucky.js --save
```

## Features
- [x] LinkedList
- [x] HashMap
- [ ] DoubleLinkedList
- [ ] LinkedHashMap
- [ ] CycleLinkedList
- [ ] BinaryTree
- [ ] RedBlackTree
- [ ] AVLTree
- [ ] BTree
- [ ] BPlusTree
- [ ] Graph

## API
See the detailed [API Reference](./docs/index.md).

## Example

``` js
'use strict';

const {LinkedList, HashMap} = require('lucky.js');
const linkedList = new LinkedList();
const hashMap = new HashMap();

// LinkedList
linkedList.add('one');
linkedList.add('two');
const topValue = linkedList.peek(); // one


// HashMap
hashmap.put('one', 1);
const value = hashmap.get('one'); // 1
const oldValue = hashmap.replace('one', 1); // null
```

## Author
Lucky.js © [Ricky 泽阳](https://github.com/rickyes), Released under the MIT License.  