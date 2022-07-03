let fs = require('fs')
let array = fs.readFileSync('./dev/stdin').toString().split(' ').map(Number)
let [a,b,c] = array

if (a===b && a===c && b===c) {
  answer = 10000+a*1000
} else if (a===b || a===c) {
  answer = 1000+a*100
} else if (b===c) {
  answer = 1000+b*100
} else {
  max = Math.max(...array)
  answer = max*100
}
console.log(answer)