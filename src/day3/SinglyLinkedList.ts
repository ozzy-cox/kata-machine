class Node<T> {
    next: Node<T> | undefined;
    constructor(public value: T) {}
}
export default class SinglyLinkedList<T> {
    public length = 0;
    public head: Node<T> | undefined;
    private tail: Node<T> | undefined;
    prepend(item: T): void {
        const newNode = new Node(item);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const previousHead = this.head;
            this.head = newNode;
            newNode.next = previousHead;
        }
        this.length += 1;
    }
    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            this.append(item);
        } else if (idx === this.length - 1) {
            this.prepend(item);
        } else {
            const newNode = new Node(item);
            const nodeBefore = this.getNodeAt(idx - 1);
            const nextNext = nodeBefore?.next?.next;
            if (nodeBefore) nodeBefore.next = newNode;
            newNode.next = nextNext;

            this.length += 1;
        }
    }
    append(item: T): void {
        const newNode = new Node(item);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const previousTail = this.tail;
            if (previousTail) {
                previousTail.next = newNode;
                this.tail = newNode;
            }
        }
        this.length += 1;
    }
    remove(item: T): T | undefined {
        let node: Node<T> | undefined = this.head;
        let nodeBefore: Node<T> | undefined;
        let i = 0;

        while (i < this.length && node) {
            if (node?.value === item) {
                if (!nodeBefore) {
                    // This is head
                    const headNext = node?.next;
                    if (headNext) {
                        this.head = headNext;
                    } else {
                        this.head = undefined;
                        this.tail = undefined;
                    }
                } else {
                    const nodeNext = node?.next;
                    if (nodeNext) {
                        nodeBefore.next = node.next;
                    } else {
                        // this is tail
                        this.tail = nodeBefore;
                        nodeBefore.next = undefined;
                    }
                }
                this.length -= 1;
                return node.value;
            }
            node = node?.next;
            nodeBefore = nodeBefore?.next;
            i++;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        return this.getNodeAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        console.log('idx', idx)
        console.log('this.length', this.length)
        if (idx >= this.length) {
            return undefined;
        }

        if (idx === 0) {
            const head = this.head;
            const headNext = head?.next;
            if (headNext) this.head = this.head?.next;
            else {
                this.tail === undefined;
                this.head === undefined;
            }
            this.length -= 1;
            return head?.value;
        } else {
            const nodeBefore = this.getNodeAt(idx - 1);
            const node = nodeBefore?.next;
            const nextNext = nodeBefore?.next?.next;
            if (nodeBefore) {
                nodeBefore.next = nextNext;
                if (!nextNext) {
                    this.tail = nodeBefore;
                }
            }
            this.length -= 1;
            return node?.value;
        }
    }

    private getNodeAt(idx: number): Node<T> | undefined {
        if (idx < this.length) {
            let node = this.head;
            for (let i = 0; i < idx; i++) {
                node = node?.next;
            }
            return node;
        }
        return undefined;
    }
    private isEmpty(): boolean {
        return this.length === 0;
    }
}
