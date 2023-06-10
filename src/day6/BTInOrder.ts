function walk(node: BinaryNode<number>, order: number[]): void {
    if (node.left) walk(node.left, order);
    order.push(node.value);
    if (node.right) walk(node.right, order);
}
export default function in_order_search(head: BinaryNode<number>): number[] {
    const order: number[] = [];
    walk(head, order);
    return order;
}
