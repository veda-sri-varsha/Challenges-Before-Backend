const age = 25;
const time = 10; // in 24-hour format

let price;

if (age < 12) {
  price = 100;
} else if (age >= 60) {
  price = 120;
} else {
  price = 150;
}

if (time < 12) {
  price = price * 0.8; // 20% discount
}

console.log("Ticket Price: ₹" + price); // Output: Ticket Price: ₹120
