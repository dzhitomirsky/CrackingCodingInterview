const {expect} = require('chai');
const mergeSort = require('../index');

describe('Merge Sort', () => {
   it('number non empty arrays', () => {
      expect(mergeSort([5,4,3,2,1])).to.deep.equal([1,2,3,4,5]);
      expect(mergeSort([3,2,4,1,8,9,0,1])).to.deep.equal([0,1,1,2,3,4,8,9]);
      expect(mergeSort([1.5, 7, 0])).to.deep.equal([0,1.5,7]);
   });

   it('empty array', () => {
       expect(mergeSort([])).to.deep.equal([]);
   });
});
