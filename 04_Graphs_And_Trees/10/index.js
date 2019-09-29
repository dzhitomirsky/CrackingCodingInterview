/**
 * Check whether root2 is subtree of root2
 *
 * @param tree1 {BinaryTree}
 * @param tree2 {BinaryTree}
 * @return {boolean}
 */
function isSubTreeOf(tree1, tree2) {
    const searchPoint = tree1.search(tree2.root.value);
    if(!searchPoint){
        return false;
    }
    return treesAreEqual(searchPoint, tree2.root);
}

/**
 * Check if trees are equal
 *
 * @param node1 {TreeNode}
 * @param node2 {TreeNode}
 */
function treesAreEqual(node1, node2) {
   if(!node1 && !node2) {
       return true
   } else if(node2 && !node1) {
       return false
   } else if(node1 && !node2) {
       return false
   } else if(node1.value === node2.value) {
       return treesAreEqual(node1.right, node2.right) && treesAreEqual(node1.left, node2.left);
   } else {
       return false;
   }
}

module.exports = isSubTreeOf;
