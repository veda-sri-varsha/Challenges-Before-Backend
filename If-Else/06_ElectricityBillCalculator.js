const units = 120;
let bill = 0;

if (units <= 50) {
  bill = units * 3;
} else if (units <= 150) {
  bill = (50 * 3) + (units - 50) * 5;
} else if (units <= 300) {
  bill = (50 * 3) + (100 * 5) + (units - 150) * 7;
} else {
  bill = (50 * 3) + (100 * 5) + (150 * 7) + (units - 300) * 10;
}

console.log("Electricity Bill: ₹" + bill); //Electricity Bill: ₹500
