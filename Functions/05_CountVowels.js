//  5. Count Vowels
//  Create a function `countVowels(str)` that returns the number of vowels (a, e, i, o, u) in the input
//  string.
//  Example:
//   countVowels("hello world") => 3

function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;

//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//   return str
//     .toLowerCase()
//     .split('')
//     .filter(char => vowels.includes(char))
//     .length;

}

console.log(countVowels("hello world")); // 3
