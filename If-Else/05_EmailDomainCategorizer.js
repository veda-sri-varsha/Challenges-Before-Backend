const email = "example@gmail.com";

const domain = email.split("@")[1]; 

if (domain.includes("gmail")) {
  console.log("Email Service: Gmail");
} else if (domain.includes("yahoo")) {
  console.log("Email Service: Yahoo");
} else if (domain.includes("outlook") || domain.includes("hotmail") || domain.includes("live")) {
  console.log("Email Service: Outlook");
} else {
  console.log("Email Service: Other");
}

// Output: Email Service: Gmail
