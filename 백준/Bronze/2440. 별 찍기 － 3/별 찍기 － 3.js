let fs = require('fs');
let input = Number(fs.readFileSync('./dev/stdin').toString())

for (i=input; i>=1; i--) {
  console.log('*'.repeat(i))
}