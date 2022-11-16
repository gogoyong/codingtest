let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString()
let phone = {
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
}
let answer = 0;
for (i=0; i<input.length; i++) {
  for (j=2; j<10; j++) {
    if (phone[j].includes(input[i])) {
      answer += j+1
    }
  }
}
console.log(answer)