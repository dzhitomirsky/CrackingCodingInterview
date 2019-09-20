const {expect} = require('chai');
const KArrayStack = require('../index');

describe('Three Stack', () => {
    it('Adding to each stack', () => {
        const stack = new KArrayStack();
        stack.push(0,0);
        stack.push(1,1);
        stack.push(2,2);

        expect(stack.stacks).to.deep.equal([
            0,
            undefined,
            undefined,
            undefined,
            undefined,
            1,
            undefined,
            undefined,
            undefined,
            undefined,
            2,
            undefined,
            undefined,
            undefined,
            undefined,
        ]);

        expect(stack.size(0)).to.be.equal(1);
        expect(stack.size(1)).to.be.equal(1);
        expect(stack.size(2)).to.be.equal(1);
    });

    it('peek', () => {
        const stack = new KArrayStack();
        stack.push(0,0);
        stack.push(1,1);
        stack.push(2,2);

        expect(stack.peek(0)).to.be.equal(0);
        expect(stack.peek(1)).to.be.equal(1);
        expect(stack.peek(2)).to.be.equal(2);
    });

    it('pop', () => {
        const stack = new KArrayStack();
        stack.push(0,0);
        stack.push(1,1);
        stack.push(2,2);

        expect(stack.pop(0)).to.be.equal(0);
        expect(stack.pop(1)).to.be.equal(1);
        expect(stack.pop(2)).to.be.equal(2);

        expect(stack.size(0)).to.be.equal(0);
        expect(stack.size(1)).to.be.equal(0);
        expect(stack.size(2)).to.be.equal(0);
    });

    it('push with resize 1st', () => {
        const stack = new KArrayStack();
        stack.push(0,0);
        stack.push(0,0);
        stack.push(0,0);
        stack.push(0,0);
        stack.push(0,0);
        stack.push(0,0);

        expect(stack.size(0)).to.be.equal(6);
        expect(stack.stacks.length).to.be.equal(30)
    });

    it('push with resize 2nd', () => {
        const stack = new KArrayStack();
        stack.push(1,1);
        stack.push(1,1);
        stack.push(1,1);
        stack.push(1,1);
        stack.push(1,1);
        stack.push(1,1);

        expect(stack.size(1)).to.be.equal(6);
        expect(stack.stacks.length).to.be.equal(30)
    });

    it('push with resize 3nd', () => {
        const stack = new KArrayStack();
        stack.push(2,2);
        stack.push(2,2);
        stack.push(2,2);
        stack.push(2,2);
        stack.push(2,2);
        stack.push(2,2);

        expect(stack.size(2)).to.be.equal(6);
        expect(stack.stacks.length).to.be.equal(30)
    });
});
