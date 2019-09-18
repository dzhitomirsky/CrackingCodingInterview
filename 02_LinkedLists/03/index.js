/**
 * Delete element
 *
 * @param node {LinkedListNode}
 */
module.exports = function deleteMiddleNode(node) {
    if (!node.next) {
        throw new Error('Cant delete at the end');
    }

    node.value = node.next.value;
    node.next = node.next.next
};
