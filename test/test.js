var assert = require("assert");
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("Connection", function () {
  var db = new Connection(),
    tobi = new User("tobi"),
    loki = new User("loki"),
    jane = new User("jane");

  beforeEach(function (done) {
    db.clear(function (err) {
      if (err) return done(err);
      db.save([tobi, loki, jane], done);
    });
  });

  describe("#find()", function () {
    it("respond with matching records", function (done) {
      db.find({ type: "JsonProducts" }, function (err, res) {
        if (err) return done(err);
        res.should.have.length(3);
        done();
      });
    });
  });
});

describe("Product", function () {
  describe("#save()", function () {
    it("should save without error", function (done) {
      var user = new Product("Aspargos");
      user.save(function (err) {
        if (err) done(err);
        else done();
      });
    });
  });
});
