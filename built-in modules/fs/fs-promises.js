const fs = require("node:fs/promises");

// წაკითხვა promises-გამოყენებით
// fs.readFile("./file.txt", "utf-8")
// .then(data => console.log(data))
// .catch(err => console.log(err));

// წაკითხვა async, await-ის გამოყენებით
async function readFile() {
    try {
        const data = await fs.readFile("./file.txt", "utf-8");
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readFile();

console.log("after async func");