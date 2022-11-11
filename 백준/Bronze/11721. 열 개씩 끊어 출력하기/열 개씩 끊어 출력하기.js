let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString()

if (input.length>10) {
  for (i=1; i<input.length; i+=10){
    console.log(input.substr(i-1, 10))
  }
} else console.log(input)
