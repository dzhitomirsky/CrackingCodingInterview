const {expect} = require('chai');
const LinkedListNode = require('../../linked-list');
const {
    removeDuplicateWithCache,
    removeDuplicatedWithNoCache
} = require('../index');

describe('Remove duplicated', () => {
    describe('Remove duplicated with cache', () => {
        it('no duplicates', () => {
            const head = new LinkedListNode(1);
            head.append(2);
            head.append(3);
            removeDuplicateWithCache(head);
            expect(head.toList()).to.deep.equal([1,2,3]);
        });

        it('duplicates in the middle', () => {
            const head = new LinkedListNode(1);
            head.append(2);
            head.append(2);
            head.append(3);
            removeDuplicateWithCache(head);
            expect(head.toList()).to.deep.equal([1,2,3]);
        });

        it('duplicates in the end', () => {
            const head = new LinkedListNode(1);
            head.append(2);
            head.append(3);
            head.append(3);
            removeDuplicateWithCache(head);
            expect(head.toList()).to.deep.equal([1,2,3]);
        });

        it('all duplicates', () => {
            const head = new LinkedListNode(1);
            head.append(1);
            head.append(1);
            head.append(1);
            removeDuplicateWithCache(head);
            expect(head.toList()).to.deep.equal([1]);
        });

        it('one node', () => {
            const head = new LinkedListNode(1);
            removeDuplicateWithCache(head);
            expect(head.toList()).to.deep.equal([1]);
        });
    });

    it('Remove duplicated with no cache', () => {
        it('no duplicates', () => {
            const head = new LinkedListNode(1);
            head.append(2);
            head.append(3);
            removeDuplicatedWithNoCache(head);
            expect(head.toList()).to.deep.equal([1,2,3]);
        });

        it('duplicates in the middle', () => {
            const head = new LinkedListNode(1);
            head.append(2);
            head.append(2);
            head.append(3);
            removeDuplicatedWithNoCache(head);
            expect(head.toList()).to.deep.equal([1,2,3]);
        });

        it('duplicates in the end', () => {
            const head = new LinkedListNode(1);
            head.append(2);
            head.append(3);
            head.append(3);
            removeDuplicatedWithNoCache(head);
            expect(head.toList()).to.deep.equal([1,2,3]);
        });

        it('all duplicates', () => {
            const head = new LinkedListNode(1);
            head.append(1);
            head.append(1);
            head.append(1);
            removeDuplicatedWithNoCache(head);
            expect(head.toList()).to.deep.equal([1]);
        });

        it('one node', () => {
            const head = new LinkedListNode(1);
            removeDuplicatedWithNoCache(head);
            expect(head.toList()).to.deep.equal([1]);
        });
    });
});
