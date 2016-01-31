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
		var thisNode = this.root;
  	var result = false;
//  return false;
		while(true) {
			if(thisNode.data != data) { // if current value not equal data
				if(thisNode.data < data) { // if value is less than data
					if (thisNode.right != null) { // if right object exist
						thisNode = thisNode.right;
					}
					else {
//						return false;
						break;
					}
				}
				else {
					if(thisNode.left != null) { // if left object exist
						thisNode = thisNode.left;
					}
					else {
//						return false;
						break;
					}
				}
			}
			else {
      result = true;
			break;
      }
		}
  	return result;

	}

	remove(data) {
  if(this.root) {
		var thisNode = this.root;

		while (true) {

			if (thisNode.data != data) { // if current value not equal data
				if (thisNode.data < data) { // if value is less than data
					if (thisNode.right != null) { // if right object exist
						thisNode = thisNode.right;
					}
					else {
						break;
					}
				}
				else {
					if (thisNode.left != null) { // if left object exist
						thisNode = thisNode.left;
					}
					else {
						break;
					}
				}
			}
			else {
				if (thisNode.right != null) {
					var buffer = thisNode.right;

					while (buffer.left != null) {
						buffer = buffer.left;
					}
					thisNode.data = buffer.data;
					buffer = null;
				} else
				{
					thisNode = null;
				}

				break;
			}
		}
	}
	}

	size() {

	}

	isEmpty() {
	if(!this.root){
    return true;
  }else
  	return false;
	}
}
