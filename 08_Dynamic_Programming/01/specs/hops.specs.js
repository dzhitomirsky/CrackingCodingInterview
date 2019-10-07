const countHops = require('../index');
const {expect} = require('chai');

describe('Triple Step', () => {
   it('simple test', () => {
       expect(countHops(4)).to.be.equal(7);
       expect(countHops(3)).to.be.equal(4);
   });
});
