let fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().split('\n')
const t = Number(input[0])

for (i=1; i<=t; i++) {
  let numbers = input[i].split(' ').map(Number)
  console.log(numbers[0]+numbers[1])
}