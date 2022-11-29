const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

const [m,n] = input.map(Number)
const a = parseInt(m**0.5)
const b = parseInt(n**0.5)

let sum = 0
if (a !== m**0.5) {
  min = (a+1) ** 2
  for (i=a+1; i<=b; i++) {
    sum += i**2
  }
} else {
  min = a ** 2
  for (i=a; i<=b; i++) {
    sum += i**2
  }
}

if (a !== b) {
  console.log(sum + '\n' + min)
} else console.log('-1')