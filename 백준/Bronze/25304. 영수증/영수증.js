let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let x = Number(input[0])
let n = Number(input[1])
let result = 0
for (i=0;i<n;i++) {
  arr = input[i+2].split(' ')
  a = arr[0]
  b = arr[1]
  result += a*b
}
if (x===result) {
  console.log('Yes')
} else {
  console.log('No')
}