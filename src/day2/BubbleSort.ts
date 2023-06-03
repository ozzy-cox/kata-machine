export default function bubble_sort(arr: number[]): void {
    let changed = false;
    let sortedBeyond = arr.length - 1;
    do {
        for (let i = 0; i < sortedBeyond; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                changed = true;
            }
        }
        sortedBeyond -= 1;
    } while (changed && sortedBeyond > 0);
}
