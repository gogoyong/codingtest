const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim()

const n = Number(input)

for (i=1; i<=n; i++) {
  console.log('*'.repeat(i))
}
for (i=n-1; i>0; i--) {
  console.log('*'.repeat(i))
}