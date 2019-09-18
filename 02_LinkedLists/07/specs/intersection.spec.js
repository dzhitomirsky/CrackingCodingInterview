const {expect} = require('chai');
const LinkedListNode = require('../../linked-list');
const intersection = require('../index');


describe('intersections', () => {
   it('test intersected lists', () => {
       const list1 = new LinkedListNode(1);
       list1.append(2);
       list1.append(3);

       const list2 = new LinkedListNode(4);
       list2.append(5);
       list2.next.next = list1.next;

       expect(intersection(list1, list2).value).to.be.equal(2)
   });

   it('test separate lists', () => {
       const list1 = new LinkedListNode(1);
       list1.append(2);
       list1.append(3);

       const list2 = new LinkedListNode(4);
       list2.append(5);

       expect(intersection(list1, list2)).to.be.undefined;
   });
});
