const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

const arr = input.slice(0,input.length-1)
let answer = []

for (i=0; i<arr.length; i++) {
  let n = arr[i].length
  switch (n) {
    case 1:
      answer.push('yes')
      break;
    case 2:
      if (arr[i][0] === arr[i][1]) {
        answer.push('yes')
      } else { answer.push('no')}
      break;
    case 3:
      if (arr[i][0] === arr[i][2]) {
        answer.push('yes')
      } else {answer.push('no')}
      break;
    case 4:
      if (arr[i][0] === arr[i][3] && arr[i][1] === arr[i][2]) {
        answer.push('yes')
      } else {answer.push('no')}
      break;
    default:
      if (arr[i][0] === arr[i][4] && arr[i][1] === arr[i][3]) {
        answer.push('yes')
      } else {answer.push('no')}
  }
}
console.log(answer.join('\n'))