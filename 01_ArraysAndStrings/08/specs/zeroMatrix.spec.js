const zeroMatrix = require('../index');
const {expect} = require('chai');

describe('zero matrix', () => {
   it('test matrix with no zeros', () => {
       const matrix = [
           [1,2,3],
           [4,5,6],
           [7,8,9],
       ];
        expect(zeroMatrix(matrix)).to.deep.equal(matrix);
   });

   it('test matrix 3x3 with 1 zero', () => {
       expect(zeroMatrix([
           [1,2,3],
           [4,0,6],
           [7,8,9],
       ])).to.deep.equal([
           [1,0,3],
           [0,0,0],
           [7,0,9],
       ]);
   });

   it('zero whole matrix', () => {
       expect(zeroMatrix([
           [0,1,2],
           [1,0,2],
           [1,2,0],
       ])).to.deep.equal([
           [0,0,0],
           [0,0,0],
           [0,0,0],
       ]);
   });
});
