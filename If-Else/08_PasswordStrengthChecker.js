const password = "Hello123@";

let hasUpper = false;
let hasLower = false;
let hasDigit = false;
let hasSpecial = false;

const specialChars = "!@#$%^&*";

for (let i = 0; i < password.length; i++) {
  const ch = password[i];

  if (ch >= 'A' && ch <= 'Z') hasUpper = true;
  else if (ch >= 'a' && ch <= 'z') hasLower = true;
  else if (ch >= '0' && ch <= '9') hasDigit = true;
  else if (specialChars.includes(ch)) hasSpecial = true;
}

if (
  password.length >= 8 &&
  hasUpper &&
  hasLower &&
  hasDigit &&
  hasSpecial
) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
}

// Output: Strong Password

// const password = "Hello123@";

// if (
//   password.length >= 8 &&
//   /[A-Z]/.test(password) &&
//   /[a-z]/.test(password) &&
//   /[0-9]/.test(password) &&
//   /[!@#$%^&*]/.test(password)
// ) {
//   console.log("Strong Password");
// } else {
//   console.log("Weak Password");
// }
