// 6. Filter Even Numbers
//  Write a function `filterEven(arr)` that returns a new array containing only even numbers from the
//  input.
//  Example:
//   filterEven([1, 2, 3, 4]) => [2, 4]

function filterEven(arr) {
//   return arr.filter(num => num % 2 === 0);

let evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }

  return evenNumbers;

}

console.log(filterEven([1, 2, 3, 4])); // Output: [2, 4]
console.log(filterEven([5, 6, 7, 8, 9])); // Output: [6, 8]

