let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let arr = []
for (i=0; i<input.length;i++) {
  arr[i] = input[i].split(' ').map(Number)

  let a = arr[i][0]
  let b = arr[i][1]
  if (a === 0 && b ===0) {
    break
  } else {
    console.log(a + b)
  }
}