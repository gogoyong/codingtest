const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim()

const n = input
let front = []
let back = []

if (n.length % 2 === 0) {
    for (i=0; i<n.length/2; i++) {
      front.push(Number(n[i]))
    }
    for (i=n.length/2; i<n.length; i++)     {
        back.push(Number(n[i]))
    }
}
const sum1 = front.reduce((a,b) => a+b)
const sum2 = back.reduce((a,b) => a+b)
answer = (sum1 === sum2) ? 'LUCKY' : "READY"
console.log(answer)