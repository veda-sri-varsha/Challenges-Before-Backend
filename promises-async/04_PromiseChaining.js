// 4. Promise Chaining Example
//  Problem Statement: Create three Promises that each resolve sequentially with values 'One', 'Two',
//  'Three'.
//  Goal: Log them using .then() chaining.
//  Example Output:
//  One
//  Two
//  Three

Promise.resolve("One")
    .then((res) => {
        console.log(res);
        return "Two";
    })
    .then((res) => {
        console.log(res);
        return "Three";
    })
    .then((res) => {
        console.log(res);
    });


//2nd Method

// const promiseOne = new Promise((resolve) => {
//     resolve("One");
// });
// const promiseTwo = new Promise((resolve) => {
//     resolve("Two"); 
// });
// const promiseThree = new Promise((resolve) => {
//     resolve("Three");
// });

// promiseOne
//     .then((res) => {   
//         console.log(res);
//         return promiseTwo;
//     }
// )
//     .then((res) => {
//         console.log(res);
//         return promiseThree;
//     }
// )
//     .then((res) => {
//         console.log(res);
//     }
// )
//     .catch((err) => {
//         console.error("Error:", err);
//     }
// );