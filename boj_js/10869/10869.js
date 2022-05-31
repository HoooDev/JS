const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '10869/input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const a = +input[0]
const b = +input[1]
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(parseInt(a/b))
console.log(a%b)