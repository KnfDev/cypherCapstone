// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    // your solution code here
    input = input.toLowerCase();
    let result = "";
    if (shift === 0 || shift > 25 || shift < -25) return false; //should return false if shift argument is invalid
    for (let i = 0; i < input.length; i++) {
      let inputvalue = input.charCodeAt(i);

      if (inputvalue === 32) inputvalue = " ";
      if (inputvalue > 122 || inputvalue < 97) inputvalue = input[i];
      else {
        if (encode) inputvalue += shift;
        if (!encode) inputvalue -= shift;
        if (inputvalue > 122) inputvalue -= 26;
        if (inputvalue < 97) inputvalue += 26;
        inputvalue = String.fromCharCode(inputvalue);
      }
      result += inputvalue;
    }
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
