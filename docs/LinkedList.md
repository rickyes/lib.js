## LinkedList
单向链表


### `add(value: any): number`

将元素追加到列表的末尾，返回元素的索引。

### `unshift(value: any): number`

将元素插入到列表的头部，返回元素的索引。

### `pollFirst(): any`

检索并删除此列表的第一个元素，返回删除的元素，如果此列表为空，则返回 null 。

### `pop(): any`

检索并删除列表的最后一个元素，返回删除的元素，如果列表为空，则返回 null 。

### `peek(): any`

检索但不删除此列表的头（第一个元素）。

### `peekLast(): any`

检索但不删除此列表的最后一个元素，如果此列表为空，则返回 null 。

### `get(index: number): any`

返回此列表中指定位置的元素。
    
### `size(): number`

返回此列表中的元素数。

### `remove(index: number): any`

删除该列表中指定位置的元素，返回删除的元素，如果数列表为空或位置越界，则返回 null 。

### `isEmpty(): boolean`

判断列表是否为空

### `clear(): number`

从列表中删除所有元素， 返回列表未删除前的元素数量。

### `removeByValue(value: any, index: number): number;`

表头开始检索从列表中删除指定第几次（默认为1）出现的元素，返回元素的索引。