// TODO
class Node<T> {
    next: Node<T> | undefined;
    constructor(public value: T) {}
}

export default class SinglyLinkedList<T> {
    public length: number;
    public head: Node<T> | undefined;
    public tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        if (!this.assignHeadAndTailIfEmpty(item)) {
            const newNode = new Node(item);

            const previousHead = this.head;
            this.head = newNode;
            newNode.next = previousHead;

            this.length += 1;
        }
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            return undefined;
        }
    }

    append(item: T): void {
        if (!this.assignHeadAndTailIfEmpty(item)) {
            const newNode = new Node(item);

            const previousTail = this.tail;
            if (previousTail) {
                this.tail = newNode;
                previousTail.next = newNode;

                this.length += 1;
            }
        }
    }

    remove(item: T): T | undefined {
        let node = this.head;
        let previousNode = undefined;
        while (node) {
            if (node.value === item) {
                if (previousNode) {
                    previousNode.next = previousNode.next?.next;
                } else {
                    this.head = undefined;
                    this.tail = undefined;
                }
                return node.value;
            }
            previousNode = node;
            node = node.next;
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        const node = this.getNode(idx);
        if (node) {
            return node.value;
        }
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (idx > this.length) {
            return undefined;
        }
        const prevNode = this.getNode(idx - 1);
        if (prevNode) {
            const node = prevNode.next;
            prevNode.next = prevNode.next?.next;
            if (node) {
                 
            }
            this.length -= 1;
            return node?.value;
        } else {
            const node = this.head;
            this.head = undefined;
            this.length -= 1;
            console.log("asdgasdgasdg");
            return node?.value;
        }
    }

    findPrevNode(item: T): Node<T> | undefined {
        let node = this.head;
        while (node) {
            if (node.next && node.next.value === item) {
                return node;
            }
            node = node.next;
        }
        return undefined;
    }

    getNode(idx: number): Node<T> | undefined {
        if (idx > this.length || idx < 0) {
            return undefined;
        }
        let node = this.head;
        for (let i = 0; i < idx; i++) {
            node = node?.next;
        }
        return node as Node<T>;
    }

    private assignHeadAndTailIfEmpty(item: T): boolean {
        if (!this.head) {
            const newNode = new Node(item);
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
            return true;
        }
        return false;
    }
}
