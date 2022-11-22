const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ').map(Number)

let answer = input.map(el => el**2).reduce((a,b) => (a + b)) % 10
console.log(answer)