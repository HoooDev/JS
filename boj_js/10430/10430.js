const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '10430/input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const A = parseInt(input[0])
const B = parseInt(input[1])
const C = parseInt(input[2])

console.log((A+B)%C)
console.log(((A%C) + (B%C))%C)
console.log((A*B)%C)
console.log(((A%C) * (B%C))%C)