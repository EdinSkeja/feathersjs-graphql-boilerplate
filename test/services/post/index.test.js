"use strict";

const assert = require("assert");
const app = require("../../../src/app");

describe("post service", function() {
  it("registered the post service", () => {
    assert.ok(app.service("post"));
  });
});
