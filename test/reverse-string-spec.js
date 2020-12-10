const reverseString = require('../problems/reverse-string.js');

const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

describe("reverseString", () => {
    context("if the argument is a valid string", () => {
        it("should reverse the passed in string", () => {
            let reversed = reverseString("fun");
            let expected = "nuf";

            expect(reversed).to.equal(expected);
        });
    })

    context("if the argument is not valid", () => {
        it("should throw a Type Error" , () => {
            expect(() => reverseString(5)).to.throw(TypeError); 
        });
    });
    
})