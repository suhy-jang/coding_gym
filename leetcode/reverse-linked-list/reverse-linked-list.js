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
let reverseList = function(head) {
    let prevNode = null;
    while (head) {
        let nextNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }
    return prevNode;
};
