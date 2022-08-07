let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let arr = []
for (i=0;i<input.length-1;i++) {
  arr[i] = input[i].split(' ').map(Number)
  a = arr[i][0]
  b = arr[i][1]
  if (b % a == 0) {
    console.log('factor')
  } else if (a % b == 0) {
    console.log('multiple')
  } else {
    console.log('neither')
  }
}