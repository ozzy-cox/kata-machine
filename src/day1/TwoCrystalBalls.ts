export default function two_crystal_balls(breaks: boolean[]): number {
    const n = Math.floor(Math.sqrt(breaks.length));

    let i = 0;

    let broken = false;
    while (i < breaks.length) {
        if (breaks[i]) {
            while (i > n) {
                i -= 1;
                if (!breaks[i]) {
                    return i + 1;
                }
            }
            break;
        }

        i += n;
    }

    return -1;
}
