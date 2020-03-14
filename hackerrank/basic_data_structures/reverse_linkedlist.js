function reverseHelper(head, prev) {
    if (head.next) {
        let next = head.next;
        head.next = prev;
        return reverseHelper(next, head);
    }
    head.next = prev;
    return head;
}

function reverse(head) {
    return reverseHelper(head, null);
}
