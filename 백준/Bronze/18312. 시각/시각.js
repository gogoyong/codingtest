const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ').map(Number)

let [n, k] = input

let cnt = 0
for (h=0;h<=n;h++) {
  if (h % 10 === k || parseInt(h/10) === k) {
  cnt+= 3600 }
  else {
   for (m=0;m<=59;m++) {
      if (m % 10 === k || parseInt(m/10) === k) {
      cnt+= 60}
     else {
      for (s=0;s<=59;s++) {
        if (s % 10 === k || parseInt(s/10) === k) {
        cnt+= 1}
      } 
     }
    } 
  }
}
console.log(cnt)