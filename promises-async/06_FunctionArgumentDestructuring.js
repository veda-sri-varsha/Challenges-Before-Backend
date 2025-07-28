//  6. Function Argument Destructuring
//  Problem Statement: Write a function that accepts an object and destructures its properties inside the
//  parameter list.
//  Goal: Use template literals to print a formatted message with name and age.
//  Example Output:
//  User Info: Name is Lokesh and age is 24.

function Userdata({ name, age }) { 
  console.log(`User data: Name is ${name} and age is ${age}.`);
}                   

const user = { name: 'Lokesh', age: 22 };
Userdata(user); // Output: User Info: Name is Lokesh and age is

// Problem Statement:
// Write a function that takes a user object with nested address info and prints this:

// Name: Veda, City: Hyderabad, Country: India

function UserDetails({ name, address: { city, country } }) {
  console.log(`Name: ${name}, City: ${city}, Country: ${country}`);
}

const person = {
  name: "Veda",
  address: {
    city: "Hyderabad",
    country: "India"
  }
};

UserDetails(person); // Output: Name: Veda, City: Hyderabad, Country: India
