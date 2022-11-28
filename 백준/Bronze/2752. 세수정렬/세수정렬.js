const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ').map(Number)

let answer = ''
input.sort((a,b) => a-b)
for (i=0; i<3; i++) {
  answer += input[i]
  if (i !== 2) {
    answer += ' '
  }
}
console.log(answer)