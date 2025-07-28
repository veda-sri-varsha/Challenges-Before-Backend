//  9. Template Literals for Sentence Construction
//  Problem Statement: Given two variables, name and role, use template literals.
//  Goal: Print a sentence like: 'Hey, I'm Lokesh and I'm working as a Backend Developer'.
//  Example Output:
//  Hey, I'm Lokesh and I'm working as a Backend Developer.

const name1 = 'Lokesh';
const role1 = 'Backend Developer';

const name2 = 'Vedasri';
const role2 = 'Frontend Developer';

const sentence = `Hey, we're ${name1} (${role1}) and ${name2} (${role2}), working together as Full Stack Developers.`;
console.log(sentence);

// Output: Hey, we're Lokesh (Backend Developer) and Vedasri (Frontend Developer), 
// working together as Full Stack Developers.
