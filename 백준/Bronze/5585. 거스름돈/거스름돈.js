const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim()

let n = 1000 - Number(input)
const coin = [500, 100, 50, 10, 5, 1]

let cnt = 0
for (let x of coin) {
  if (n/x >= 1) {
    cnt += parseInt(n/x)
    n -= x*parseInt(n/x)
  } 
}
console.log(cnt)