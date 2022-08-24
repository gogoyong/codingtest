let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let [n,m] = input[0].split(' ')
let arr = input[1].split(' ').map(Number)

let answer = 0;
for (i=0; i<n;i++) {
  for (j=i+1; j<n; j++) {
    for (k=j+1; k<n; k++) {
      sum = arr[i] + arr[j] + arr[k]
      gap = m - sum
      if (gap >= 0 && answer <= sum) {
        answer = sum
      }
     }
  }
}
console.log(answer)