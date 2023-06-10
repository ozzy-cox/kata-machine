function walk(node: BinaryNode<number>, order: number[]): void {
    if (node.left) walk(node.left, order);
    if (node.right) walk(node.right, order);
    order.push(node.value);
}
export default function post_order_search(head: BinaryNode<number>): number[] {
    const order: number[] = [];
    walk(head, order);
    return order;
}
