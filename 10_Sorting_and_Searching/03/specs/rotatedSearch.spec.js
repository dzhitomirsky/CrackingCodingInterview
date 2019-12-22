const {expect} = require('chai');
const rotatedSearch = require('../index');

describe('Rotated Search', () => {
    it('book test', () => {
        expect(rotatedSearch([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5)).to.be.equal(8);
        expect(rotatedSearch([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 100)).to.be.equal(-1);
    });

    it('sorted array test', () => {
        expect(rotatedSearch([1, 2, 3, 4, 5, 6, 7, 8], 5)).to.be.equal(4);
        expect(rotatedSearch([1, 2, 3, 4, 5, 6, 7, 8], 25)).to.be.equal(-1);
    });

    it('1 item array', () => {
        expect(rotatedSearch([1], 1)).to.be.equal(0);
        expect(rotatedSearch([1], 0)).to.be.equal(-1);
    });
});
