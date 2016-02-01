'use strict';

class BinaryTree {

  constructor()
{
  this.root = null; // set start value
}

  insert(data)
{
  var root = this.root;

  if (root == null) {
    this.root = new Node(data); // if root is null - set first node
  }
  else {
    var thisNode = root; // reset node to root

    while (true) {
      if (thisNode.data != data) { // if current value not equal data
        if (thisNode.data < data) { // if value is less than data
          if (thisNode.right != null) { // if right object exist
            thisNode = thisNode.right;
          }
          else {
            thisNode.right = new Node(data);
            break;
          }
        }
        else {
          if (thisNode.left != null) { // if left object exist
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

  contains(data)
{
  var thisNode = this.root;
  var result = false;
  //  return false;
  while (thisNode) {
    if (thisNode.data != data) { // if current value not equal data
      if (thisNode.data < data) { // if value is less than data
        if (thisNode.right != null) { // if right object exist
          thisNode = thisNode.right;
        }
        else {
          //						return false;
          break;
        }
      }
      else {
        if (thisNode.left != null) { // if left object exist
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

  remove(data)
{
//  alert("current " + data);
  var root = this.root;

  if (root) {
    var thisNode = root;
    if (this.root.data == data)
      this.root = null;
    else
      while (true) {

        if (thisNode.data != data) { // if current value not equal data
          if (thisNode.data < data) { // if value is less than data
            if (thisNode.right != null) { // if right object exist
              thisNode = thisNode.right;
            }
            else {
//              alert("elem not found " + data);
              break;
            }
          }
          else {
            if (thisNode.left != null) { // if left object exist
              thisNode = thisNode.left;
            }
            else {
//              alert("elem not found " + data);
              break;
            }
          }
        }
        else {
//          alert("elem founded");
          if (thisNode.right != null) {
            var buffer = thisNode.right;
//            alert("right != null");

            while (buffer.left != null) {
              buffer = buffer.left;
//              alert("buffer value" + buffer.data);
            }
            thisNode.data = buffer.data;

            while (thisNode.left != null) {
              thisNode = thisNode.left;
            }
            thisNode = null;
          } else
            if (thisNode.left != null) {
//              alert("left != null");
              thisNode.data = thisNode.left;
              thisNode = thisNode.left;
            } else {
              thisNode = null;
            }

//          alert(data + " removed " + "root data =" + root.data);
//          alert(" root.right.data = " + this.root.right.right.data);
          break;
        }
      }
  }
}

  /*recursive function for counting*/
  counter(node, size) {
  var currentNode = node;
  var count = size++;

  if(currentNode.left != null){
      count++;
      count = this.counter(currentNode.left, count);
    }

  if(currentNode.right != null){
      count++;
      count = this.counter(currentNode.right, count);
    }

  return count++;
}

  size() {
  var count = 0;
  var root = this.root;

  if(root != null)
  count += this.counter(root, count) + 1; //count + root

  alert("total count " + count);
  return count;
}

  isEmpty()
{
  if (this.root != null) {
    return false;
  } else
    return true;
}
}
