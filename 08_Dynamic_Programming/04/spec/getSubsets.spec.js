const {expect} = require('chai');
const getAllSubsets = require('../index');

describe('getAllSubsets', () => {
   it('2 test', () => {
       expect(getAllSubsets([1,2])).to.deep.equal([ [], [ 2 ], [ 1 ], [ 2, 1 ] ]);
   });
});
