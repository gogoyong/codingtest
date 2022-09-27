function solution(num) {
  let answer = 0;
  let i = 0;
    if (num === 1) {
        i = 0
    } else {
        while (num !== 1) {
        if (num % 2 === 0) {
            num /= 2
            i += 1
        } else if (num % 2 === 1) {
            num = num * 3 + 1
            i += 1
            }
        }
    }
    if (i > 500) {
        return -1
    } else return i
}