let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().trim().split(' ').map(Number)

input.sort((a,b) => b-a)
console.log(input[1])