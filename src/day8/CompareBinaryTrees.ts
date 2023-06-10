export default function compare(
    a: BinaryNode<number> | null | undefined,
    b: BinaryNode<number> | null | undefined,
): boolean {
    if (a === undefined || b === undefined) {
        return a === b;
    }
    if (a?.value !== b?.value) {
        return false;
    }
    return compare(a?.left, b?.left) && compare(a?.right, b?.right);
}
