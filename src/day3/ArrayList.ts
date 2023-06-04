export default class ArrayList<T extends number> {
    public buffer: ArrayBuffer;
    public array: Uint8Array;
    public length: number;

    private get size() {
        return this.buffer.byteLength;
    }

    constructor(size: number) {
        this.length = 0;
        this.buffer = new ArrayBuffer(size);
        this.array = new Uint8Array(this.buffer);
    }

    prepend(item: T): void {
        if (this.length === this.size) {
            this.grow();
        }

        this.shiftRightAfter(0);

        this.array[0] = item;

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (this.length === this.size) {
            this.grow();
        }

        this.shiftRightAfter(idx);

        this.array[idx] = item;
    }

    append(item: T): void {
        if (this.length === this.size) {
            this.grow();
        }

        this.array[this.length] = item;

        this.length++;
    }
    remove(item: T): T | undefined {
        let i;
        let ret;
        for (i = 0; i < this.length; i++) {
            if (item === this.array[i]) {
                ret = item;
                this.shiftLeftAfter(i);
                this.length--;
                break;
            }
        }

        return ret;
    }

    get(idx: number): T | undefined {
        if (idx < this.length) {
            return this.array[idx] as T;
        }
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        const ret = this.array[idx];
        this.shiftLeftAfter(idx);
        this.length--;
        return ret as T;
    }

    private shiftRightAfter(idx: number) {
        for (let i = this.array.length - 1; i > idx; i--) {
            this.array[i] = this.array[i - 1];
        }
    }

    private shiftLeftAfter(idx: number) {
        for (let i = idx; i < this.array.length - 1; i++) {
            this.array[i] = this.array[i + 1]; // Shift left
        }
    }

    private grow() {
        const newByteSize = this.buffer.byteLength * 2;
        const resizedArrayBuffer = new ArrayBuffer(newByteSize);
        const len = this.buffer.byteLength;
        const resizeLen = len > newByteSize ? newByteSize : len;

        this.array = new Uint8Array(resizedArrayBuffer, 0, resizeLen);
        this.array.set(new Uint8Array(this.buffer, 0, resizeLen));
        console.log(this.array);
    }
}
