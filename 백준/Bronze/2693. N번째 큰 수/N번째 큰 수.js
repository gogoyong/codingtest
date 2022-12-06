const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

const t = Number(input[0])
const n = 3 - 1
const arr = input.slice(1,t+1)
const array = arr.map(el => el.split(' ').map(Number).sort((a,b) => b-a)).map(el => el[n])
console.log(array.join('\n'))