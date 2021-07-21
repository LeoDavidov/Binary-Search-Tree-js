'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    // Methods
    /**
     * Insert a value in BST
     * @param {number} value
     * @returns {object} the whole tree
     * @throws {InvalidArgumentException} if using something else than Number as argument
     */
    insert(value) {
        if (typeof value === "number") {
            const newNode = new Node(value)
            // If the tree is empty
            if (this.root === null) {
                this.root = newNode;
                return this;
            }
            // tree not empty
            let current = this.root; // current - the node we're overviewing
            while (1) {
                if (value === current.value) break;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left
                }
                if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right
                }
            }
        } else throw 'Only numbers allowed as arguments for this Method';
    }

    /**
     * Check if the tree contains a value
     * @param {number} value 
     * @returns {boolean} true/false
     * @throws {InvalidArgumentException} if using something else than Number as argument
     */
    contains(value) {
        if (typeof value === "number") {
            let current = this.root;
            while (1) {
                if (current === null) return false;

                if (value === current.value)
                    return true;
                else if (value < current.value)
                    current = current.left;
                else if (value > current.value)
                    current = current.right;
            }
        } else throw 'Only numbers allowed as arguments for this Method';
    }

    /**
     * Find a node with given value
     * @param {number} value 
     * @returns {object} the node that has the given value
     * @returns {undefined} if this such a node does not exist
     * @throws {InvalidArgumentException} if using something else than Number as argument
     */
    find(value) {
        if (typeof value === "number") {

            let current = this.root;
            while (1) {
                if (current === null) return;

                if (value === current.value)
                    return current;
                else if (value < current.value)
                    current = current.left;
                else if (value > current.value)
                    current = current.right;
            }
        } else throw 'Only numbers allowed as arguments for this Method';
    }

}

/* How the tree looks
            10
    5               13
2       7       11      16
                            18
*/

// Creating the BST
const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(7);
tree.root.right = new Node(13);
tree.root.right.left = new Node(11);
tree.root.right.right = new Node(16);

// test Methods
console.log(tree.insert(18));
console.log(tree.contains(2));
console.log(tree.find(2));