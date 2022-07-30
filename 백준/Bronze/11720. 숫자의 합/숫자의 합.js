let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let n = Number(input[0])
arr = input[1].split('').map(Number)
ans = 0
for (i=0;i<n;i++) {
  ans += arr[i]
}
console.log(ans)