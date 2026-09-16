const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello World');
console.log('file has been written successfully');


fs.unlinkSync('example.txt');
console.log('file has been deleted successfully');