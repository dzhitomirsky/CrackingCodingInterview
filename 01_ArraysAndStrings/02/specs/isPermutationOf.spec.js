const {expect} = require('chai');
const isPermutationOf = require('../index');

describe('isPermutationOf', () => {
    it('check string of unequal sizes', () => {
        expect(isPermutationOf('a', 'bcd')).to.be.false;
    });

    it('test valid case', () => {
        expect(isPermutationOf('abc', 'cba')).to.be.true;
        expect(isPermutationOf('a', 'a')).to.be.true;
        expect(isPermutationOf('abbbc', 'babcb')).to.be.true;
    });

    it('test invalid case', () => {
        expect(isPermutationOf('abc', 'cbd')).to.be.false;
    });

    it('check undefined inputs', () => {
        expect(isPermutationOf(undefined, undefined)).to.be.false;
    });

    it('check empty inputs', () => {
        expect(isPermutationOf('', '')).to.be.false;
    });
});
