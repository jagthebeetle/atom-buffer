var assert = require('assert');
var buffer = require('../buffer');

describe('atom.Ring', function() {
  var a, b;
  beforeEach(function() {
    a = new buffer.Ring(3);
    b = new buffer.Ring(4);
  });
  describe("push", function() {
    it("should refuse items when at capacity", function() {
      a.push(1);
      a.push(4);
      a.push(6);
      b.push("foo");
      b.push("bar");
      b.push("baz");
      b.push("qux");
      assert.equal(a.push(8), false);
      assert.equal(b.push("duck"), false);
    });
  });
  describe("pop", function() {
    it("should return null when empty", function() {
      assert.equal(a.pop(), null);
    });
    it("should pop in FIFO order", function() {
      b.push("foo");
      b.push("bar");
      b.push("baz");
      b.push("qux");
      assert.equal(b.pop(), "foo");
      assert.equal(b.pop(), "bar");
      assert.equal(b.pop(), "baz");
      assert.equal(b.pop(), "qux");
    });
  });
  it("should keep track of its population", function() {
    a.push(1);
    a.push(3);
    a.push("foo");
    a.pop();
    a.pop();
    assert.equal(a.population, 1);
    a.push(2);
    a.pop();
    a.push(2);
    assert.equal(a.population, 2);
    a.push(3);
    assert.equal(a.population, 3);
  });
});