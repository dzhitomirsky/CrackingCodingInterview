const {expect} = require('chai');
const sqrt = require('../index');

describe('Squre root', () => {
    it('sqrt2', () => {
        expect(Math.pow(sqrt(2), 2) - 2).to.be.below(0.001);
    });
});
