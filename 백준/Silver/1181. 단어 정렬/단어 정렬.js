const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1,n+1)
arr.sort()
arr.sort((a,b) => a.length - b.length)

for (i=0; i<arr.length; i++) {
  if (arr[i] !== arr[i+1]) {
    console.log(arr[i])
  }
}
