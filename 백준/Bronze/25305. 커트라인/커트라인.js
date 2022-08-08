let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [n, k]=input[0].split(' ')
arr = input[1].split(' ').map(Number)
arr.sort((a,b) => (b-a))
console.log(arr[k-1])