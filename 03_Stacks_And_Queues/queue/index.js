/**
 * Queue node
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }
}

/**
 * Queue
 */
class Queue {
    constructor() {
        this.queueSize = 0;

        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.tail = node;
            this.head = this.tail;
        } else {
            this.tail.next = node;
            this.tail = node
        }
        this.queueSize ++;
    }

    dequeue() {
        if(this.isEmpty()) {
            return undefined;
        }
        const result = this.head.value;
        this.head = this.head.next;
        this.queueSize --;
        if(this.isEmpty()) {
            this.tail = undefined;
        }
        return result;
    }

    getHead() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.head.value;
    }

    getTail() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.tail.value;
    }

    size() {
        return this.queueSize;
    }

    isEmpty() {
        return this.queueSize === 0;
    }
}

module.exports = Queue;
