function mergeLists(head1, head2) {
    let newHead = new SinglyLinkedListNode(-1);
    let curr = newHead;
    while (head1 != null && head2 != null) {
        if (head1.data <= head2.data) {
            curr.next = head1;
            curr = curr.next;
            head1 = head1.next;
        } else {
            curr.next = head2;
            curr = curr.next;
            head2 = head2.next;
        }
    }

    curr.next = head1 != null ? head1 : head2;
    return newHead.next;
}
