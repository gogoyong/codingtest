let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n')

const n = Number(input[0])
arr = input[1].split(' ').map(Number)
let answer = 0
max = Math.max(...arr)
min = Math.min(...arr)
console.log(max*min)