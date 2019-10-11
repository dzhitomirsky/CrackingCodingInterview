const countWays = require('../index');
const {expect} = require('chai');

describe('Coins', () => {
    it('5 test', () => {
        expect(countWays(5)).to.be.equal(2);
    });

    it('10 test', () => {
        expect(countWays(10)).to.be.equal(4);
    });

    it('1 test', () => {
        expect(countWays(1)).to.be.equal(1);
    });
});
