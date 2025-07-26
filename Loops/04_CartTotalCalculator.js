// 4. Cart Total Calculator
// Input: Array of items with price and quantity.
// Goal: Calculate and return total cart value using a loop.

const cart = [
  { item: "Laptop", price: 50000, quantity: 1 },
  { item: "Mouse", price: 1000, quantity: 2 },
  { item: "Bag", price: 2000, quantity: 1 }
];

let total = 0;

for (let i = 0; i < cart.length; i++) {
  let item = cart[i];
  let itemTotal = item.price * item.quantity;
  total = total + itemTotal;
}


// for (let i = 0; i < cart.length; i++) {
//   const product = cart[i];
//   total += product.price * product.quantity;
// }

console.log("Total Cart Value: ₹" + total);

