// 5. Database Insert Sim
// Input: Array of records.
// Goal: Loop and simulate 'Inserting...' for each. Skip if record is invalid.

const records = ["Alice", "", "Bob", null, "Cherry", undefined];

for (let i = 0; i < records.length; i++) {
  const record = records[i];

  if (record) {
    console.log("Inserting", record);
  }
}

