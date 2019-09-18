const LinkedListNode = require('../LinkedListNode');
const {expect} = require('chai');

describe('Linked List data structure', () => {
    it('create node', () => {
        const node = new LinkedListNode(1);
        expect(node.value).to.be.equal(1);
        expect(node.next).to.be.undefined;
    });

    it('append nodes', () => {
        const node = new LinkedListNode(1);
        node.append(2);
        node.append(3);
        expect(node.value).to.be.equal(1);
        expect(node.next.value).to.be.equal(2);
        expect(node.next.next.value).to.be.equal(3);
    });

    it('to list', () => {
        const node = new LinkedListNode(1);
        node.append(2);
        node.append(3);
        expect(node.toList()).to.deep.equal([1,2,3]);
    });
});
