var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
  // this.push = function (value) {
  //   this.storage[counter] = value;
  //   this.counter++;
  // };

  // this.pop = function (value) {
  //   if (this.counter === 0) {
  //     return undefined;
  //   }

  //   this.counter--;
  //   var deleted = this.storage[counter];
  //   delete this.storage[counter];
  //   return deleted;
  // };

  // this.size = function (value) {
  //   return this.counter;
  // };

  
};



var stackMethods = {

  push: function (value) {
    this.storage[counter] = value;
    this.counter++;
  },

  pop: function (value) {
    if (this.counter === 0) {
      return undefined;
    }

    this.counter--;
    var deleted = this.storage[counter];
    delete this.storage[counter];
    return deleted;
  },

  size: function (value) {
    return this.counter;
  }
};

// stackMethods.push = function (value) {
//   this.storage[counter] = value;
//   this.counter++;
// };

// stackMethods.pop = function (value) {
//   if (this.counter === 0) {
//     return undefined;
//   }

//   this.counter--;
//   var deleted = this.storage[counter];
//   delete this.storage[counter];
//   return deleted;
// };

// stackMethods.size = function (value) {
//   return this.counter;
// };

_.extend(Stack, stackMethods);





