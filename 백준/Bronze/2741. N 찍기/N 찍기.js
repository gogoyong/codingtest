let fs = require('fs')
let n = fs.readFileSync('dev/stdin').toString()

let answer = ''
for (i=1;i<=n;i++) {
  answer += i + '\n'
}
console.log(answer)