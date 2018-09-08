# lucky.js
Basic high-level data structure library

[![Travis](https://img.shields.io/travis/rickyes/lucky.js.svg?style=for-the-badge)](https://travis-ci.org/rickyes/lucky.js)
[![Node Version](https://img.shields.io/badge/node-%3E=9.0.0-brightgreen.svg?longCache=true&style=for-the-badge)](https://www.npmjs.com/package/lucky.js)
[![npm](https://img.shields.io/npm/v/lucky.js.svg?style=for-the-badge)](https://www.npmjs.com/package/lucky.js)

## Install

``` bash
$ npm i lucky.js --save
```

## Get Start

``` js
'use strict';

const {LinkedList} = require('lucky.js');
const linkedList = new LinkedList();

const position = linkedList.add('one'); // 0
const value = linkedList.get(0); // one
```

## Author
Lucky.js © [Ricky 泽阳](https://github.com/rickyes), Released under the MIT License.  