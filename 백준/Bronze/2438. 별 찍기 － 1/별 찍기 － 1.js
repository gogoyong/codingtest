let fs = require('fs')
let n = fs.readFileSync('dev/stdin').toString()

let answer=''
for (i=1;i<=n;i++) {
  for (j=1;j<=i;j++) {
    answer += '*'
  }
  answer += '\n'
}

console.log(answer)