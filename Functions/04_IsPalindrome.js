// 4. Is Palindrome
//  Write a function `isPalindrome(str)` that checks if the given string is a palindrome.
//  Ignore casing and spaces.
//  Example:
//   isPalindrome("Racecar") => true

function isPalindrome(str) {
  str = str.toLowerCase().split(' ').join('');
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Hello")); // false