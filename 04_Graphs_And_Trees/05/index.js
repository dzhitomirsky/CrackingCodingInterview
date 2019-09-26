const {BinaryTree} = require('../bst');

BinaryTree.prototype.isBst = function () {
    let isBst = true;
    this.traverseInOrder(node => {
        if (node.right) {
            this.traverseInOrder(rightNode => {
                if (rightNode.value < node.value) {
                    isBst = false;
                }
            }, node.right);
        }

        if (node.left) {
            this.traverseInOrder(leftNode => {
                if (leftNode.value > node.value) {
                    isBst = false;
                }
            }, node.left);
        }
    });
    return isBst;
};
