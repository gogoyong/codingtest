const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim()

const array = input.split('')
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const answerArray = new Array(26).fill(0)

for (i=0; i<array.length; i++) {
  for (j=0; j<alphabet.length; j++) {
    if (array[i] === alphabet[j]) {
      answerArray[j] += 1
    }
  }
}
console.log(answerArray.join(' '))