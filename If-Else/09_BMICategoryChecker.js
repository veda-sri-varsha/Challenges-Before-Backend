const weight = 70; // in kg
const height = 1.75; // in meters

const bmi = weight / (height * height);
console.log("BMI:", bmi.toFixed(2));

let category = "";

if (bmi < 18.5) {
  category = "Underweight";
} else if (bmi < 25) {
  category = "Normal";
} else if (bmi < 30) {
  category = "Overweight";
} else {
  category = "Obese";
}

console.log("Category:", category);

// BMI: 22.86
// Category: Normal