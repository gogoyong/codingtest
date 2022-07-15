let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let t = Number(input[0])
let arr = []
for (i=1;i<=t;i++){
  arr[i-1] = input[i].split(' ')
  a = Number(arr[i-1][0])
  b = Number(arr[i-1][1])
  console.log(`Case #${i}: ${a+b}`)
}
