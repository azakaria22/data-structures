var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 
  var instance = {
    counter: 0,
    storage: {}
  };

  _.extend(instance, stackMethods);
  return instance;
};



var stackMethods = {

  push: function (value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function (value) {
    if (this.counter === 0) {
      return undefined;
    }

    this.counter--;
    var deleted = this.storage[this.counter];
    delete this.storage[this.counter];
    return deleted;
  },

  size: function (value) {
    return this.counter;
  }
};







