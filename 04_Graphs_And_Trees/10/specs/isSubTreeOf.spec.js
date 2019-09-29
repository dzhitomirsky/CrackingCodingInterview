const {BinaryTree} = require('../../bst');
const {expect} = require('chai');
const isSubTreeOf = require('../index');

describe('isSubTreeOf', () => {
    it('not intersecting test', () => {
        const t1 = new BinaryTree();
        const t2 = new BinaryTree();

        [1, 2, 3, 4, 5].forEach(n => t1.append(n));
        [6, 7, 8, 9, 0].forEach(n => t2.append(n));

        expect(isSubTreeOf(t1, t2)).to.be.false;
    });

    it('invalid intersecting test', () => {
        const t1 = new BinaryTree();
        const t2 = new BinaryTree();

        [1, 2, 3, 4, 5].forEach(n => t1.append(n));
        [5, 6, 7, 8, 9, 0].forEach(n => t2.append(n));

        expect(isSubTreeOf(t1, t2)).to.be.false;
    });

    it('valid test', () => {
        const t1 = new BinaryTree();
        const t2 = new BinaryTree();

        [1, 2, 3, 4, 5].forEach(n => t1.append(n));
        [-1, -2, -3, -4, 1, 2, 3, 4, 5].forEach(n => t2.append(n));
        expect(isSubTreeOf(t2, t1)).to.be.true;

    });
});
