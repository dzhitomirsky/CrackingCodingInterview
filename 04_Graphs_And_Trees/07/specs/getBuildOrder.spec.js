const {expect} = require('chai');
const getBuildOrder = require('../index');

describe('Find Build Order', () => {
   it('valid test', () => {
      const result = getBuildOrder(
          ['a', 'b', 'c', 'd', 'e', 'f'],
          [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']]
      );

       expect(result).to.deep.equal([ 'e', 'f', 'a', 'b', 'd', 'c' ]);
   });

   it('invalid test', () => {
       expect(() => getBuildOrder(
           ['a', 'b', 'c'],
           [['b', 'a'], ['c', 'b'], ['a', 'c']]
       )).to.throw("Can't calculate build order.");
   });
});
