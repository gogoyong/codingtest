let fs=require('fs')
let input=fs.readFileSync('dev/stdin').toString().split('\n')
let array = input[1].split(' ').map(Number)
let max = Math.max(...array)
let min = Math.min(...array)

console.log(`${min} ${max}`)