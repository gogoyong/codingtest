const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

const t = Number(input[0])
let arr = []
for (i=1; i<=t; i++) {
  arr.push(input[i].split(' ').map(Number))
}

let floor = 0
let room = 0
for (i=0; i<t; i++) {
  let n = arr[i][2]
  let h = arr[i][0]
  if (n % h !==0) {
    floor = n % h
    room = Math.floor(n/h) + 1
  } else {
    floor = h
    room = n/h
  }
  if (room < 10) {
    console.log(`${floor}0${room}`)
  } else {
  console.log(`${floor}${room}`)
  }
}