/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {   
    let node = head;
    let size = 0;
    while(node != null) {
        size += 1;
        node = node.next;
    }
    if (size == 0 || k % size == 0) return head;
    
    let remainder = k % size;
    remainder = size - remainder;
    
    node = head;
    let i = 1;
    while (i < remainder) {
        node = node.next;
        i += 1;
    }
    const newHead = node.next;
    node.next = null;
    node = newHead;
    while(node.next != null) {
        node = node.next;
    }
    node.next = head;
    return newHead;
};


