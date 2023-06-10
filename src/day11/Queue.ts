import SinglyLinkedList from "./SinglyLinkedList";
class Node<T> {
    next: Node<T> | undefined;
    constructor(public value: T) {}
}

export default class Queue<T> {
    public length: number;
    public list: SinglyLinkedList<T>;
    public head: Node<T> | undefined;
    public tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = new Node(item);
        this.length++;
        if (!this.head) {
            this.tail = this.head = newNode;
            return;
        }

        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const node = this.head;

        this.head = this.head.next;
        this.length--;

        return node?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

class Queue1<T> {
    public list: SinglyLinkedList<T>;

    constructor() {
        this.list = new SinglyLinkedList<T>();
    }

    enqueue(item: T): void {
        this.list.append(item);
    }
    deque(): T | undefined {
        return this.list.removeAt(0);
    }
    peek(): T | undefined {
        return this.list.get(0);
    }

    get length() {
        return this.list.length;
    }
}
