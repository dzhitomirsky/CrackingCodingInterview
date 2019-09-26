const {expect} = require('chai');
const buildMinimalTree = require('../index');

describe('Minimal Tree', () => {
    it('simple test', () => {
        const bst = buildMinimalTree([1,2,3,4,5,6,7,8,9, 10]);
        const [maxDepth, minDepth] = bst.maxAndMinDepth();
        expect(maxDepth - minDepth).to.be.at.most(1);
    });

    it('random test', () => {
        const s = new Set();
        [...Array(1000).keys()]
            .forEach(() => s.add(Math.floor(Math.random() * Math.floor(10000))));
        const bst = buildMinimalTree([...s].sort((a,b,) => a - b));
        const [maxDepth, minDepth] = bst.maxAndMinDepth();
        expect(maxDepth - minDepth).to.be.at.most(1);
    })
});
