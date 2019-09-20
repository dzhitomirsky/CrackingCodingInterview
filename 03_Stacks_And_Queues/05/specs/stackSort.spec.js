const {expect} = require('chai');

const Stack = require('../index');

describe('Sort Stack', () => {
    it('add values and sort', () => {
        const st = new Stack();
        for (let i = 0; i < 100; i++) {
            st.push(Math.floor(Math.random() * Math.floor(1000)))
        }
        st.sort();
        let prev = Number.MIN_SAFE_INTEGER;
        while (!st.isEmpty()) {
            const item = st.pop();
            // at lest is 'greater or equal'
            expect(item).to.be.at.least(prev);
            prev = item;
        }
    });
});
