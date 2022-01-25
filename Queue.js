class Queue {
    constructor(...args) {
        this.head = 0;
        this.tail = 0;
        
        for (const item of args) {
            this.push(item);
        }

    }

    get size() {
        return this.tail - this.head;
    }

    get tail () {
        return this._tail;
    }
    set tail (v) {
        this._tail = v;
    }
    get head () {
        return this._head;
    }
    set head (v) {
        this._head = v;
    }

    push(value) { //аналог enqueue
        this[this.tail] = value;
        this.tail = this.tail+1;
        return this.size;
    }

    pop() { //аналог dequeue
        const lastItem = this[this.head];
        delete this[this.head];
        this.head = this.head+1;
        return lastItem;
    }

}


function mergeQueues(q1, q2) {
const result = new Queue();

while(q1.size || q2.size) {
    if(q1.size) {
        result.push(q1.pop());
    }
    if (q2.size) {
        result.push(q2.pop());
    }

}

return result;
}

const q1 = new Queue(2, 9, 10);
const q2 = new Queue(5);