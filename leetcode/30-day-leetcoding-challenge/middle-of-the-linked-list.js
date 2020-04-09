/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
    let size = 0;
    let node = head;
    while(node !== null) {
        node = node.next;
        size += 1;
    }
    size = Math.floor(size / 2); 
    node = head;
    while(size-- > 0) {
        node = node.next;
    }
    return node;
};
