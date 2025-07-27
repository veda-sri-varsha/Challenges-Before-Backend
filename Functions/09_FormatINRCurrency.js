// 9. Format Currency
//  Create a function `formatINRCurrency(num)` that formats a number as Indian currency.
//  Example:
//   formatINRCurrency(100000) => "Rs 1,00,000"

function formatINRCurrency(num) {
  return "Rs " + num.toLocaleString('en-IN');
}

console.log(formatINRCurrency(100000)); // Output: Rs 1,00,000
console.log(formatINRCurrency(12000)); // Output: Rs 12,000
