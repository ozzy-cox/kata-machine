import Queue from "./Queue";

export default function bfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const q = new Queue<number>();
    q.enqueue(source);

    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    do {
        const curr = q.deque() as number;

        if (curr === needle) {
            break;
        }
        seen[curr] = true;

        for (let i = 0; i < graph[curr].length; i++) {
            const next = graph[curr][i].to;
            if (!seen[next]) {
                q.enqueue(next);
                prev[next] = curr
            }
        }
    } while (q.length);

    const path: number[] = [needle];
    let curr = prev[needle];
    if (curr === -1) {
        return null;
    }
    do {
        path.push(curr);
        curr = prev[curr];
    } while (curr > -1 && curr !== -1);

    return path.reverse();
}
