let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let arr = []
for (i=0;i<3;i++) {
  arr[i] = input[i].split(' ')
}

if (arr[0][0] === arr[1][0]) {
    x = arr[2][0]
  } else if (arr[0][0] === arr[2][0]) { x = arr[1][0]} else {
  x = arr[0][0]
  }

if (arr[0][1] === arr[1][1]) {
  y = arr[2][1]
  } else if (arr[0][1] === arr[2][1]) { y = arr[1][1]} else {
  y = arr[0][1]
  }

console.log(`${x} ${y}`)