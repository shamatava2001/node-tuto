const buffer = new Buffer.from("12345678");

buffer.write("abgd");

console.log(buffer); 
console.log(buffer.toJSON());
console.log(buffer.toString());