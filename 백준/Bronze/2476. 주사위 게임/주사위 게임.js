const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')
const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').map(Number))

let ans = []
for (i=0; i<n; i++) {
  let [a,b,c] = arr[i]
  if (a === b && a === c) {
    ans.push(a*1000 + 10000)
  } else if ((a === b && a !== c) || (a !== b && a === c)) {
    ans.push(a*100 + 1000)
  } else if (b === c && b !== a){
    ans.push(b*100 + 1000)
  }
    else {
    ans.push(Math.max(a,b,c) * 100)
  }
}
console.log(Math.max(...ans))