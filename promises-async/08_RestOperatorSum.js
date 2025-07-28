// 8. Rest Operator in Function Parameters
// Problem Statement: Create a function that accepts any number of arguments using rest parameters.
//  Goal: Return the sum of all arguments passed.
//  Example Output:
//  sumAll(1, 2, 3, 4)  10

function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10


//2nd method
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10

