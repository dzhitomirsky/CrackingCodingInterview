const {expect} = require('chai');
const deepCopy = require('../index');

describe('deepCopy', () => {
    it('3 level deep test', () => {
        const o = {
            a: 1,
            b: "b",
            c: false,
            d: undefined,
            e: null,
            f: [1, "b", false, null, undefined, {a: 1, b:2, c: 3}],
            g: {
                a: 1,
                b: "b",
                c: false,
                d: undefined,
                e: null,
                f: [1, "b", false, null, undefined, {a: 1, b:2, c: 3}],
                g: {
                    a: 1,
                    b: "b",
                    c: false,
                    d: undefined,
                    e: null,
                    f: [1, "b", false, null, undefined, {a: 1, b:2, c: 3}]
                }
            }
        };
        expect(deepCopy(o)).to.deep.equal(o)
    });
});
