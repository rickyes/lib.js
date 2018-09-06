declare namespace Lucky {
  interface HashMap {
    put(key: any, value: any): any;
    get(key: any): any;
  }

  interface BinaryTree {
    insert(value: any): void;
  }

  interface LinkedList {
    add(value: any): void;
    
    push(value: any): void;
    
    pop(): any;
    
    get(index: number): any;
    
    size(): number;
    
    remove(index: number): void;
    
    removeAll(): void;
    
    isEmpty(): boolean;
    
    clear(): void;
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