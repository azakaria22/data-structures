var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);

    if (list.head === null) {
      list.head = node;
      list.tail = node;      
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var deleted = list.head.value;
    list.head = list.head.next;
    return deleted;
  };

  list.contains = function(target) {
    var check = list.head;
    while (check !== null) {
      if (check.value === target) {
        return true;
      }
      check = check.next;
    }
    
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
 
/*
 * Complexity: What is the time complexity of the above functions?
 */
