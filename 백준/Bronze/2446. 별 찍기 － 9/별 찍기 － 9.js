const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString()

let n = Number(input)

for (i=n; i>1; i--) {
  console.log(' '.repeat(n-i) + '*'.repeat(i) + '*'.repeat(i-1))
}
for (i=1; i<n+1; i++) {
  console.log(' '.repeat(n-i) + '*'.repeat(i) + '*'.repeat(i-1))
}