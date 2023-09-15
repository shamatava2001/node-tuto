const path = require("node:path");

// მისამართის ბოლო ფრაგმენტი
console.log(path.basename(__filename));

// ფაილის გაფართოება
console.log(path.extname(__filename));

// მისამართის ფრაგმენტებად დაყოფა
console.log(path.parse(__filename));

// მისამართის შექმნა ფრაგმენტებიდან
const parsedPath = path.parse(__filename);
console.log(path.format(parsedPath));

// სტრიქონებიდან მისამართის შექმნა
console.log(path.join("folder1", "folder2", "../index.html"));

console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));