let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

n = Number(input[0])
v = Number(input[2])
arr = input[1].split(' ').map(Number)

let cnt = 0;
for (i=0; i<n; i++) {
  if (v === arr[i]) {
    cnt += 1
  }
}

console.log(cnt)