/**
 * Find successor of the passed node
 *
 * @param node {TreeNode}
 */
function findSuccessor(node) {
   if(node.right) {
       return getLeftMostNode(node.right)
   } else {
        let pointer = node;
        let parent = pointer.parent;
        while (parent && parent.right === pointer) {
            pointer = parent;
            parent = parent.parent;
        }
        return parent;
   }
}

/**
 * Get left most node of the tree, represented by {@param root}
 *
 * @param root {TreeNode}
 * @returns {TreeNode}
 */
function getLeftMostNode(root) {
    let pointer = root;
    while(pointer.left) {
        pointer = pointer.left;
    }
    return pointer;
}

module.exports = findSuccessor;
