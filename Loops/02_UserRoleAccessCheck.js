// 2. User Role Access Check
// Input: Array of users with roles (admin, user, guest).
// Goal: Loop and collect users who are NOT allowed to access a specific resource.


const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "guest" },
  { name: "Chai", role: "user" },
  { name: "Queen", role: "guest" }
];

const notAllowed = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].role === "guest") {
    notAllowed.push(users[i].name);
  }
}

console.log("Users not allowed:", notAllowed); 
//Users not allowed: [ 'Bob', 'Dave' ] -- Guest are not Allowed


//2nd Method:

const persons = [
  { name: "Alice", role: "manager" },
  { name: "Bob", role: "employee" },
  { name: "Cherry", role: "guest" },
  { name: "Choota Bheem", role: "visitor" },
  { name: "Sweety", role: "" }
];

const officeRoles = ["manager", "employee"];
const outsiders = [];

for (let i = 0; i < persons.length; i++) {
  const person = persons[i];

  if (!officeRoles.includes(person.role)) {
    outsiders.push(person.name);
  }
}

console.log("Access Denied to Non-Company Persons:", outsiders);
//Access Denied to Non-Company Persons: [ 'Cherry', 'Choota Bheem', 'Sweety' ]