const Stack = require('../stack');

/**
 * Stack with min getter
 *
 * @type {MinStack}
 */
class MinStack {
    constructor() {
        this.stack = new Stack();
        this.mins = new Stack();
    }

    push(value) {
        if(this.mins.isEmpty() || value <= this.mins.peek()) {
            this.mins.push(value)
        }
        return this.stack.push(value);
    }

    pop() {
        const result = this.stack.pop();
        if(result === this.mins.peek()) {
            this.mins.pop();
        }

        return result;
    }

    min() {
        return this.mins.peek()
    }

    peek() {
        return this.stack.peek();
    }

    isEmpty() {
        return this.stack.isEmpty();
    }

    size() {
        return this.stack.size();
    }
}

module.exports = MinStack;
