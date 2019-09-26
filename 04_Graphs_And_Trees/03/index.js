const {BinaryTree} = require('../bst');

/**
 * Get object with list of values at each level (level is object key)
 *
 * @return {Object}
 */
BinaryTree.prototype.listOfDepth = function() {
  const depth = {};

  function traverse(node, height) {
      if(!node) {
          return;
      }
      depth[height] = [...(depth[height] || []), node.value];
      traverse(node.left, height + 1);
      traverse(node.right, height + 1);
  }

  traverse(this.root, 1);
  return depth;
};
