
const ListNode = function(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
}

/**
 * @param {number} capacity
 */
const LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map;
    this.head = new ListNode(-1, -1);
    this.tail = new ListNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.cache.get(key);
    if (!node) return -1;
    
    this.moveToHead(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.cache.get(key);
    if (node) {
        node.val = value;
        this.moveToHead(node);
    } else {
        if (this.capacity === 0) {
            const k = this.popTail();
            this.cache.set(k, undefined);
            this.capacity += 1;
        }
        node = new ListNode(key, value);
        this.addToHead(node);
        this.cache.set(key, node);
        this.capacity -= 1;
    }
};

LRUCache.prototype.addToHead = function(node) {
    const nextNode = this.head.next;
    this.head.next = node;
    node.next = nextNode;
    nextNode.prev = node;
    node.prev = this.head;
}

LRUCache.prototype.moveToHead = function(node) {
    this.removeNode(node);
    this.addToHead(node);
}
    
LRUCache.prototype.removeNode = function(node) {
    const prev = node.prev;
    const nextNode = node.next;
    prev.next = nextNode;
    nextNode.prev = prev;
}

LRUCache.prototype.popTail = function() {
    const node = this.tail.prev;
    this.prev = node.prev;
    this.removeNode(node);
    this.prev.next = this.tail;
    this.tail.prev = this.prev;
    return node.key;
}
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
