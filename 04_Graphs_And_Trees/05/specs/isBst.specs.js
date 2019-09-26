const {BinaryTree, TreeNode} = require('../../bst');
const {expect} = require('chai');
require('../index');

describe('IS BST', () => {
   it('check bst', () => {
       const bst = new BinaryTree();
       [...Array(1000).keys()]
           .forEach(() => bst.append(Math.floor(Math.random() * Math.floor(10000))));

       expect(bst.isBst()).to.be.true;
   });

   it('check invalid bst', () => {
      const bst = new BinaryTree();
      bst.append(3);
      bst.root.left = new TreeNode(10);
      bst.root.right = new TreeNode(2);
      bst.root.right = new TreeNode(25);

       expect(bst.isBst()).to.be.false;
   });
});
