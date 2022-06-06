// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar shift function tests", () => {
  it("should return false if the shift value is equal to 0", () => {
    const input = "encoded message";
    const shift = 0;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
  it("should return false if the shift value is less than -25", () => {
    const input = "encoded message";
    const shift = -26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
  it("should return false if the shift value is greater than 25", () => {
    const input = "encoded message";
    const shift = 26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
  it("should ignore capital letters", () => {
    const input = "A Message";
    const shift = 4;
    const actual = caesar(input, shift);
    const expected = "e qiwweki";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and other non alphabetic symbols in the message before and after encoding or decoding", () => {
    const input = "e qiwweki.";
    const shift = 4;
    const actual = caesar(input, shift, false);
    const expected = "a message.";
    expect(actual).to.equal(expected);
  });
  it("should handle shifts that go past the end of the abc", () => {
    const input = "cheud pdjdclqh";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "zebra magazine";
    expect(actual).to.equal(expected);
  });
  it("should handle negative shifts at the end of the abc", () => {
    const input = "wbyox jxdxwfkb";
    const shift = -3;
    const actual = caesar(input, shift, false);
    const expected = "zebra magazine";
    expect(actual).to.equal(expected);
  });
});
