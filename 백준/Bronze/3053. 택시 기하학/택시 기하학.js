let fs = require('fs')
let input = Number(fs.readFileSync('dev/stdin').toString())

a = (input ** 2 * Math.PI).toFixed(6)
b = (input ** 2 * 2).toFixed(6)
console.log(`${a} \n${b}`)