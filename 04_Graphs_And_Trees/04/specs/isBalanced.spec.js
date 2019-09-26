const {expect} = require('chai');
const {BinaryTree} = require('../../bst');
require('../index');
const buildMinimalTree = require('../../02');

describe('Is balanced', () => {
    it('balanced simple tree', () => {
        const bst = new BinaryTree();
        bst.append(3);
        bst.append(1);
        bst.append(4);

        expect(bst.isBalanced()).to.be.true;
    });

    it('imbalanced simple tree', () => {
        const bst = new BinaryTree();
        bst.append(1);
        bst.append(3);
        bst.append(4);

        expect(bst.isBalanced()).to.be.false;
    });

    it('imbalanced tree', () => {
        const bst = new BinaryTree();
        bst.append(5);

        bst.append(2);
        bst.append(9);

        bst.append(4);
        bst.append(1);

        bst.append(7);
        bst.append(11);

        bst.append(12);

        expect(bst.isBalanced()).to.be.true;
    });

    it('large balanced tree', () => {
        const s = new Set();
        [...Array(1000).keys()]
            .forEach(() => s.add(Math.floor(Math.random() * Math.floor(10000))));
        const bst = buildMinimalTree([...s].sort((a,b,) => a - b));
        expect(bst.isBalanced()).to.be.true;
    });

    it('large imbalanced tree', () => {
        const bst = new BinaryTree();
        [...Array(1000).keys()]
            .forEach(() => bst.append(Math.floor(Math.random() * Math.floor(10000))));

        expect(bst.isBalanced()).to.be.false;
    })
});
