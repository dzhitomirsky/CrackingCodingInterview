const {BinaryTree} = require('../bst');
BinaryTree.prototype.getRandomNode = function (node = this.root) {
    const rand = Math.floor(Math.random() * node.size);
    const leftSize = node.left? node.left.size : 0;
    if(rand < leftSize) {
        return this.getRandomNode(node.left);
    } else if(rand === leftSize) {
        return node;
    } else {
        return this.getRandomNode(node.right);
    }
};
