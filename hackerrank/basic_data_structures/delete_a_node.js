function deleteNode(head, position) {
    if (position == 0) return head.next;

    const copiedHead = head;
    while(position-- > 1) {
        head = head.next;
    }
    head.next = head.next.next;
    return copiedHead;
}
