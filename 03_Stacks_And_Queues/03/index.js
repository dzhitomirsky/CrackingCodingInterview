const Stack = require('../stack');

/**
 * Set of stacks
 */
class SetOfStacks {
    constructor(capacity = 3) {
        this.threshold = capacity;
        this.stacks = new Stack();
        this.stacks.push(new Stack());
        this.stackSize = 0;
    }

    push(value) {
        if (this.stacks.peek().size() === this.threshold) {
            this.stacks.push(new Stack());
        }

        this.stacks.peek().push(value);
        this.stackSize++;
    }

    pop() {
        const result = this.stacks.peek().pop();
        if (this.stacks.size() > 1 && this.stacks.peek().isEmpty()) {
            this.stacks.pop();
        }
        this.stackSize --;
        return result;
    }

    peek() {
        return this.stacks.peek().peek()
    }

    size() {
        return this.stackSize;
    }

    isEmpty() {
        return this.stackSize === 0;
    }
}

module.exports = SetOfStacks;
