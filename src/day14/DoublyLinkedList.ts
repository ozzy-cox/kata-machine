class Node<T> {
    next: Node<T> | undefined;
    prev: Node<T> | undefined;
    constructor(public value: T) {}
}

export default class DoublyLinkedList<T> {
    public length: number = 0;
    public head: Node<T> | undefined;
    public tail: Node<T> | undefined;

    prepend(item: T): void {
        if (!this.assignHeadAndTailIfEmpty(item)) {
            const newHead = new Node(item);
            const previousHead = this.head as Node<T>;
            this.head = newHead;
            newHead.next = previousHead;
            previousHead.prev = newHead;
            this.length += 1;
        }
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            return undefined;
        }

        const newNode = new Node(item);

        const node = this.getNode(idx);
        if (node) {
            const prev = node.prev;
            const next = node.next;

            if (!next) {
                this.prepend(item);
            } else if (!prev) {
                this.append(item);
            } else {
                prev.next = newNode;
                next.prev = newNode;
                newNode.prev = prev;
                newNode.next = next;
            }
        }
    }

    append(item: T): void {
        if (!this.assignHeadAndTailIfEmpty(item)) {
            const previousTail = this.tail;
            if (previousTail) {
                const newTail = new Node(item);
                this.tail = newTail;
                previousTail.next = newTail;
                newTail.prev = previousTail;
            }
            this.length += 1;
        }
    }

    remove(item: T): T | undefined {
        const node = this.findNode(item);
        if (node) {
            this.removeNode(node);
            return node.value;
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        return this.getNode(idx)?.value;
    }

    removeNode(node: Node<T>) {
        const prev = node?.prev;
        const next = node?.next;

        if (!next && !prev) {
            this.head = undefined;
            this.tail = undefined;
        }

        if (prev) prev.next = next;
        else this.head = next;
        if (next) next.prev = prev;
        else this.tail = prev;
        this.length -= 1;
    }

    getNode(idx: number): Node<T> | undefined {
        if (idx > this.length) {
            return undefined;
        }
        let node = this.head;
        for (let i = 0; i < idx; i++) {
            node = node?.next;
        }
        return node as Node<T>;
    }

    findNode(item: T): Node<T> | undefined {
        let node = this.head;
        while (node) {
            if (node.value === item) {
                return node;
            }
            node = node.next;
        }
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (idx > this.length - 1) {
            return undefined;
        }

        const node = this.getNode(idx);
        console.log(this.length);
        if (node) {
            this.removeNode(node);
        }
        return node?.value;
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
