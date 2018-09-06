namespace Lucky {
  interface HashMap {
    put(key: any, value: any): any;
    get(key: any): any;
  }

  interface BinaryTree {
    insert(value: any): void;
  }
  
  interface HashMapFactory {
    new (): HashMap;
  }

  interface BinaryTreeFactory {
    new (): BinaryTree;
  }
}

declare const Luckyjs: {
  HashMap: Lucky.HashMapFactory;
  BinaryTree: Lucky.BinaryTreeFactory;
}

export = Luckyjs;