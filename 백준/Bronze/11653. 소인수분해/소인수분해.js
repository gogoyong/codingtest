let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().trim()

let arr = []
for (i=2; i<=input; i++) {
  if (input % i === 0) {
    arr.push(i)
    input /= i
    i -= 1
  }
}
let answer = ''
for (i=0; i<arr.length; i++) {
  answer += arr[i]
  if (i !== arr.length - 1) {
    answer += '\n'
  }
}
console.log(answer)