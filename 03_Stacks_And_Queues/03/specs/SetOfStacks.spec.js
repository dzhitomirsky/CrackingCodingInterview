const {expect} = require('chai');
const SetOfStacks = require('../index');

describe('SetOfStacks', () => {
    it('test set of stacks', () => {
        const sos = new SetOfStacks();
        sos.push(1);
        sos.push(2);
        sos.push(3);

        expect(sos.size()).to.be.equal(3);
        expect(sos.isEmpty()).to.be.false;
        expect(sos.peek()).to.be.equal(3);
        expect(sos.stacks.size()).to.be.equal(1);

        sos.push(4);
        sos.push(5);
        sos.push(6);

        expect(sos.size()).to.be.equal(6);
        expect(sos.isEmpty()).to.be.false;
        expect(sos.peek()).to.be.equal(6);
        expect(sos.stacks.size()).to.be.equal(2);

        expect(sos.pop()).to.be.equal(6);
        expect(sos.pop()).to.be.equal(5);
        expect(sos.pop()).to.be.equal(4);

        expect(sos.size()).to.be.equal(3);
        expect(sos.isEmpty()).to.be.false;
        expect(sos.peek()).to.be.equal(3);
        expect(sos.stacks.size()).to.be.equal(1);

        expect(sos.pop()).to.be.equal(3);
        expect(sos.pop()).to.be.equal(2);
        expect(sos.pop()).to.be.equal(1);

        expect(sos.size()).to.be.equal(0);
        expect(sos.isEmpty()).to.be.true;
        expect(sos.peek()).to.be.undefined;
        expect(sos.stacks.size()).to.be.equal(1);

    });
});
