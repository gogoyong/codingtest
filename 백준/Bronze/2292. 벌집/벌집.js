let fs = require('fs');
let input = Number(fs.readFileSync('./dev/stdin').toString().trim())

let sum = 1;
let i = 1
while (sum < input) {
  sum += 6*i
  i++
}
console.log(i)