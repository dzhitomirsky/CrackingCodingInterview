const {expect} = require('chai');
const LinkedListNode = require('../../linked-list');
const kThFromEnd = require('../index');

describe('get kth from end', () => {
  it('valid case', () => {
      const head = new LinkedListNode(1);
      head.append(2);
      head.append(3);

      expect(kThFromEnd(head, 1)).to.be.equal(3);
      expect(kThFromEnd(head, 2)).to.be.equal(2);
      expect(kThFromEnd(head, 3)).to.be.equal(1);
  });

  it('invalid case', () => {
      const head = new LinkedListNode(1);
      head.append(2);
      head.append(3);
      expect(() => kThFromEnd(head, 0)).to.throw(Error);
      expect(() => kThFromEnd(head, -1)).to.throw(Error);
      expect(() => kThFromEnd(head, 4)).to.throw(Error);
  });
});
