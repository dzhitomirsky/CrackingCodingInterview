const {isUniqueWithNoAdditionDataStructures} = require('../index');
const {expect} = require('chai');

describe('Is Unique With no additional data structures', () => {
    it('test correct option', () => {
        expect(isUniqueWithNoAdditionDataStructures('abc')).to.be.true;
    });

    it("incorrect input", () => {
        expect(isUniqueWithNoAdditionDataStructures('abb')).to.be.false;
    })
});
