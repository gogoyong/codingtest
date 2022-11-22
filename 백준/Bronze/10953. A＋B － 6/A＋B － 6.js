const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n')

const t = Number(input[0])
for (i=1;i<=t;i++) {
  let [a,b] = input[i].split(',').map(Number)
  console.log(a+b)
}