// 1. Required Field Validator
// Input: Array of required fields and a form data object.
// Goal: Loop over required fields and return which ones are missing.

//1st method:
const requiredFields = ["name", "email", "password"];
const formData = {
  name: "Vedasri",
  password: "", // empty = missing
};

let missingFields = [];

for (let i = 0; i < requiredFields.length; i++) {
  let key = requiredFields[i];

  if (!formData[key]) {
    missingFields.push(key);
  }
}

console.log("Missing Fields:", missingFields); // Missing Fields: [ 'email', 'password' ]

//2nd  Method:

const Fields = ["name", "email", "password"];
const Data = {
  name: "Vedasri",
  password: "123",
  email:"" // empty means missing
};

const missing = Fields.filter(field => !Data[field]);

console.log("Missing Fields:", missing); // Missing Fields: [ 'email' ]
