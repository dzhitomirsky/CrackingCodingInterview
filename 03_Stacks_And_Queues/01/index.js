/**
 * Array based three stack
 */
module.exports = class KArrayStack {
    constructor(k = 3) {
        this.sizes = new Array(k).fill(0);
        this.stacks = new Array(k * 5);
    }

    /**
     * Get k-th stack first element
     *
     * @param stackIdx {number}
     * @returns {undefined|number}
     */
    peek(stackIdx) {
        if (this.size(stackIdx) === 0) {
            return undefined;
        }

        return this.stacks[this.stacks.length / this.sizes.length * stackIdx + (this.sizes[stackIdx] - 1)]
    }

    /**
     * Pop k-th stack head
     *
     * @param stackIdx {number}
     * @returns {number|undefined}
     */
    pop(stackIdx) {
        if (this.size(stackIdx) === 0) {
            return undefined;
        }
        const result = this.peek(stackIdx);
        this.stacks[this.stacks.length / this.sizes.length * stackIdx + (this.sizes[stackIdx] - 1)] = undefined;
        this.sizes[stackIdx]--;
        return result

    }

    /**
     * Add value to K-th stack
     * @param stackIdx {number}
     * @param value {number}
     */
    push(stackIdx, value) {
        let nextIdx = this.stacks.length / this.sizes.length * stackIdx + this.sizes[stackIdx];
        if (nextIdx === this.stacks.length / this.sizes.length * (stackIdx + 1)) {
            this._resize();
            nextIdx = this.stacks.length / this.sizes.length * stackIdx + this.sizes[stackIdx];
        }
        this.stacks[nextIdx] = value;
        this.sizes[stackIdx]++;
    }

    /**
     * Get size of k-th stack
     *
     * @param stackIdx
     * @returns {number}
     */
    size(stackIdx) {
        return this.sizes[stackIdx]
    }

    _resize() {
        const resized = new Array(this.stacks.length * 2);
        this.sizes.forEach((size, idx) => {
            const oldStart = this.stacks.length / this.sizes.length * idx;
            const oldEnd = this.stacks.length / this.sizes.length * idx + size;
            const newStart = resized.length / this.sizes.length * idx;
            let counter = 0;
            for (let i = oldEnd; i < oldEnd; i++) {
                resized[newStart + counter] = this.stacks[counter];
            }
        });
        this.stacks = resized;
    }
};
