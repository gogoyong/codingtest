const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ')
const [a,b,c,d] = input
const answer = Number(a+b) + Number(c+d)
console.log(answer)