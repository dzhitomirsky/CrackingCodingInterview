const {isUnique} = require('../index');
const {expect} = require('chai');

describe('Is Unique', () => {
    it('test correct option', () => {
        expect(isUnique('abc')).to.be.true;
    });

    it("incorrect input", () => {
        expect(isUnique('abb')).to.be.false;
    })
});
