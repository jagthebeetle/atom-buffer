"use strict";
var atom = {
  buffer: {
    DEFAULT_LENGTH: 1000
  }
};


/**
 * Implements a fixed-size buffer that defaults to length 
 * atom.buffer.DEFAULT_LENGTH, and is functionally equivalent to a queue.
 *
 * @constructor
 * @template T
 * @param {number} capacity The capacity of the buffer
 */
atom.buffer.Ring = function(capacity) {
  this.capacity = capacity || atom.buffer.DEFAULT_LENGTH;
  this.first = 0;
  this.last = -1;
  this.population = 0;
  this.items = [];
};

/**
 * Attempts to insert an item into the buffer, and returns whether the
 * operation was successful or not.
 * @param {T} item The item to attempt to insert.
 * @return {boolean} Whether the operation was successful.
 */
atom.buffer.Ring.prototype.push = function(item) {
  if (this.population >= this.capacity) {
    return false;
  } else {
    this.last = ++this.last % this.capacity;
    this.items[this.last] = item;
    this.population++;
    return true;
  }
};

/**
 * Returns the item at first position or null if there is no item to return.
 * @return {T|null} Item at first position or null if buffer is empty. 
 */
atom.buffer.Ring.prototype.pop = function() {
  if (this.population <= 0) {
    return null;
  } else {
    var item = this.items[this.first];
    this.items[this.first] = null;
    this.first = ++this.first % this.capacity;
    this.population--;
    return item;
  }
};

if (module && module.exports) {
  module.exports = atom.buffer;
}