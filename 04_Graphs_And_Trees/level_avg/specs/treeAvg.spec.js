const levelAvg = require('../index');
const {expect} = require('chai');
const {BinaryTree} = require('../../bst');

describe('Tree Avg', () => {
   it('simple test', () => {
       const bst = new BinaryTree();
       bst.append(8);
       bst.append(5);
       bst.append(10);
       bst.append(3);
       bst.append(6);
       bst.append(10);
       bst.append(11);

       console.log(levelAvg(bst.root));
   });
});
