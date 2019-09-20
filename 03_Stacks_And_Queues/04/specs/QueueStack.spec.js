const {expect} = require('chai');
const QueueStack = require('../index');

describe('QueueStack', () => {
    it('add values', () => {
        const q = new QueueStack();

        expect(q.isEmpty()).to.be.true;
        expect(q.size()).to.be.equal(0);

        q.enqueue(1);
        expect(q.size()).to.be.equal(1);

        q.enqueue(2);
        expect(q.size()).to.be.equal(2);

        q.enqueue(3);
        expect(q.size()).to.be.equal(3);

        expect(q.getHead()).to.be.equal(1);
        expect(q.getTail()).to.be.equal(3);
        expect(q.isEmpty()).to.be.false;
    });

    it('remove value', () => {
        const q = new QueueStack();
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);

        expect(q.dequeue()).to.be.equal(1);
        expect(q.getHead()).to.be.equal(2);
        expect(q.getTail()).to.be.equal(3);
        expect(q.isEmpty()).to.be.false;

        expect(q.dequeue()).to.be.equal(2);
        expect(q.getHead()).to.be.equal(3);
        expect(q.getTail()).to.be.equal(3);
        expect(q.isEmpty()).to.be.false;

        expect(q.dequeue()).to.be.equal(3);
        expect(q.getHead()).to.be.undefined;
        expect(q.getTail()).to.be.undefined;
        expect(q.isEmpty()).to.be.true;
    });
});
