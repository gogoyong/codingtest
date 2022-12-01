const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

let answer = ''
for (j=0; j<15; j++) {
  for (i=0; i<5; i++) {
    if (input[i][j] !== undefined) {
      answer += input[i][j]
    }
  }
}
console.log(answer)