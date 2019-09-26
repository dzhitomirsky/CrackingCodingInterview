const {BinaryTree} = require('../bst');

/**
 * Check if BST is balanced
 *
 * @returns {boolean}
 */
BinaryTree.prototype.isBalanced = function () {
    let isBalanced = true;

    traverse(this.root);

    function traverse(node) {
        if(!node) {
            return
        }

        if(Math.abs(getNodeHeight(node.left) - getNodeHeight(node.right)) > 1) {
            isBalanced = false;
            return;
        }

        traverse(node.left);
        traverse(node.right);
    }

    function getNodeHeight(node, height = 0) {
        if(!node) {
            return height
        }

        return Math.max(
            getNodeHeight(node.left, height + 1),
            getNodeHeight(node.right, height + 1)
        );
    }

    return isBalanced;
};
