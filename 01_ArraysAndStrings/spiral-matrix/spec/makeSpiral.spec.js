const makeSpiral = require('../index');
const {expect} = require('chai');

describe('makeSpiral', () => {
    it('test square matrix', () => {
        const m = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        expect(makeSpiral(m)).to.deep.equal([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    it('test rect matrix', () => {
        const m = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
        ];
        expect(makeSpiral(m)).to.deep.equal([1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]);
    });

    it('test 2 vectors', () => {
        const m = [
            [1, 2],
            [3, 4],
            [5, 6]
        ];

        expect(makeSpiral(m)).to.deep.equal([1, 2, 4, 6, 5, 3]);
    });

    it('test vertical vector', () => {
        const m = [
            [1],
            [2],
            [3]
        ];

        expect(makeSpiral(m)).to.deep.equal([1, 2, 3]);
    });

    it('test horizontal vector', () => {
        const m = [[1, 2, 3]];
        expect(makeSpiral(m)).to.deep.equal([1, 2, 3]);
    });

    it('3x5 test', () => {
        const m = [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19, 20, 21],
        ];

        expect(makeSpiral(m)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 14, 21, 20, 19, 18, 17, 16, 15, 8, 9, 10, 11, 12, 13]);
    });
});
