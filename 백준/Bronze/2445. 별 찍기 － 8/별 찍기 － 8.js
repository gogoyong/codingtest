const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim()

let n = Number(input)

for (i=1; i<=n; i++) {
  console.log('*'.repeat(i)+' '.repeat(2*n-2*i)+'*'.repeat(i))
}
for (i=n-1; i>0; i--) {
  console.log('*'.repeat(i)+' '.repeat(2*n-2*i)+'*'.repeat(i))
}