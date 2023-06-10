export default class MinHeap {
    public array: number[];

    constructor() {
        this.array = [];
    }

    insert(value: number): void {
        this.array.push(value);
        this.heapifyUp(this.length - 1);
    }

    delete(): number {
        const min = this.array[0];
        let value = this.array.pop();
        if (value && this.array.length) {
            this.array[0] = value;
            this.heapifyDown(0);
        }
        return min;
    }

    private heapifyUp(idx: number) {
        if (idx <= 0) {
            return;
        }

        const value = this.array[idx];
        const pIdx = this.getParentIdx(idx);
        const pVal = this.array[pIdx];

        if (pVal && value < pVal) {
            this.swap(idx, pIdx);
            this.heapifyUp(pIdx);
        }
    }

    private heapifyDown(idx: number) {
        const value = this.array[idx];
        const leftChild = this.getLeftChildIdx(idx);
        const rightChild = this.getRightChildIdx(idx);
        if (idx >= this.length || leftChild >= this.length) {
            return;
        }
        const leftValue = this.array[leftChild];
        const rightValue = this.array[rightChild];

        if (rightValue > leftValue && value > leftValue) {
            this.swap(idx, leftChild);
            this.heapifyDown(leftChild);
        } else if (leftValue > rightValue && value > rightValue) {
            this.swap(idx, rightChild);
            this.heapifyDown(rightChild);
        }
    }

    private swap(idxOne: number, idxTwo: number) {
        const temp = this.array[idxOne];
        this.array[idxOne] = this.array[idxTwo];
        this.array[idxTwo] = temp;
    }

    private getLeftChildIdx(idx: number): number {
        return idx * 2 + 1;
    }
    private getRightChildIdx(idx: number): number {
        return idx * 2 + 2;
    }

    private getParentIdx(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    get length() {
        return this.array.length;
    }
}
