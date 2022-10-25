let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n').map(Number);

let arr = []
for (i=1; i<=30; i++) {
  arr.push(i)
}

let answer = arr.filter(x => !input.includes(x))
for (i=0; i<answer.length; i++) {
  if (i !== answer.length) {
    console.log(answer[i])
  }
}