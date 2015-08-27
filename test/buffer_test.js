var assert = require('assert');
var buffer = require('../buffer');

describe('atom.Ring', function() {
  var a, b;
  describe("push", function() {
    beforeEach(function() {
      a = new buffer.Ring(3);
      b = new buffer.Ring(4);
    });
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

  });
});