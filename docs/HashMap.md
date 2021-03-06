## HashMap
哈希表 (数组+链表)

### `new (initialCapacity?: number, loadFactor?: number): HashMap`
创建一个哈希表实例，可选参数分别为数组初始长度（默认16）、负载因子（默认0.75）

### `put(key: string, value: any): number`
将指定的值与此映射中的指定键相关联, 返回数组下标。

### `size(): number`
获取映射元素个数

### `get(key: string): any`
返回到指定键所映射的值。

### `isEmpty(): boolean`
如果为空表，则返回 true。

### `clear(): number`
从这张地图中删除所有的映射。

### `replace(key: string, newValue: any): any`
只有当目标映射到某个值时，才能替换指定键的条目(新值和旧值做全等对比)。

### `containsKey(key: string): boolean`
是否存在该key。

### `containsValue(value: any): boolean`
是否存在该值。

### `clone(): HashMap`
深拷贝整个HashMap

### `keys(): Array<string>`
检索所有的key, 构造数组返回。

### `values(): Array<any>`
检索所有的value, 构成数组返回。

### `remove(key: string): any`
删除指定key的映射，返回删除的映射的value。
