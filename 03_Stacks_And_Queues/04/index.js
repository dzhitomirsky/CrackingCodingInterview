const Stack = require('../stack');

/**
 * Queue stack
 */
class QueueStack {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    enqueue(value) {
        if (!this.s2.isEmpty()) {
            this._invertOrder();
        }
        this.s1.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        if (this.s2.isEmpty()) {
            this._invertOrder();
        }

        return this.s2.pop();
    }

    getHead() {
        if (this.isEmpty()) {
            return undefined;
        }

        if (this.s2.isEmpty()) {
            this._invertOrder()
        }

        return this.s2.peek();
    }

    getTail() {
        if (this.isEmpty()) {
            return undefined;
        }

        if (this.s1.isEmpty()) {
            this._invertOrder()
        }
        return this.s1.peek();
    }

    _invertOrder() {
        if (this.s1.isEmpty()) {
            while (!this.s2.isEmpty()) {
                this.s1.push(this.s2.pop());
            }
        } else if (this.s2.isEmpty()) {
            while (!this.s1.isEmpty()) {
                this.s2.push(this.s1.pop());
            }
        } else {
            throw new Error('QueueStack is in inconsistent state.')
        }
    }

    size() {
        return this.s1.size() + this.s2.size();
    }

    isEmpty() {
        return this.s1.isEmpty() && this.s2.isEmpty();
    }
}

module.exports = QueueStack;
