// 8. Generate Random OTP
//  Write a function `generateOTP()` that returns a random 6-digit number as a string.
//  Example:
//   generateOTP() => "392817"

function generateOTP() {
  let otp = '';

  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10); 
  }

  return otp;
}

console.log(generateOTP()); // Output: A random 6-digit number