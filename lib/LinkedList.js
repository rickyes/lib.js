'use strict';

const Node = function (value) {
  this.value = value;
  this.next = null;
}

class LinkedList {
  constructor () {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    return this.length++;
  }

  push() {}

  pop() {}

  get(index) {
    if (this.head === null || this.length < index + 1) return;
    let current = this.head;
    if (index === 0) return current.value;
    let position = 0;
    while (current !== null) {
      if (position++ === index) {
        return current.value;
      }
      current = current.next;
    }
  }

  size() {
    return this.length;
  }

  remove() {}

  removeAll() {}

  isEmpty() {}

  clear() {}
}

module.exports = LinkedList;