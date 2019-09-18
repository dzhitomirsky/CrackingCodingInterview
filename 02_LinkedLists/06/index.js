const LinkedListNode = require('../linked-list');
/**
 * Check if list is a palindrome
 *
 * @param listHead {LinkedListNode}
 * @return {boolean}
 */
module.exports = function isPalindrome(listHead) {
    let pointer = listHead;
    let reversed = new LinkedListNode(pointer.value);

    while (pointer.next) {
        let node = new LinkedListNode(pointer.next.value);
        node.next = reversed;
        reversed = node;
        pointer = pointer.next
    }

    pointer = listHead;

    while (pointer) {
        if (pointer.value !== reversed.value) {
            return false
        }
        pointer = pointer.next;
        reversed = reversed.next;
    }

    return true
};
