var NumberToRoman = require("../NumberToRoman");

describe("Number To Roman", function() {
  it("should return a message", function() {
    expect(NumberToRoman.convertToRoman(42)).toEqual("XLII");
  });
});