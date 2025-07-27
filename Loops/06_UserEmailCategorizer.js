// 6. User Email Categorizer
//  Input: List of emails.
//  Goal: Separate into Gmail, Yahoo, and Others using loop and string conditions.

const email = "vedasri@yahoo.com"; 
let type;

if (email.includes("@gmail.com")) {
  type = "Gmail";
} else if (email.includes("@yahoo.com")) {
  type = "Yahoo";
} else if (email.includes("@outlook.com")) {
  type = "Outlook";
} else {
  type = "Other";
}

console.log("Email Type:", type); // Output: Email Type: Yahoo
