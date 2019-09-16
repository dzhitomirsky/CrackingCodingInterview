const rotate = require('../index');
const {expect} = require('chai');

describe('rotate', () => {
    it('test 3x3 rotation', () => {
        expect(rotate([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ])).to.deep.equal([
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3]
        ]);
    })
});
