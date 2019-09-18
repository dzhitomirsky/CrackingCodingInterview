const {expect} = require('chai');
const LinkedListNode = require('../../linked-list');
const isPalindrome = require('../index');

describe('isPalidnrome', () => {
   it('palidrome', () => {
       const list = new LinkedListNode(1);
       list.append(2);
       list.append(2);
       list.append(1);
       expect(isPalindrome(list)).to.be.true;
   });

   it('not palindrome', () => {
       const list = new LinkedListNode(1);
       list.append(2);
       list.append(3);
       list.append(4);
       expect(isPalindrome(list)).to.be.false;
   });
});
