let fs = require('fs')
let n = fs.readFileSync('./dev/stdin').toString()

let answer=1;
if (n > 0) {
  function recursiveFunction(i) {
    if (i == n) return;
    answer *= i
    recursiveFunction(i + 1)
  }
  recursiveFunction(1);
  console.log(answer*n)
} else {
  console.log(1)
}