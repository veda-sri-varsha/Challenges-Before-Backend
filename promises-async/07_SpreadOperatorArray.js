// 7. Spread Operator with Arrays
//  Problem Statement: You have two arrays: [1, 2] and [3, 4].
//  Goal: Use the spread operator to merge them into one array.
//  Example Output:
//  [1, 2, 3, 4]

const array1 = [1, 2];
const array2 = [3, 4];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4]

//2nd method 
const a1 = [11,22,33];
const a2 = [44,55,66];
const a3 = [77,88,99,100];
const merge = a1.concat(a2, a3);
console.log(merge); // Output: [11, 22, 33, 44, 55, 66, 77, 88, 99, 100]