// 3. Fetch User Data using Async/Await
//  Problem Statement: Use async/await to fetch data from https://jsonplaceholder.typicode.com/users.
//  Goal: Extract and log all user names.
//  Example Output:
//  Leanne Graham
//  Ervin Howell
//  Clementine Bauch
//  ...

async function fetchUserNames() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  users.forEach((user) => {
    console.log(user.name);
  });
}

fetchUserNames();
