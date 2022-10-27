let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n')

let arr = []
let maxArr = []
for (i=0; i<9; i++) {
  arr[i] = input[i].split(' ').map(Number)
  maxArr.push(Math.max(...arr[i]))
}
let [max, x, y] = [0, 0, 0]
max = Math.max(...maxArr)
x = maxArr.indexOf(max) + 1
y = arr[x-1].indexOf(max) + 1
console.log(max + '\n' + x + ' ' + y)