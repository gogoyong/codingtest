const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ')

const [n,m] = input.map(Number)
console.log(n*m-1)