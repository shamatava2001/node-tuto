const fs = require('node:fs');

// ფაილის წაკითხვის და ბუფერში კონტენტის ჩაწერის სინქრონული(blocking) ვარიანტი
const fileContent = fs.readFileSync('./file.txt');
const fileContentReadble = fs.readFileSync('./file.txt', 'utf-8');
    // console.log(fileContent, fileContentReadble);

// ფაილის წაკითხვის და ბუფერში კონტენტის ჩაწერის ასინქრონული(non-blocking) ვარიანტი
fs.readFile('./file.txt', (err, data) => {
    if(err) {
        // console.log(err);
    } else {
        // console.log(data);
    }
})

// ფაილში კონტენტის ჩაწერის სინქრონული ვარიანტი
fs.writeFileSync('./greet.txt', 'hello world');

// ფაილში კონტენტის ჩაწერის(ჩამატების) ასინქრონული ვარიანტი
fs.writeFile('./greet.txt', 'Hello Vishwas', { flag: 'a' }, (err) => {
    if(err) console.log(err);
})