const {expect} = require('chai');
const LinkedListNode = require('../../linked-list');
const detectLoop = require('../index');

describe('detectLopp', () => {
    it('no loop', () => {
        const list = new LinkedListNode(1);
        list.append(2);
        list.append(3);

        expect(detectLoop(list)).to.be.undefined;
    });

    it('detect loop', () => {
        const list = new LinkedListNode(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        list.append(6);
        list.append(7);
        list.append(8);

        let last = list;
        while (last.next) {
            last = last.next;
        }
        last.next = list.next.next.next.next;

        expect(detectLoop(list).value).to.be.equal(5);
    });
});
