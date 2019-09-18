/**
 * Return K-th from tail
 *
 * @param listHead {LinkedListNode}
 * @param k {number}
 * @returns {number}
 */
module.exports = function kThFromEnd(listHead, k) {
    if (!k || k <= 0) {
        throw new Error('K exceeds list size.')
    }

    let size = 0;
    let head = listHead;
    while (head) {
        size++;
        head = head.next;
    }
    if (k > size) {
        throw new Error('K exceeds list size.')
    }

    let result = listHead;
    let idx = 0;
    while (idx < size - k) {
        result = result.next;
        idx++
    }

    return result.value;
};
