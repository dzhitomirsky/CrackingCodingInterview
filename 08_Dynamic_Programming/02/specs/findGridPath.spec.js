const {expect} = require('chai');
const findGridPath = require('../index');

describe('findGridPath', () => {
    it('square one way path', () => {
        const grid = [
            [1, 1, 1],
            [1, 0, 0],
            [1, 1, 1,]
        ];
        expect(findGridPath(grid)).to.deep.equal([ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ] ])
    });

    it('rect with one way path', () => {
        const grid = [
            [1, 1, 1],
            [0, 0, 1],
            [1, 0, 1,],
            [1, 1, 1,],
        ];
        expect(findGridPath(grid)).to.deep.equal([ [ 0, 0 ], [ 0, 1 ], [ 0, 2 ], [ 1, 2 ], [ 2, 2 ], [ 3, 2 ] ])
    });

});
