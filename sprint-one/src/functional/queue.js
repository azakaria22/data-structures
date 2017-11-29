var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var lowestCounter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (counter === 0) {
      return undefined;
    }
    var deleted = storage[lowestCounter];
    delete storage[lowestCounter];
    lowestCounter++;
    return deleted;
  };

  someInstance.size = function() {
    if (lowestCounter > counter) {
      return 0;
    }
    return counter - lowestCounter;
  };

  return someInstance;
};
