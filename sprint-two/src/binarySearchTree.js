var BinarySearchTree = function(value) {

  // var top = BstNode(value);
  this.value = value;
  this.left = null;
  this.right = null;
  // return this.top;
};

BinarySearchTree.prototype.insert = function(value) {
  var treeNode = BstNode(value);

  var search = function(nodes) {
    if (value > nodes.value ) {
      if (nodes.right === null) {
        nodes.right = treeNode;
      } else {
        search(nodes.right);
      }
    } else {
      if (nodes.left === null) {
        nodes.left = treeNode;
      } else {
        search(nodes.left);
      }
    } 
  };

  search(this);
};

BinarySearchTree.prototype.contains = function(value) {
  var wasFound = false;
  
  var search = function(nodes) {
    if (nodes === null) {
      return;
    }
    if (value === nodes.value) {
      wasFound = true;
      return;
    }

    if (value > nodes.value) {
      search(nodes.right);
    } else {
      search(nodes.left);
    } 
  };
  
  search(this);
  
  return wasFound;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  var iterate = function(node) {
    cb(node.value);

    if (node.left) {
      iterate(node.left);
    }

    if (node.right) {
      iterate(node.right);
    }
  };

  iterate(this);
};

var BstNode = function (value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
