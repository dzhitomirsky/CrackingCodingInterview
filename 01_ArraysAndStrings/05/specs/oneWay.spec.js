const {expect} = require('chai');
const oneWay = require('../index');

describe('oneWay', () => {
    it('test equal strings', () => {
        expect(oneWay('a', 'a')).to.be.true;
        expect(oneWay('abc', 'abc')).to.be.true;
        expect(oneWay('', '')).to.be.true;
        expect(oneWay('abc', 'eee')).to.be.false;
    });

    it('check replace', () => {
        expect(oneWay('a', 'b')).to.be.true;
        expect(oneWay('abc', 'abd')).to.be.true;
        expect(oneWay('abc', 'ebc')).to.be.true;
        expect(oneWay('abc', 'acc')).to.be.true;
    });

    it('check addition', () => {
        expect(oneWay('', 'a')).to.be.true;
        expect(oneWay('a', 'ab')).to.be.true;
        expect(oneWay('a', 'ba')).to.be.true;
        expect(oneWay('ab', 'abc')).to.be.true;
        expect(oneWay('ab', 'cab')).to.be.true;
        expect(oneWay('ab', 'acb')).to.be.true;
    });

    it('check deletion', () => {
        expect(oneWay('a', '')).to.be.true;
        expect(oneWay('abc', 'bc')).to.be.true;
        expect(oneWay('abc', 'ab')).to.be.true;
        expect(oneWay('abc', 'ac')).to.be.true;
    });

    it('check invalid inputs', () => {
        expect(oneWay('a', 'abc')).to.be.false;
        expect(oneWay('abc', 'ccc')).to.be.false;
        expect(oneWay('abc', 'abccc')).to.be.false;
    });
});
