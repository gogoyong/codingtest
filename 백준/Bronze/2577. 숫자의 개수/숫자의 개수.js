let fs = require('fs')
let input=fs.readFileSync('./dev/stdin').toString().split('\n').map(Number)

const [a, b, c]= input
const num = a*b*c
const result=num.toString().split('').map(Number)

const count = []
for (let i=0;i<10;i++){
  count[i] = result.filter(element => element === i).length
  console.log(count[i])
}