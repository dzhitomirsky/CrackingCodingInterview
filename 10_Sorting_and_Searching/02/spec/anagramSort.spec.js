const {expect} = require('chai');
const anagramSort = require('../index');

describe('Anagram Sort', () => {
   it('simple test', () => {
      const strings = [
          'mama',
          'papa',
          'amam',
          'apap'
      ];
       expect(anagramSort(strings)).to.deep.equal([ 'mama', 'amam', 'papa', 'apap' ])
   });
});
