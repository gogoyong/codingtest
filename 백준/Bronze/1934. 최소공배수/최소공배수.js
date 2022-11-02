let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

let t = Number(input[0])
let arr = []
let yak = 0
let answer = ''
for (i=1; i<=t; i++) {
  arr.push(input[i].split(' ').map(Number))
}
for (i=0; i<t; i++) {
  a = arr[i][0]
  b = arr[i][1]
  min = Math.min(a,b)
  max = Math.max(a,b)
  for (j=1; j<=min; j++) {
    if (min % j === 0 && max % j === 0) {
      yak = j}
  }
  answer += a * b / yak
  if (i < t-1) {
    answer += '\n'
  }
}
console.log(answer)