module.exports = class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }

    append(value) {
        let head = this;
        let tail = new LinkedListNode(value);
        while (head.next) {
            head = head.next;
        }
        head.next = tail;
    }

    toList() {
        let head = this;
        const values = [];
        while (head) {
            values.push(head.value);
            head = head.next
        }
        return values
    }

    print() {
        console.log(this.toList());
    }
};
