let fs = require('fs')
let [h, m] = fs.readFileSync('./dev/stdin').toString().split(' ').map(Number)

alarm = h * 60 + m - 45
if (alarm < 0) {
    alarm += 24 * 60
}
  hour = parseInt(alarm/60)
  minute = alarm % 60
  console.log(hour, minute)