const {expect} = require('chai');
const MinStack = require('../index');

describe('MinStack', () => {
    it('test adding increasing numbers and getting min', () => {
        const mst = new MinStack();
        mst.push(1);
        mst.push(2);
        mst.push(3);

        expect(mst.peek()).to.be.equal(3);
        expect(mst.size()).to.be.equal(3);
        expect(mst.min()).to.be.equal(1);
    });

    it('add repeated numbers', () => {
        const mst = new MinStack();
        mst.push(3);
        mst.push(3);
        mst.push(2);
        mst.push(2);
        mst.push(1);
        mst.push(1);
        expect(mst.min()).to.be.equal(1);
    });
    it('test with popping', () => {
        const mst = new MinStack();
        mst.push(3);
        mst.push(3);
        mst.push(2);
        mst.push(2);
        mst.push(1);
        mst.push(1);

        mst.pop();
        expect(mst.min()).to.be.equal(1);
        mst.pop();
        expect(mst.min()).to.be.equal(2);
        mst.pop();
        expect(mst.min()).to.be.equal(2);
        mst.pop();
        expect(mst.min()).to.be.equal(3);
        mst.pop();
        expect(mst.min()).to.be.equal(3);
        mst.pop();
        expect(mst.min()).to.be.undefined;
    });
});
