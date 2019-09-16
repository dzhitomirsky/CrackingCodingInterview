const {expect} = require('chai');
const compress = require('../index');

describe('commpress', () => {
   it('test compressable', () => {
       expect(compress('aaeeebbcc')).to.be.equal('a2e3b2c2');
   });

   it('test not comressable', () => {
       expect(compress('a')).to.be.equal('a');
       expect(compress('aa')).to.be.equal('aa');
       expect(compress('aabb')).to.be.equal('aabb');
       expect(compress('')).to.be.equal('');
   })
});
