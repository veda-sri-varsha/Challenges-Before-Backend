// 8. Pagination Logic
//  Input: Large array of data, current page, and limit.
// Goal: Return paginated data using slice or loop.

const data = [
  "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
  "Item 6", "Item 7", "Item 8", "Item 9", "Item 10",
  "Item 11", "Item 12", "Item 13", "Item 14", "Item 15"
];

const currentPage = 2;
const limit = 5;

const start = (currentPage - 1) * limit;
const end = start + limit;

const paginatedData = [];

for (let i = start; i < end && i < data.length; i++) {
  paginatedData.push(data[i]);
}

console.log("Page", currentPage, "Data:", paginatedData);
// Output:
// Page 2 Data: [ 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10' ]
