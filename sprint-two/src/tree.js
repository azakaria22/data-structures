var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fixed
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var found = false;
  var search = function(node) {
    if (node.value === target) {
      found = true;
    } 
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        search(node.children[i]);
      }
    }
  };
  
  search(this);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
