const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

const [a,b] = input.map(BigInt)
console.log((a+b) + '\n' + (a-b) + '\n' + (a*b))