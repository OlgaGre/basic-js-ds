const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
    constructor(data) {
        this.data = data; // node value
        this.left = null; // left node child reference
        this.right = null; // right node child reference
    }
}
class BinarySearchTree {

    constructor() {
        this.treeRoot = null;
    }
    root() {
            return this.treeRoot;
        }
        ///
    add(data) {

            this.treeRoot = addNode(this.treeRoot, data)

            function addNode(node, data) {
                if (!node) {
                    return new Node(data)
                }
                if (node.data === data) {
                    return node;
                }
                if (data < node.data) {
                    node.left = addNode(node.left, data)

                } else {

                    node.right = addNode(node.right, data);

                }
                return node;
            }
        }
        ///
    has(data) {
        return hasDate(this.treeRoot, data);

        function hasDate(node, data) {
            if (node === null) {
                return false;
            }

            if (node.data === data) {
                return true;
            }

            if (data < node.data) {
                return hasDate(node.left, data)
            } else {
                return hasDate(node.right, data)
            }



        }
    }

    find(data) {
        return findData(this.treeRoot, data);

        function findData(node, data) {
            if (node == null) {
                return null;
            } else if (node.data === data) {
                return node;
            }
            if (data < node.data) {
                return findData(node.left, data)
            } else {
                return findData(node.right, data)
            }

        }
    }

    remove(data) {
        this.treeRoot = removeElem(this.treeRoot, data)


        function removeElem(node, data) {
            if (node === null) {
                return null
            }

            if (data < node.data) {
                node.left = removeElem(node.left, data);
                return node;
            } else if (data > node.data) {
                node.right = removeElem(node.right, data)
                return node;
            } else {

                if (node.right === null && node.left === null) {
                    return null;
                }
                if (node.right === null) {
                    node = node.left;
                    return node;
                }
                if (node.left === null) {
                    node = node.right;
                    return node;
                }

                let minRight = node.right;
                while (minRight.left) {
                    minRight = minRight.left;
                }
                node.data = minRight.data;
                node.right = removeElem(node.right, minRight.data);

                return node;


            }
        }
    }


    min() {
        if (this.treeRoot === null) {
            return null;
        }

        let node = this.treeRoot;
        while (node.left != null) {
            node = node.left;
        }

        return node.data;
    }

    max() {
        if (this.treeRoot === null) {
            return null;
        }

        let node = this.treeRoot;
        while (node.right != null) {
            node = node.right;
        }

        return node.data;
    }
}


module.exports = {
    BinarySearchTree
};