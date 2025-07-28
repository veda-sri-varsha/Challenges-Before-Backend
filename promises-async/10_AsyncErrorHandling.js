//  10. Async/Await with Error Handling
//  Problem Statement: Create an async function that throws an error.
//  Goal: Use try...catch to handle the error gracefully and print a custom error message.
//  Example Output:
//  An error occurred: Something went wrong!

async function fetchData() {
  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    console.log("An error occurred:", error.message);
  }
}

fetchData();


//2nd Method 
// async function riskyOperation() {
//     throw new Error("Something went wrong!");
// }   

// async function handleRequest() {
//     try {
//         await riskyOperation();
//     } catch (error) {
//         console.error(`An error occurred: ${error.message}`);
//     }
// }

// handleRequest();

