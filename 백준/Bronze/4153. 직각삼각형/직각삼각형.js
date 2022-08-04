let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let arr = []
for (i=0;i<input.length-1;i++) {
  arr[i] = input[i].split(' ')
  arr[i].sort((a,b) => a-b)
  a = arr[i][0]
  b = arr[i][1]
  c = arr[i][2]
  if (a ** 2 + b ** 2 === c ** 2) {
    console.log('right')
    } else {
    console.log('wrong')
    }
  }