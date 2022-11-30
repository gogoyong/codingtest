const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

const t = Number(input[0])
const arr = input.slice(1,1+t)

for (i=0; i<t; i++) {
  let words = arr[i].split(' ')
  let answer = words.map((word) => word.split('').reverse().join('')).join(' ')
  console.log(answer)
}