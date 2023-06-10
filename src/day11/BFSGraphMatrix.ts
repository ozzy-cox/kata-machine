import Queue from "./Queue";

export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const q = new Queue<number>();
    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);
    q.enqueue(source);
    seen[source] = true;
    do {
        const curr = q.deque() as number;
        if (curr === needle) {
            break;
        }

        for (let i = 0; i < graph[curr].length; i++) {
            if (graph[curr][i] !== 0 && !seen[i]) {
                seen[i] = true;
                prev[i] = curr;
                q.enqueue(i);
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
