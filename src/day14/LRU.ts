import DoublyLinkedList from "./DoublyLinkedList";

export default class LRU<K extends string | number | symbol, V> {
    private length: number;
    private map: Map<K, V>;
    private dll: DoublyLinkedList<K>;

    constructor(private capacity: number) {
        this.map = new Map<K, V>();
        this.length = 0;
        this.dll = new DoublyLinkedList<K>();
    }

    update(key: K, value: V): void {
        const has = this.map.has(key);
        this.map.set(key, value);
        if (has) {
            this.dll.remove(key);
            this.dll.prepend(key);
        }
        if (this.dll.length >= this.capacity) {
            const removedItem = this.dll.removeAt(this.capacity - 1);
            if (removedItem) this.map.delete(removedItem);
        }
        this.dll.prepend(key);
    }
    get(key: K): V | undefined {
        const item = this.map.get(key);
        if (item) {
            this.dll.remove(key);
            this.dll.prepend(key);
        }
        return item;
    }
}
