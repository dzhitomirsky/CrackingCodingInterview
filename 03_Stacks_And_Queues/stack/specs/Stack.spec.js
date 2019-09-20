const {expect} = require('chai');
const Stack = require('../index');

describe('Stack', () => {
    it('add values', () => {
      const st = new Stack();
      st.push(1);
      st.push(2);
      expect(st.size()).to.be.equal(2);
    });

    it('add pop peek', () => {
        const st = new Stack();
        st.push(1);
        st.push(2);
        st.push(3);
        st.push(4);
        st.push(5);

        expect(st.peek()).to.be.equal(5);
        expect(st.pop()).to.be.equal(5);
        expect(st.pop()).to.be.equal(4);
        expect(st.pop()).to.be.equal(3);

        expect(st.peek()).to.be.equal(2);
        expect(st.size()).to.be.equal(2);
        expect(st.pop()).to.be.equal(2);
        expect(st.pop()).to.be.equal(1);
        expect(st.pop()).to.be.undefined;
        expect(st.isEmpty()).to.be.true;
        expect(st.size()).to.be.equal(0);
    });
});
