/**
 * Created by michellenightward on 11/7/17.
 */
export class BinaryTree {

    public value: number;
    public left: BinaryTree;
    public right: BinaryTree;

    constructor(value: number, left?: BinaryTree, right?: BinaryTree) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

}
