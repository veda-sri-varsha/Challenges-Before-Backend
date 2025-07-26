const day = 2;
const month = 5;
const year = 2003;

const date = new Date(year, month - 1, day);

if (date.getDate() == day && date.getMonth() == month - 1 && date.getFullYear() == year) {
  console.log("Valid Date");
} else {
  console.log("Invalid Date");
}

// Output: Valid Date
