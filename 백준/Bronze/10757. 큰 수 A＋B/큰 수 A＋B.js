let fs = require('fs')
let [a, b] = fs.readFileSync('dev/stdin').toString().split(' ')
answer = BigInt(a)+ BigInt(b)
console.log(answer.toString())