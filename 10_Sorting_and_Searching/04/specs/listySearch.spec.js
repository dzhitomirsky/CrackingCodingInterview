const {expect} = require('chai');
const listySearch = require('../index');
const Listy = require('../Listy');

describe('Listy Search', () => {
    it('simple test', () => {
        expect(listySearch(new Listy([1, 2, 3, 4, 5, 6, 7, 8]), 5)).to.be.equal(4);
        expect(listySearch(new Listy([1, 2, 3, 4, 5, 6, 7, 8]), 25)).to.be.equal(-1);
    });

    it('1 item array', () => {
        expect(listySearch(new Listy([1]), 1)).to.be.equal(0);
        expect(listySearch(new Listy([1]), 0)).to.be.equal(-1);
    });
});
