const isRotation = require('../index');
const {expect} = require('chai');

describe('isRotation', () => {
   it('test valid case', () => {
       expect(isRotation('waterbottle', 'erbottlewat')).to.be.true;
       expect(isRotation('abc', 'cab')).to.be.true;
   });

   it('test invalid cases', () => {
       expect(isRotation('waterbottle', 'erbottlt')).to.be.false;
       expect(isRotation(undefined, 'erbottlt')).to.be.false;
       expect(isRotation('abc', undefined)).to.be.false;
       expect(isRotation('abc', 'ert')).to.be.false;
   });
});
