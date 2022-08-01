let fs = require('fs')
let [a, b, c] = fs.readFileSync('dev/stdin').toString().split(' ').map(Number)

x = Math.floor(a/(c-b))+1
console.log(c-b <= 0 ? -1 : x);