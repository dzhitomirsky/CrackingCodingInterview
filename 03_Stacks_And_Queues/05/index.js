const Stack = require('../stack');

Stack.prototype.sort = function sort () {
    if(this.isEmpty()) {
        return
    }

    const stack = new Stack();
    let shuffles = undefined;

    while (shuffles !== 0) {
        shuffles = 0;

        while(!this.isEmpty()) {
            if(stack.peek() && stack.peek() > this.peek()) {
                let tmp = stack.pop();
                stack.push(this.pop());
                stack.push(tmp);

                shuffles ++;
            } else {
                stack.push(this.pop())
            }
        }

        while (!stack.isEmpty()) {
            this.push(stack.pop())
        }
    }
};

module.exports = Stack;
