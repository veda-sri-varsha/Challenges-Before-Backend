// 3. Format API Response
// Input: Array of user objects with full names.
// Goal: Return an array of { firstName, lastName } by splitting each full name.

const users = [
    { fullName: 'John Doe' },
    { fullName: 'Alice Wonderland' }
]

const formattedUsers = [];

// users.forEach(user => {
//   const [firstName, lastName] = user.fullName.split(" ");
//   formattedUsers.push({ firstName, lastName });
// });

// console.log(formattedUsers);

//  Output:[
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Alice', lastName: 'Wonderland' }
// ]

//2nd Method:
for (const user of users) {
  const nameParts = user.fullName.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts[1];

  formattedUsers.push({ firstName, lastName });
}

console.log(formattedUsers);
