const {expect} = require('chai');
const {BinaryTree, TreeNode} = require('../../bst');
const findSuccessor = require('../index');

describe('Find Successor', () => {
   it('no successor', () => {
     const bst = new BinaryTree();
     [1,2,3,4,5].forEach(v => bst.append(v));
     let node = bst.root;
     while (node.right) {
         node = node.right;
     }
     expect(findSuccessor(node)).to.be.undefined;
   });

   it('single tree', () => {
       expect(findSuccessor(new TreeNode(1))).to.be.undefined;
   });

   it('simple test', () => {
       const bst = new BinaryTree();
       bst.append(3);
       bst.append(4);
       bst.append(2);

       expect(findSuccessor(bst.root).value).to.be.equal(4);
       expect(findSuccessor(bst.root.left).value).to.be.equal(3);
       expect(findSuccessor(bst.root.right)).to.be.undefined;
   });

   it('randomized test', () => {
       const bst = new BinaryTree();
       const values = new Set();
       [...Array(1000).keys()]
           .forEach(() =>  values.add(Math.floor(Math.random() * Math.floor(10000))));

       values.forEach(v => bst.append(v));

       const sortedValues = [...values].sort((a,b) => a -b);
       for(let i = 200; i < 500; i++) {
           const node = bst.search(sortedValues[i]);
           expect(findSuccessor(node).value).to.be.equal(sortedValues[i + 1]);
       }
   });
});
