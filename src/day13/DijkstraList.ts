const hasUnvisited = (seen: boolean[], dists: number[]): boolean => {
    return seen.some((seen, idx) => !seen && dists[idx] < Infinity);
};

const getLowestUnseen = (seen: boolean[], dists: number[]): number => {
    let lowest = Infinity;
    let lowestIdx = -1;
    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue;
        }

        if (dists[i] < lowest) {
            lowestIdx = i;
            lowest = dists[i];
        }
    }
    return lowestIdx;
};

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen: boolean[] = new Array(arr.length).fill(false);
    const prev: number[] = new Array(arr.length).fill(-1);
    const dists: number[] = new Array(arr.length).fill(Infinity);
    dists[source] = 0

    while (hasUnvisited(seen, dists)) {
        const curr = getLowestUnseen(seen, dists);
        seen[curr] = true;

        const edges = arr[curr]
        for (let i = 0; i < edges.length; i++) {
            const edge = edges[i];
            if (seen[edge.to]) {
                continue;
            }

            const newDist = dists[curr] + edge.weight;
            if (newDist < dists[edge.to]) {
                dists[edge.to] = newDist;
                prev[edge.to] = curr;
            }
        }
    }

    const path: number[] = [sink];
    let curr = prev[sink];
    do {
        path.push(curr);
        curr = prev[curr];
    } while (curr > -1 && curr !== -1);
    return path.reverse();
}
