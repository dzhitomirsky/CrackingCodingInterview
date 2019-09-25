const {expect} = require('chai');
const BinaryTree = require('../index');

describe('BST', () => {
    it('append & traverse in order', () => {
        const bst = new BinaryTree();
        bst.append(3);
        bst.append(1);
        bst.append(5);
        bst.append(4);
        bst.append(2);
        const res = [];
        bst.traverseInOrder((node) => res.push(node.value));
        expect(res).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('append & traverse in reversed order', () => {
        const bst = new BinaryTree();
        bst.append(3);
        bst.append(1);
        bst.append(5);
        bst.append(4);
        bst.append(2);
        const res = [];
        bst.traverseReversedOrder( (node) => res.push(node.value));
        expect(res).to.deep.equal([5, 4, 3, 2, 1]);
    });

    it('append & search', () => {
        const bst = new BinaryTree();
        bst.append(3);
        bst.append(1);
        bst.append(5);
        bst.append(4);
        bst.append(2);

        expect(bst.search(0)).to.be.undefined;
        expect(bst.search(2).value).to.equal(2);
        expect(bst.search(5).value).to.equal(5);
        expect(bst.search(-10)).to.be.undefined;
    });

    it('get min', () => {
        const bst = new BinaryTree();
        bst.append(3);
        bst.append(1);
        bst.append(5);
        bst.append(4);
        bst.append(2);

        expect(bst.min()).to.be.equal(1);
    });

    it('delete', () => {
        const bst = new BinaryTree();
        bst.append(3);
        bst.append(1);
        bst.append(5);
        bst.append(4);
        bst.append(2);

        let res = [];

        bst.delete(5);
        bst.traverseInOrder( node => res.push(node.value));
        expect(res).to.deep.equal([1,2,3,4]);
        res = [];

        bst.delete(2);
        bst.traverseInOrder( node => res.push(node.value));
        expect(res).to.deep.equal([1,3,4]);
        res = [];

        bst.delete(3);
        bst.traverseInOrder( node => res.push(node.value));
        expect(res).to.deep.equal([1, 4]);
        res = [];

        bst.delete(4);
        bst.traverseInOrder( node => res.push(node.value));
        expect(res).to.deep.equal([1]);
        res = [];

        bst.delete(1);
        bst.traverseInOrder( node => res.push(node.value));
        expect(res).to.deep.equal([]);
        res = [];
    });
});
