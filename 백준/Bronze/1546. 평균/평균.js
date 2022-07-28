let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

n = input[0]
arr = input[1].split(' ').map(Number)

max = Math.max(...arr)
for (i=1;i<=n;i++) {
  arr[i-1] = arr[i-1] / max * 100
}
avg = arr.reduce((a,c) => a+c)/arr.length
console.log(avg)