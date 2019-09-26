const {BinaryTree} = require('../bst');

/**
 * Build BST of minimal depth
 *
 * @param values sorted {Array{Number}} with unique elements
 * @return {BinaryTree}
 */
function buildMinimalTree(values) {
    const bst = new BinaryTree();

    function addValues(values) {
        if(values.length > 2) {
            bst.append(values[Math.floor(values.length / 2)]);
            addValues(values.slice(0, values.length / 2));
            addValues(values.slice(values.length / 2 + 1, values.length));
        } else {
            values.forEach(v => bst.append(v));
        }
    }

    addValues(values);
    return bst;
}

module.exports = buildMinimalTree;
