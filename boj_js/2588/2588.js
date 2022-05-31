const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '2588/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const A = parseInt(input[0])
const B = parseInt(input[1])
const B_0 = parseInt(input[1][2])
const B_1 = parseInt(input[1][1])
const B_2 = parseInt(input[1][0])

console.log(A * (B_0))
console.log(A * (B_1))
console.log(A * (B_2))
console.log(A * B)