const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ').map(Number)

const [n, k] = input
let arr = []
for (i=0; i<=n; i++) {
  if (n % i === 0) {
    arr.push(i)
  }
}
let answer = 0
if (arr.length >= k) {
  answer = arr[k-1]
}
console.log(answer)