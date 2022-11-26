const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')
let answer = ''

const arr = input.map(el => el.split(' ').map(Number))

for (i=0; i<3; i++) {
  let sum = arr[i].reduce((a,b) => a+b)
  switch (sum) {
    case 1:
      answer += 'C'
      break;
    case 2:
      answer += 'B'
      break
    case 3:
      answer += 'A'
      break;
    case 4:
      answer += 'E'
      break;
    case 0:
      answer += 'D'
      break;
  }
  if (i < 2) answer += '\n'
}
console.log(answer)