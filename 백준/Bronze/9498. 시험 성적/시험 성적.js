let fs = require('fs')
let i = fs.readFileSync('dev/stdin').toString()

if (i >= 90) {
  console.log('A')
} else if (i >=80) {
  console.log('B')
} else if (i >= 70) {
  console.log('C')
} else if ( i>= 60) {
  console.log('D')
} else {
  console.log('F')
}