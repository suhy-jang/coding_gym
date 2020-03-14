function getNode(head, positionFromTail) {
    let countNode = 0;
    let curr = head;
    while (curr != null) {
        countNode += 1;
        curr = curr.next;
    }
    curr = head;
    const positionFromFront = countNode - positionFromTail;
    for(let i = 1; i < positionFromFront; i++) {
        curr = curr.next;
    }
    return curr.data;
}
