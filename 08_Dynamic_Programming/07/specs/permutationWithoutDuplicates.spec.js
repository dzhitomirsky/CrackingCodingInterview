const permutationWithoutDuplicates = require('../index');
const {expect} = require('chai');

describe('Permutation Without Duplicates', () => {
    it('3 test', () => {
        expect(permutationWithoutDuplicates("abc")).to.deep.equal(['abc', 'acb', 'bac', 'bca', 'cba', 'cab'])
    });

    it('4 test', () => {
        const rest = permutationWithoutDuplicates("abcd");
        const s = new Set(rest);
        expect(s.size).to.be.equal(24)
    });

    it('5 test', () => {
        const rest = permutationWithoutDuplicates("abcde");
        const s = new Set(rest);
        expect(s.size).to.be.equal(120)
    });

    it('6 test', () => {
        const rest = permutationWithoutDuplicates("abcdef");
        const s = new Set(rest);
        expect(s.size).to.be.equal(720)
    });
});
