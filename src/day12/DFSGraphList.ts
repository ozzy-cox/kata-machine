function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    path.push(curr);
    if (curr === needle) {
        return true;
    }
    seen[curr] = true;

    for (let i = 0; i < graph[curr].length; i++) {
        const next = graph[curr][i].to;
        if (!seen[next]) {
            if (walk(graph, next, needle, seen, path)) {
                return true;
            }
        }
    }
    path.pop();
    return false;
}
export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path);

    return path.length ? path : null;
}
