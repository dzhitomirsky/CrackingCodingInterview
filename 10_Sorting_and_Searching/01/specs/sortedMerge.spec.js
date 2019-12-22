const {expect} = require('chai');
const sortedMerge = require('../index');

describe('Sorted Merge', () => {
   it('simple test', () => {
      let a = [6,7,8,9,10, undefined, undefined, undefined, undefined, undefined]

      let b = [1,2,3,4,5];
      sortedMerge(a, b);
      expect(a).to.deep.equal([1,2,3,4,5,6,7,8,9,10])
   });
});
