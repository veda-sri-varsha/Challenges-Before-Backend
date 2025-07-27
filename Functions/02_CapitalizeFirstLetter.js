// 2. Capitalize First Letter
//  Write a function `capitalize(str)` that returns the string with the first letter in uppercase and the rest in
//  lowercase.
//  Example:
//   capitalize("hello") => "Hello"

function capitalize(str) {
    return str.length === 0 ? str : str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("hello")); // "Hello"