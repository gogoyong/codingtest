const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1)

for (i=0; i<n; i++) {
  console.log(arr[i][0] + arr[i][arr[i].length-1])
}