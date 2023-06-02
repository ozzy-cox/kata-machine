export default function bs_list(haystack: number[], needle: number): boolean {
    if (!haystack.length) {
        return false;
    }

    let hi = haystack.length;
    let lo = 0;
    do {
        const mid = Math.floor(lo + (hi - lo) / 2);

        const currentValue = haystack[mid];

        if (currentValue === needle) {
            return true;
        } else if (currentValue >= needle) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    } while (lo < hi);

    return false;
}
