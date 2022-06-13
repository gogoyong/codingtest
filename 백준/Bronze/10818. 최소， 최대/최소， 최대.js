let fs=require('fs')
let input=fs.readFileSync('dev/stdin').toString().split('\n')
let array = input[1].split(' ').map(Number)
let max = Math.max.apply(null,array)
let min = Math.min.apply(null,array)

console.log(`${min} ${max}`)