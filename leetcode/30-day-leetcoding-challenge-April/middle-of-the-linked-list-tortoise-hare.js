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
    let hare = head, tortoise = head;
    while(hare !== null && hare.next !== null) {
        tortoise = tortoise.next;
        hare = hare.next.next;
    }
    return tortoise;
};
