const LinkedListNode = require('../linked-list');

/**
 * Remove duplicated from unsorted linked list
 *
 * @param listHead {LinkedListNode}
 */
function removeDuplicateWithCache(listHead) {
    const duplicated = new Set();
    let current = listHead;
    let prev = listHead;

    while (current) {
        if(!duplicated.has(current.value)) {
            duplicated.add(current.value);
            prev = current;
            current = current.next;
        } else {
            prev.next = current.next;
            current = current.next;
        }
    }
}

function removeDuplicatedWithNoCache(listHead) {
    let node = listHead;
    while (node) {
        let prev = node;
        let current = node.next;
        while (current) {
            if(current.value === node.value) {
                prev.next = current.next;
                current = current.ne;
            } else {
                prev = current;
                current = current.next;
            }
        }
        node = node.next
    }
}

module.exports = {
    removeDuplicateWithCache,
    removeDuplicatedWithNoCache
};
