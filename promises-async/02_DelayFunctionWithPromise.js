// 2. Delay Function with Promise
//  Problem Statement: Write a function delay(ms) that returns a Promise which resolves after ms
//  milliseconds.
//  Goal: Use await delay(3000) to pause execution for 3 seconds.
//  Example Usage:
//  await delay(3000);
//  console.log("3 seconds passed!");
//  Output:
//  (wait 3 seconds)
//  3 seconds passed!

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

async function run() {
    await delay(3000);
    console.log("3 seconds passed!");
}
run().catch(console.error);
