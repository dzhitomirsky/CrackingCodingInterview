/**
 * Binary tree node
 */
class TreeNode {
    constructor(value) {
        this.value = value;
        this.parent = undefined;
        this.right = undefined;
        this.left = undefined;
        this.size = 1;
    }
}

/**
 * Binary tree data structure
 */
class BinaryTree {
    constructor() {
        this.root = undefined;
    }

    /**
     * Append new value to bin tree
     *
     * @param value {number}
     */
    append(value) {
        if (!this.root) {
            this.root = new TreeNode(value);

        } else {
            const node = new TreeNode(value);
            let pointer = this.root;

            while (true) {
                pointer.size ++;
                if (value < pointer.value) {
                    if (pointer.left) {
                        pointer = pointer.left
                    } else {
                        pointer.left = node;
                        node.parent = pointer;
                        break
                    }
                } else if (value > pointer.value) {
                    if (pointer.right) {
                        pointer = pointer.right
                    } else {
                        pointer.right = node;
                        node.parent = pointer;
                        break
                    }
                } else {
                    break
                }
            }
        }
    }

    /**
     * In order tree traverse
     *
     * @param root {TreeNode}
     * @param visit {function}
     */
    traverseInOrder(visit, root = this.root) {
        if (!root) {
            return;
        }

        if (root.left) {
            this.traverseInOrder(visit, root.left);
        }

        visit(root);

        if (root.right) {
            this.traverseInOrder(visit, root.right)
        }
    }

    /**
     * Reverse order tree traverse
     *
     * @param root {TreeNode}
     * @param visit {function}
     */
    traverseReversedOrder(visit, root = this.root) {
        if (!root) {
            return;
        }

        if (root.right) {
            this.traverseReversedOrder(visit, root.right);
        }

        visit(root);

        if (root.left) {
            this.traverseReversedOrder(visit, root.left);
        }
    }

    /**
     * Search node in BST
     *
     * @param root {TreeNode}
     * @param value {number}
     * @returns {undefined|TreeNode}
     */
    search(value) {
        let pointer = this.root;
        while (true) {
            if (!pointer) {
                return undefined;
            }
            if (pointer.value === value) {
                return pointer;
            }
            if (value < pointer.value) {
                pointer = pointer.left
            } else {
                pointer = pointer.right
            }
        }
    }

    delete(value) {
        const node = this.search(value);
        if (!node) {
            return undefined
        }

        if (!node.left && !node.right) {
            const parent = node.parent;
            if (!parent) {
                this.root = undefined;
                return;
            }
            if (parent.right === node) {
                parent.right = undefined
            } else {
                parent.left = undefined;
            }
        } else if ((node.left && !node.right) || (node.right && !node.left)) {
            const child = node.left || node.right;
            const parent = node.parent;
            if (!parent) {
                this.root = child;
                this.root.parent = undefined;
            } else {
                if (parent.left === node) {
                    parent.left = child;
                } else {
                    parent.right = child;
                }
                child.parent = parent;
            }
        } else {
            const replacement = this.min(node.right);
            this.delete(replacement);
            node.value = replacement;
        }
    }

    /**
     * Get min of the (sub) tree
     * @param root {TreeNode}
     * @returns {undefined|number}
     */
    min(root = this.root) {
        if (!root) {
            return undefined;
        }
        let pointer = root;
        while (pointer.left) {
            pointer = pointer.left
        }
        return pointer.value;
    }

    /**
     * Check if tree is empty
     *
     * @returns {boolean}
     */
    isEmpty() {
        return this.root === undefined;
    }

    maxAndMinDepth() {
        let maxDepth = 0;
        let minDepth = Number.MAX_SAFE_INTEGER;

        function traverse(node, depth) {
            if (!node) {
                return
            }

            if (node.right) {
                traverse(node.right, depth + 1);
            }

            if (node.left) {
                traverse(node.left, depth + 1);
            }

            if (!node.right && !node.left) {
                if (depth > maxDepth) {
                    maxDepth = depth;
                }

                if (depth < minDepth) {
                    minDepth = depth;
                }
            }
        }

        traverse(this.root, 1);
        return [maxDepth, minDepth];
    }

    getSize() {
        return this.root.size;
    }
}

module.exports = {TreeNode, BinaryTree};
