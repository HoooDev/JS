const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '10926/input.txt';
let input = fs.readFileSync(filePath).toString().trim();

console.log(`${input}??!`)