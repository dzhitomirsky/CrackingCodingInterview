const {expect} = require('chai');
const {binarySearch, binarySearchRecursive} = require('../index');

describe('Binary Search', () => {
    describe('Non recursive', () => {
        it('Search for existing element', () => {
           expect(binarySearch([1,2,3,4,5,6], 2)).to.be.equal(1);
        });
        it('Search for non existing element', () => {
            expect(binarySearch([1,2,3,4,5,6], 10)).to.be.equal(-1);
        });
    });

    describe('Recursive', () => {
        it('Search for existing element', () => {
            expect(binarySearchRecursive([1,2,3,4,5,6], 2)).to.be.equal(1);
        });
        it('Search for non existing element', () => {
            expect(binarySearchRecursive([1,2,3,4,5,6], 10)).to.be.equal(-1);
        });
    });
});
