//  3. Find Maximum in Array
//  Create a function `findMax(arr)` that takes an array of numbers and returns the largest number.
//  Example:
//   findMax([1, 5, 3, 9]) => 9

function findmax(arr){
    if (arr.length === 0) return null; 
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;

//  if (arr.length === 0) return undefined; // Handle empty array
//   return Math.max(...arr);
// }

}

console.log(findmax([1, 5, 3, 9])); // 9