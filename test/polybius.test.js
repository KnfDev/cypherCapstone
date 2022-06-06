// Write your tests here!
const {expect} = require("chai");
const {polybius} = require("../src/polybius")

describe("polybius function tests",()=>{
    it("should when encoding translate the letters i and j to 42",()=>{
        const input = "jiggle"
        const actual = polybius(input)
        const expected = "424222221351";
        expect(actual).to.equal(expected)
    })
    it("should when decoding translate the number 42 to i and j", ()=>{
        const input = "424222221351"
        const actual = polybius(input, false)
        expect(actual).to.include("i")
        expect(actual).to.include("j")
    })
    it("should ignore and spaces",()=>{
        const input = "my message"
        const actual = polybius(input)
        const expected = "2345 23513434112251"
        expect(actual).to.equal(expected);
    })
})