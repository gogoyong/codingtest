let fs=require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

const a = input[0]
const b = input[1]
const bSplit = b.split('')

console.log(a*bSplit[2])
console.log(a*bSplit[1])
console.log(a*bSplit[0])
console.log(a*b)