let fs = require('fs')
let n = Number(fs.readFileSync('./dev/stdin').toString())

for (i=1;i<10;i++){
  console.log(`${n} * ${i} = ${i*n}`)
}