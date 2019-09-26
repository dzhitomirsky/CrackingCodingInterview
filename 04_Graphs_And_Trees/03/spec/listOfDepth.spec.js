const {expect} = require('chai');
const {BinaryTree} = require('../../bst');
require('../index');

describe('Minimal Tree', () => {
    it('one line test', () => {
        const bst = new BinaryTree();
        bst.append(1);
        bst.append(2);
        bst.append(3);
        bst.append(4);
        bst.append(5);

        const result = bst.listOfDepth();

        expect(Object.keys(result).length).to.be.equal(5);
        Object.keys(result).forEach(level => {
            expect(result[level].length).to.be.equal(1);
            expect(result[level][0]).to.be.equal(parseInt(level));
        })
    });

    it('hierarchy test', () => {
        const bst = new BinaryTree();
        bst.append(3);
        bst.append(2);
        bst.append(4);
        bst.append(1);
        bst.append(5);

        const result = bst.listOfDepth();

        expect(Object.keys(result).length).to.be.equal(3);
        expect(result[1]).to.deep.equal([3]);
        expect(result[2]).to.deep.equal([2,4]);
        expect(result[3]).to.deep.equal([1,5])
    });
});
