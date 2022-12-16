const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ').map(Number)

const [k,n,m] = input
const ans = k*n-m
console.log(ans>=0 ? ans : 0)