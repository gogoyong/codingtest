let fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().split('')

answer = input.sort((a,b) => b-a)
console.log(answer.join(''))