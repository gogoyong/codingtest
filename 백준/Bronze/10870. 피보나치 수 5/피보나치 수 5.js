let fs = require('fs')
let n = Number(fs.readFileSync('./dev/stdin').toString())

function Fibonacci(n) {
    if (n <= 1) { return n} //1 이하면 그대로 리턴하고 함수 종료
    else {
    return Fibonacci(n-2) + Fibonacci(n-1); //재귀재귀
  }
}
console.log(Fibonacci(n))