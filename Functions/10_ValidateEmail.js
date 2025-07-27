//  10. Validate Email
//  Write a function `isValidEmail(email)` that checks if the string matches a valid email pattern.
//  Example:
//   isValidEmail("user@example.com") => true

function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid@email"));    // false
console.log(isValidEmail("another.invalid@domain")); // false
console.log(isValidEmail("goodgang@yahoo.com")); // true

