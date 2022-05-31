const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '18108/input.txt';
let input = fs.readFileSync(filePath).toString();

const a = parseInt(input)
console.log(input-543)