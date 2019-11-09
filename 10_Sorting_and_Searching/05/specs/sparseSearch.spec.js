const {expect} = require('chai');
const sparseSearch =  require('../index');

describe('Sparse Search', () => {
   it('example test', () => {
       expect(sparseSearch(['at', '','','', 'ball','', '', 'car', '', '', 'dad', '', ''], 'ball')).to.deepEqual(4)
   });
});
