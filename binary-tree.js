'use strict';

class BinaryTree {

  constructor() {
  this.root = null; // set start value
	}

	insert(data) {
		var root = this.root;

		if(root == null) {
			this.root = new Node(data); // if root is null - set first node
    }
  	else {
			var thisNode = root; // reset node to root


			while(true) {
				if(thisNode.data != data) { // if current value not equal data
					if(thisNode.data < data) { // if value is less than data
						if (thisNode.right != null) { // if right object exist
							thisNode = thisNode.right;
            }
						else {
							thisNode.right = new Node(data);
							break;
						}
					}
					else {
						if(thisNode.left != null) { // if left object exist
							thisNode = thisNode.left;
            }
						else {
							thisNode.left = new Node(data);
							break;
						}
					}
        }
				else
					break;
			}
    }
	}

	contains(data) {

	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {

	}
}
