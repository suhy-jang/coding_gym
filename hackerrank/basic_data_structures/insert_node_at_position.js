function insertNodeAtPosition(head, data, position) {
    const copiedHead = head;
    while(position-- > 1) {
        head = head.next;
    }
    const nextNode = head.next;
    const newNode = new SinglyLinkedListNode(data);
    head.next = newNode;
    newNode.next = nextNode;
    return copiedHead;
}
