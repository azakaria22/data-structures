var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.counter = 0;
  this.lowestCount = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  if (this.counter === 0) {
    return undefined;
  }

  var deleted = this.storage[this.lowestCount];
  delete this.storage[this.lowestCount];
  this.lowestCount++;

  if (this.lowestCount > this.counter) {
    this.counter = 0;
    this.lowestCount = 0;
  }

  return deleted;
};

Queue.prototype.size = function() {
  return this.counter - this.lowestCount;
};

var Instance = new Queue();


