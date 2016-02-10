'use strict';

class BinaryTree
{

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
      result = true;
      break;
    }
  }
  return result;

}

  remove(data)
{
  var root = this.root;
  if (root) {
    var address = "this.root";
    var thisNode = root;
      while (true) {
        if (thisNode.data != data) { // if current value not equal data
          if (thisNode.data < data) { // if value is less than data
            if (thisNode.right != null) { // if right object exist
              thisNode = thisNode.right;
              address += ".right";
            }
            else {
              break;
            }
          }
          else {
            if (thisNode.left != null) { // if left object exist
              address += ".left";
              thisNode = thisNode.left;
            }
            else {
              break;
            }
          }
        }
        else {
          var nodeAddress = address;

          if (thisNode.right != null) {
            thisNode = thisNode.right;

            address += ".right";

            while (thisNode.left != null) {
              thisNode = thisNode.left;
              address += ".left";
            }

            eval(nodeAddress + ".data = " + address + ".data");

            if (thisNode.right = null) {
              address += " = null";
            } else
              address += " = " + address + ".right"; // if right node is exist

            eval(address);

          } else
            if (thisNode.left != null) {
              address += " = " + address + ".left";
              eval(address);
            } else {
              address += " = null";

              eval(address);
            }
          break;
        }
      }
  }
}

  /*recursive function for counting*/
  counter(node, size)
{
  var currentNode = node;
  var count = size++;

  if (currentNode.left != null) {
    count++;
    count = this.counter(currentNode.left, count);
  }

  if (currentNode.right != null) {
    count++;
    count = this.counter(currentNode.right, count);
  }

  return count++;
}

  /*size counting*/
  size()
{
  var count = 0;
  var root = this.root;

  if (root != null)
    count += this.counter(root, count) + 1; //count + root

  return count;
}

  /*is empty*/
  isEmpty()
{
  if (this.root != null) {
    return false;
  } else
    return true;
}

}
