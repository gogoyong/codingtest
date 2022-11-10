let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n')

let answer = ''
for (i=0; i<input.length; i++) {
  answer += input[i]
  if (i<input.length-1) {
    answer += '\n'
  }
}
console.log(answer)