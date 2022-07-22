let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let answer=''
let arr = []
for (i=0;i<input.length;i++) {
  arr[i] = input[i].split(' ').map(Number)
  let a = arr[i][0]
  let b = arr[i][1]
  if (i<input.length-1) {
    answer += a + b + '\n'
  } else {
  answer += a + b
  }
}
console.log(answer)