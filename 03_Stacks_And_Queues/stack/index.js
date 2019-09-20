/**
 * Stack node
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }
}


/**
 * Stack
 */
module.exports = class Stack {
    constructor() {
        this.head = undefined;
        this.stackSize = 0;
    }

    push(value) {
        const newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;

        this.stackSize ++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        } else {
            const result = this.head.value;
            this.head = this.head.next;
            this.stackSize--;
            return result;
        }
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        } else {
            return this.head.value;
        }
    }

    size() {
        return this.stackSize;
    }

    isEmpty() {
        return !this.stackSize;
    }
};
