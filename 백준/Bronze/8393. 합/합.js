let fs = require('fs')
let n = Number(fs.readFileSync('./dev/stdin').toString())

let answer = 0
for (i=1;i<=n;i++) {
  answer +=i
}
console.log(answer)