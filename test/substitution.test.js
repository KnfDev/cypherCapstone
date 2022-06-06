// Write your tests here!
const {expect} = require("chai")
const {substitution} = require("../src/substitution")

describe("substitution functions test", ()=>{
    it("should return false if the alphabet isn't exactly 26 letters long",()=>{
        const input = "message"
        const alphabet = "length"
        const actual = substitution(input,alphabet)
        expect(actual).to.be.false
    })
    it("should correctly translate the given phrase based on abc given in function",()=>{
        const input = "message"
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const actual = substitution(input,alphabet)
        const expected = "ykrrpik"
        expect(actual).to.equal(expected)
    })
    it("should return false if there are any duplicate characters in the abc", ()=>{
        const input = "message"
        const alphabet = "abcabc"
        const actual = substitution(input,alphabet)
        expect(actual).to.be.false;
    })
    it("should maintain spaces and ignore capital letters in message before and after encoding or decoding", ()=>{
        const input = "A message"
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const actual = substitution(input, alphabet)
        const expected = "p ykrrpik"
        expect(actual).to.equal(expected)
    })
})