const {expect} = require('chai');
const findMagicIndex = require('../index');

describe('findMagicIndex', () => {
   it('odd array test', () => {
       expect(findMagicIndex([-1, 1, 7 ,8 ,10])).to.be.equal(1);
   });

    it('even array test', () => {
        expect(findMagicIndex([-1, 1, 7 ,8])).to.be.equal(1);
    });
});
