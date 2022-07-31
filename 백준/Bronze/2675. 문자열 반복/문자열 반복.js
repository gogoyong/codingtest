let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let n = Number(input[0])
let answer=''
for(i=0;i<n;i++){
  arr = input[i+1].split(' ')
  r = Number(arr[0])
  s = arr[1].split('')
  for (c=0;c<s.length;c++) {
    for (j=0;j<r;j++){
      answer += s[c]
    }
  }
  if (i<n-1) {
    answer += '\n'   
  }
}
console.log(answer)