const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('')

const ans = input.map((el => {
  if (el.toUpperCase() === el) {
    return el.toLowerCase()
  } else return el.toUpperCase()
})).join('')

console.log(ans)