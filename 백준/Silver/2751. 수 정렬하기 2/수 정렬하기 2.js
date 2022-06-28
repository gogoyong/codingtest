let fs = require('fs')
let input=fs.readFileSync('./dev/stdin').toString().split('\n')

let n = input[0]

let arr = []
for (i=1;i<=n;i++) {
  arr[i-1] = Number(input[i])
}
arr.sort((a, b) => a-b)

let answer = ''
for (i=0; i<n; i++) {
  answer += arr[i] + '\n'
}
console.log(answer)