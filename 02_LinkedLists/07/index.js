/**
 * Return intersections node
 *
 * @param headList1 {LinkedListNode}
 * @param headList2 {LinkedListNode}
 */
module.exports = function intersection(headList1, headList2) {
    let l1 = 0;
    let l2 = 0;
    let node1 = headList1;
    let node2 = headList2;

    while (node1) {
        l1++;
        node1 = node1.next;
    }

    while (node2) {
        l2++;
        node2 = node2.next;
    }
    let intersects = node1 === node2;

    if (!intersects) {
        return undefined
    }

    node1 = headList1;
    node2 = headList2;

    if (l1 > l2) {
        while (l1 > l2) {
            node1 = node1.next;
            l1--;
        }
    } else if (l2 > l1) {
        while (l2 > l1) {
            node2 = node2.next;
            l2--;
        }
    }

    while (true) {
        if (node1 === node2) {
            return node1
        }

        node1 = node1.next;
        node2 = node2.next;
    }
};
