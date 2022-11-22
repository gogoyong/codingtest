const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n').map(Number)

for (i=0; i<input.length; i++) {
  if (input[i] < 40) {
    input[i] = 40
  }
}
let answer = parseInt(input.reduce((a,b) => a+b) / input.length)
console.log(answer)