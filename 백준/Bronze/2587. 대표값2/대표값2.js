let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\n').map(Number)

let sum = 0
for (i=0;i<input.length;i++) {
  sum += input[i]
}
let avg = sum / 5
let med = input.sort()[2]
let answer = avg + '\n' + med
console.log(answer)