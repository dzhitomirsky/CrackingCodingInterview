const {expect} = require('chai');
const LinkedListNode = require('../../linked-list');
const deleteMiddleNode = require('../index');

describe('Delete middle Node', () => {
    it('delete middle node', () => {
        const head = new LinkedListNode(1);
        head.append(2);
        head.append(3);
        deleteMiddleNode(head.next);
        expect(head.toList()).to.deep.equal([1, 3]);
    });

    it('delete first node', () => {
        const head = new LinkedListNode(1);
        head.append(2);
        head.append(3);
        deleteMiddleNode(head)
        expect(head.toList()).to.deep.equal([2, 3]);
    });
});
