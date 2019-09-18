const {expect} = require('chai');
const LinkedListNode = require('../../linked-list');
const partition = require('../index');

describe('Partition', () => {
   it('number in list', () => {
       let head = new LinkedListNode(1);
       head.append(5);
       head.append(2);
       head.append(3);
       head.append(6);
       head.append(4);

       partition(head, 3).print()
   })
});
