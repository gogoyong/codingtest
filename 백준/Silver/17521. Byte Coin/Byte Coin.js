const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n')

let [n, w] = input[0].split(' ').map(Number)
let arr = []
for (i=1; i<=n; i++) {
  arr.push(Number(input[i]))
}

for (i=0; i<n-1; i++) {
  if (arr[i] < arr[i+1]) {
    let cnt = parseInt(w/arr[i])
    w += cnt * (arr[i+1] - arr[i])
  } 
}

console.log(w)