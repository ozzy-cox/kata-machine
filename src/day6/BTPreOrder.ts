function walk(node: BinaryNode<number>, order: number[]): void {
    order.push(node.value);
    if (node.left) walk(node.left, order);
    if (node.right) walk(node.right, order);
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    const order: number[] = [];
    walk(head, order);
    return order;
}
