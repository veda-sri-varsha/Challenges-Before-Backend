//  1. Basic Promise Usage
//  Problem Statement: Create a Promise that resolves after 2 seconds.
//  Goal: Print 'Hello after 2 seconds' after the Promise resolves.
//  Example Output:
//  (wait 2 seconds)
//  Hello after 2 seconds

const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello after 2 seconds");
  }, 2000); 
});

myPromise.then((message) => {
  console.log(message);
});

// Problem Statement:
// Create a Promise that resolves after 3 seconds 
// with the message "Data loaded successfully", and 
// then print that message.

const dataPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data loaded successfully");
  }, 3000);
});

dataPromise.then((msg) => console.log(msg));
