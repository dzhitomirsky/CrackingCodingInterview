const {expect} = require('chai');
const palindromePermutation = require('../index');

describe('palindromePermutation', () => {
    it('valid input', () => {
        expect(palindromePermutation('Tact      Coa%%%%%')).to.be.true;
        expect(palindromePermutation('ab    ab     aa 777 %%%%')).to.be.true;
    });

    it('invalid input', () => {
        expect(palindromePermutation('aba777bc%%%%p    ')).to.be.false;
    });
});
