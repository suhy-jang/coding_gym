function reverse(head) {
    if (head == null) return null;

    let prev = null;
    while(head.next != null) {
        const nextNode = head.next;
        head.next = prev;
        prev = head;
        head = nextNode;
    }
    head.next = prev;
    return head;
}
