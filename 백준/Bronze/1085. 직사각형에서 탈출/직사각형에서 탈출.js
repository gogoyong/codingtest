let fs = require('fs')
let [x, y, w, h] = fs.readFileSync('dev/stdin').toString().split(' ').map(Number)

a = w - x
b = h - y
min = Math.min(a,b,x,y)
console.log(min)