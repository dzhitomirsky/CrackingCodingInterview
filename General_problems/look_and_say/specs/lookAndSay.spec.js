const lookAndSay = require('../index');
const {expect} = require('chai');

describe('look and say', () => {
    it('1', () => {
        expect(lookAndSay(1)).to.be.equal('1');
    });

    it('2', () => {
        expect(lookAndSay(2)).to.be.equal('11');
    });

    it('3', () => {
        expect(lookAndSay(3)).to.be.equal('21');
    });

    it('4', () => {
        expect(lookAndSay(4)).to.be.equal('1211');
    });

    it('5', () => {
        expect(lookAndSay(5)).to.be.equal('111221');
    });

    it('10', () => {
        expect(lookAndSay(10)).to.be.equal('13211311123113112211');
    });
});

