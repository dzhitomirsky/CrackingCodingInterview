const fillArea = require('../index');
const {expect} = require('chai');

describe('Fill Area', () => {
    it('square test', () => {
        const image = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ];

        fillArea(image, [1, 2], 5);

        expect(image).to.deep.equal([
            [0, 0, 0, 0, 0],
            [0, 0, 5, 5, 0],
            [0, 5, 5, 5, 0],
            [0, 0, 5, 0, 0],
            [0, 0, 5, 0, 0]
        ]);
    });

    it('rect test', () => {
        const image = [
            [0, 0, 0],
            [0, 0, 1],
            [0, 1, 1],
            [0, 0, 1],
        ];

        fillArea(image, [1, 2], 5);

        expect(image).to.deep.equal([
            [0, 0, 0],
            [0, 0, 5],
            [0, 5, 5],
            [0, 0, 5],
        ]);
    });
});
