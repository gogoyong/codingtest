const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim()

const n = Number(input)

for (i=1;i<n;i++) {
  console.log(' '.repeat(n-i) + '*'.repeat(2*i-1))
}
for (i=n;i>0;i--) {
  console.log(' '.repeat(n-i) + '*'.repeat(2*i-1))
}