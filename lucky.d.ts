declare namespace Lucky {
  interface HashMap {
    put(key: string, value: any): number;
    size(): number;
    get(key: string): any;
    isEmpty(): boolean;
    clear(): number;
    replace(key: string, newValue: any): any;
    containsKey(key: string): boolean;
    containsValue(value: any): boolean;
    clone(): HashMap;
    keys(): Array<string>;
    values(): Array<any>;
    remove(key: string): any;
  }

  interface BinaryTree {
    insert(value: any): void;
  }

  interface LinkedList {
    add(value: any): number;
    unshift(value: any): number;
    pollFirst(): any;
    pop(): any;
    peek(): any;
    peekLast(): any;
    get(index: number): any;
    size(): number;
    remove(index: number): any;
    removeByValue(value: any, index: number): number;
    isEmpty(): boolean;
    clear(): number;
  }
  
  interface HashMapFactory {
    new (initialCapacity?: number, loadFactor?: number): HashMap;
  }

  interface BinaryTreeFactory {
    new (): BinaryTree;
  }

  interface LinkedListFactory {
    new (): LinkedList;
  }
}

declare const Luckyjs: {
  HashMap: Lucky.HashMapFactory;
  BinaryTree: Lucky.BinaryTreeFactory;
  LinkedList: Lucky.LinkedListFactory;
}

export = Luckyjs;