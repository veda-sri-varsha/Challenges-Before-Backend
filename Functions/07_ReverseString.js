// 7. Reverse a String
//  Create a function `reverseString(str)` that returns the reversed version of the input string.
//  Example:
//   reverseString("hello") => "olleh"

function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;

//  return str.split('').reverse().join('');

}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"