const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt");

const writeableStream = fs.createWriteStream("file2.txt");

readableStream.on("data", (chunk) => {
    console.log(chunk);
    writeableStream.write(chunk);
})