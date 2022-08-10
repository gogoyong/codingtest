let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(Number)

arr = [1, 1, 2, 2, 2, 8]
let result=''
for (i=0;i<6;i++){
  if (i<5) {
  result += - input[i] + arr[i] + ' '
  } else {
    result += - input[i] + arr[i]
  }
}
console.log(result)