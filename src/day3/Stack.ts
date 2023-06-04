class Node<T> {
    next: Node<T> | undefined;
    constructor(public value: T) {}
}

export default class Stack<T> {
    public length: number;
    public head: Node<T> | undefined;

    constructor() {
        this.length = 0;
    }

    push(item: T): void {
        const newNode = new Node(item);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return;
        }

        const prevHead = this.head;
        this.head = newNode;
        newNode.next = prevHead;
    }
    pop(): T | undefined {
        const node = this.head;
        if (!this.head) {
            return undefined;
        }

        this.head = this.head.next;
        this.length--;

        return node?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

class Stack1<T> {
    public array: Array<T>;

    constructor() {
        this.array = [];
    }

    push(item: T): void {
        this.array.push(item);
    }
    pop(): T | undefined {
        return this.array.pop();
    }
    peek(): T | undefined {
        return this.array[this.array.length - 1];
    }
    get length() {
        return this.array.length;
    }
}
