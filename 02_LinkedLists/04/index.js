module.exports = function partition(node, x) {
    let less = node;
    let greater = node;

    while (node) {
        let next = node.next;

        if (node.value < x) {
            node.next = less;
            less = node
        } else {
            greater.next = node;
            greater = node
        }

        node = next
    }

    greater.next = undefined;
    return less
};
