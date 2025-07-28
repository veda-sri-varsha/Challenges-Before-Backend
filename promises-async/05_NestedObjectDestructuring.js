// 5. Nested Object Destructuring
//  Problem Statement: Given a nested object, destructure to extract 'city' and 'email'.
//  Goal: Log the extracted values separately.
//  Example Output:
//  City: Hyderabad
//  Email: lokesh@mail.com

const user = {
  name: 'Lokesh',
  address: {
    city: 'Hyderabad',
    state: 'Telangana',
  },
  contact: {
    email: 'lokesh@mail.com',
    phone: '1234567890',
  },
};

const { address: { city }, contact: { email } } = user;

console.log(`City: ${city}`); //City: Hyderabad
console.log(`Email: ${email}`); //Email: lokesh@mail.com