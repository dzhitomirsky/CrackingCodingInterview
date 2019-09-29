const {expect} = require('chai');
const {BinaryTree} = require('../../bst');
const getCommonAncestor = require('../index');

describe('getCommonAncestor', () => {
   it('algorithm test', () => {
       const bst = new BinaryTree();
       bst.append(3);
       bst.append(2);
       bst.append(5);
       bst.append(4);
       bst.append(1);

       expect(getCommonAncestor(bst.root.left.left, bst.root.right).value).to.be.equal(bst.root.value);
   })
});
