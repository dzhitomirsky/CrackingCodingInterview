const URLify = require('../index');
const {expect} = require('chai');

describe('URLify', () => {
   it('test input', () => {
      expect(URLify('Mr John Smith ', 13)).to.be.equal('Mr%20John%20Smith');
   });
});
