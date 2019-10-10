const multiply = require('../index');
const {expect} = require('chai');

describe('Recursive multiply', () => {
    it('simple test', () => {
        expect(multiply(2, 7)).to.be.equal(14);
    });

    it('zero test', () => {
        expect(multiply(5, 0)).to.be.equal(0)
    });

    it('big numbers test', () => {
        expect(multiply(751, 141)).to.be.equal(751 * 141)
    })
});
