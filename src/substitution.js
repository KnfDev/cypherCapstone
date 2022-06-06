// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const abc = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input, scrambled, encode = true) {
    let result = "";
    if (!scrambled) return false;
    if (new Set(scrambled).size != 26) {
      return false;
    }
    //go through each letter of input

    for (let i = 0; i < input.length; i++) {
      let inputLetter = input[i].toLowerCase(); //assigning an index to 'input' message

      //figure out index of each letter
      let normalIndex = abc.indexOf(inputLetter);
      let scrambledIndex = scrambled.indexOf(inputLetter)
      if (encode === true) {
        let answer = scrambled[normalIndex]; // grabbing the value of normal index from scrambled (scrambled is referencing the chest of drawers, and each drawer is an index position)
        //look up each letter to see what that letter stands for
        if (inputLetter === " ") {
          answer = " ";
        }
        result += answer;
      } else {
        let answer = abc[scrambledIndex]
        if(inputLetter === " "){
          answer = " "
        }
        result += answer
      }
    }
    return result;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
// a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
// 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

// m  e  s  s  a  g  e
// 12 4  18 18 0  6  4

// p  l  m  o  k  n  i  j  b  u  h  v  y  g  c  t  f  x  r  d  z  e  s  w  a  q
// 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

//y  k  r  r p i k
//12 4 18 18 0 6 4
