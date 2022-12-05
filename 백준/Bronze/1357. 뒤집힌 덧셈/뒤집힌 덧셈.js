const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ')

input[0] = Number(input[0].split('').reverse().join(''))
input[1] = Number(input[1].split('').reverse().join(''))

const sum = input[0] + input[1]
console.log(Number(sum.toString().split('').reverse().join('')))