const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
console.log(input[1].split(' ').map(Number).filter(el => el === n).length)