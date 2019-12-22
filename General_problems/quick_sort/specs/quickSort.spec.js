const {expect} = require('chai');
const quickSort = require('../index');

describe('Quick Sort', () => {
    it('number non empty arrays', () => {
        expect(quickSort([5,4,3,2,1])).to.deep.equal([1,2,3,4,5]);
        expect(quickSort([3,2,4,1,8,9,0,1])).to.deep.equal([0,1,1,2,3,4,8,9]);
        expect(quickSort([1.5, 7, 0])).to.deep.equal([0,1.5,7]);
    });

    it('empty array', () => {
        expect(quickSort([])).to.deep.equal([]);
    });
});
