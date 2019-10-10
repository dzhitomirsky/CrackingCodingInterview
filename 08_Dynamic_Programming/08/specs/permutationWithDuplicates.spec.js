const permutationWithoutDuplicates = require('../index');
const {expect} = require('chai');

describe('Permutation With Duplicates', () => {
    it('3 test', () => {
        expect(permutationWithoutDuplicates("aac")).to.deep.equal(['aac', 'aca', 'caa']);
    });
});
