//  9. Password Strength Filter
//  Input: List of passwords.
//  Goal: Return passwords that are at least 8 characters and contain a digit.

const passwords = [
    "password123",
    "12345678",
    "short",
    "longpassword"
];

const strongPasswords = [];
// for (let i = 0; i < passwords.length; i++) {
//     const password = passwords[i];

//     if (password.length >= 8 && /\d/.test(password)) {
//         strongPasswords.push(password);
//     }
// }

for (let i = 0; i < passwords.length; i++) {
  const password = passwords[i];
  let hasDigit = false;

  for (let j = 0; j < password.length; j++) {
    if (password[j] >= '0' && password[j] <= '9') {
      hasDigit = true;
      break;
    }
  }

  if (password.length >= 8 && hasDigit) {
    strongPasswords.push(password);
  }
}

console.log("Strong Passwords:", strongPasswords);