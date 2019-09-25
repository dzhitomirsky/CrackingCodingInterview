const {expect} = require('chai');
const {Node} = require('../../graph');
const findRoute = require('../index');

describe('Determine if there is a route between 2 nodes', () => {
   it('test connected', () => {
       let n11 = new Node(1);

       let n12 = new Node(2);
       let n13 = new Node(3);
       let n14 = new Node(4);
       let n15 = new Node(5);
       let n16 = new Node(6);

       let n26 = new Node(12);

       n11.relatives.push(n12, n13, n14, n15, n16);
       n16.relatives.push(n26);

       let n21 = new Node(7);

       let n22 = new Node(8);
       let n23 = new Node(9);
       let n24 = new Node(10);
       let n25 = new Node(11);

       n26.relatives.push(n21);
       n21.relatives.push(n22, n23, n24, n25);

       expect(findRoute(n11, n21)).to.be.true;
   });

    it('test disconnected', () => {
        let n11 = new Node(1);

        let n12 = new Node(2);
        let n13 = new Node(3);
        let n14 = new Node(4);
        let n15 = new Node(5);
        let n16 = new Node(6);

        let n26 = new Node(12);

        n11.relatives.push(n12, n13, n14, n15, n16);
        n16.relatives.push(n26);

        let n21 = new Node(7);

        let n22 = new Node(8);
        let n23 = new Node(9);
        let n24 = new Node(10);
        let n25 = new Node(11);

        n26.relatives.push(n21);
        n21.relatives.push(n22, n23, n24, n25);

        expect(findRoute(n12, n11)).to.be.false;
    });
});
