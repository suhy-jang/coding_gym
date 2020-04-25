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
const deleteDuplicates = function(head) {
    let prev = null;
    let node = head;
    while(node) {
        const currVal = node.val;
        let isDup = false;
        while (node.next && node.next.val === currVal) {
            isDup = true;
            node = node.next;
        }
        if (isDup) {
            if (prev) prev.next = node.next;
            else head = node.next;
        } else {
            prev = node;
        }
        node = node.next;
    }
    return head;
};
