declare namespace Lucky {
  interface HashMap {
    put(key: any, value: any): any;
    get(key: any): any;
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
    
    isEmpty(): boolean;
    
    clear(): number;
  }
  
  interface HashMapFactory {
    new (): HashMap;
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