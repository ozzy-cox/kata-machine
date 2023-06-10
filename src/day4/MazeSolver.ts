const eq = (a: Point, b: Point) => a.x === b.x && a.y === b.y;
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    function walk(
        location: Point,
        seen: Point[],
        path: Point[],
    ): Point[] | undefined {
        if (
            location.y > maze.length ||
            location.x > maze[0].length ||
            location.x < 0 ||
            location.y < 0
        ) {
            return;
        }
        const value = maze[location.y][location.x];

        for (let i = 0; i < seen.length; i++) {
            if (eq(seen[i], location)) {
                return;
            }
        }

        if (value === wall) return;

        if (eq(location, end)) {
            return [location, ...path];
        }

        seen.push(location);

        const next =
            walk({ x: location.x - 1, y: location.y }, seen, path) ||
            walk({ x: location.x + 1, y: location.y }, seen, path) ||
            walk({ x: location.x, y: location.y - 1 }, seen, path) ||
            walk({ x: location.x, y: location.y + 1 }, seen, path);

        if (next) {
            return [location, ...next];
        }
        return undefined;
    }

    const path = walk(start, [], []);

    return path as Point[];
}
