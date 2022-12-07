const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n').map(Number)

const filter = input.filter(el => el % 2 !== 0)

const answer = filter.length !==0 ? filter.reduce((a,b) => a+b) + '\n' + Math.min(...filter) : -1 
console.log(answer)