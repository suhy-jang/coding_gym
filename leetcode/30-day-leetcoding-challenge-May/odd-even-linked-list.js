/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head) return head;
    
    let odd = head;
    let even = head.next;
    while (odd.next && odd.next.next) {
        const temp = odd.next;
        odd.next = odd.next.next;
        odd = odd.next;
        temp.next = odd.next;
    }
    odd.next = even;
    return head;
};
