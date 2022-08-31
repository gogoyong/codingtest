let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString()

let n = Number(input)
let current = n
let cnt = 1;

while (true) {
  let str = current + '';
  if (current<10) str = '0' + str;
  let first = Number(str[0]);
  let second = Number(str[1]);
  current = Number(str[1]) * 10 + (first + second) % 10;
  if (current == n) break;
  cnt++;
}

console.log(cnt)