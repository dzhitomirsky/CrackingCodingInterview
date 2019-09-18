/**
 * Get loop start or undefined
 *
 * @param listHead {LinkedListNode}
 * @return {undefined | LinkedListNode}
 */
module.exports = function detectLoop(listHead) {
    let slow = listHead;
    let fast = listHead;

    while (slow && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            break
        }
    }

    if (!fast.next) {
        return undefined
    }

    slow = listHead;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};
