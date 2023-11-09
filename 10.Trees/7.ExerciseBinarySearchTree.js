class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      //!this.root
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        //it's nor o(n) because we are using divid and conquer here each node go left or right
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            //checking if currentNode.left is null, undefined, or a falsy value
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            //checking if currentNode.right is null, undefined, or a falsy value
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  //Code here
  lookup(value) {
    if (!this.root) {
      //this.root === null
      return null;
    }
    let currentNode = this.root;
    while (currentNode) {
      //This will stop until we no longer have a nood we go through or no nood exist
      if (value < currentNode.value) {
        //the value is less than the current node value so go left
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        //the value is greater than the current node value so go right
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    //if we don't find anything just return false;
    return false;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}
//     9
//  4     170
//1  6      15

//     9
//  4     20
//1  6  15  170

//M But not working
//   insert(value) {
//     const newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }
//     if (this.root.value < newNode.value) {
//       // 9 < 4 ? left : right
//       if (this.root.left < newNode.value) {
//         // null < 4 true
//         this.root.left = newNode; // null = 4
//         return this;
//       } else {
//         //null > 4 false
//         // if newNode.left < value
//         newNode.right = newNode;
//         return this;
//       }
//     } else {
//       // (this.root > newNode.value )
//       if (this.root.left < this.root.value) {
//         this.root.left = this.root;
//         return this;
//       } else {
//         // if newNode.left < value
//         this.root.right = this.root;
//         return this;
//       }
//     }

// lookup(value) {
//   const loockupNode = new Node(value);

//   if (this.root === null) {
//     return null;
//   }
//   if (this.root.value === value) {
//     return loockupNode;
//   } else {
//     let currentNode = this.root;

//     while (true) {
//       if (value < currentNode.value) {
//         if (!currentNode.left) {
//           return null;
//         }
//         if (currentNode.left.value === value) {
//           return loockupNode;
//         } else if (currentNode.left.right.value === value) {
//           return loockupNode;
//         } else {
//           return null;
//         }
//       } else {
//         if (!currentNode.right) {
//           return null;
//         }
//         if (currentNode.right.value === value) {
//           return loockupNode;
//         } else if (currentNode.right.value === value) {
//           return loockupNode;
//         } else {
//           return null;
//         }
//       }
//     }
//   }

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(1);
tree.insert(20);
tree.insert(170);
tree.insert(180);
tree.insert(15);
// console.log(tree.lookup(20));
// console.log(tree.remove(20));
console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
