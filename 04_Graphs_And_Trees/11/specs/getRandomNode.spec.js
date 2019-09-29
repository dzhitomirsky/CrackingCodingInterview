const {BinaryTree} = require('../../bst');
require('../index');
const {expect} = require('chai');

describe('Get random node', () => {
   it('simple test', () => {
       const bst = new BinaryTree();
       [1,2,3,4,5].forEach(v => bst.append(v));
       expect(bst.getRandomNode().value).not.to.be.undefined;
   });

   it('random test', () => {
       const bst = new BinaryTree();
       [...Array(1000).keys()]
           .forEach(() =>  bst.append(Math.floor(Math.random() * Math.floor(10000))));
       [...Array(500).keys()].forEach(() => {
           expect(bst.getRandomNode()).not.to.be.undefined;
       });
   });
});
