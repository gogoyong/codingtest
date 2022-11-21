const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString()

let n = Number(input)
let answer = ''
for (i=n; i>0; i--) {
  answer += ' '.repeat(n-i) + '*'.repeat(i)
  if (i !== 1) {
    answer += '\n'
  } 
}
console.log(answer)