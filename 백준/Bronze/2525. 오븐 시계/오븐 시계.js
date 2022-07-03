let fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().split('\n')

let [h, m] = input[0].split(' ').map(Number)
let cook = Number(input[1])

answer = h*60 + m + cook
hr = parseInt(answer/60)
min = answer % 60
if (answer >= 24*60) {
  hr -= 24
}
  console.log(hr, min)