let fs = require('fs')
let input=fs.readFileSync('./dev/stdin').toString().split('\n')

let [n, k] = input[0].toString().split(' ').map(Number)

let arr = []
for (i=1; i<=n; i++) {
  arr[i-1] = Number(input[i])
}

arr.sort(function(a,b) {
  return b - a;
})

let count = 0;
for (i=0;i<n;i++) {
  if (arr[i] <= k) {
    count += parseInt(k / arr[i])
    k = k % arr[i]
  } 
}
console.log(count)