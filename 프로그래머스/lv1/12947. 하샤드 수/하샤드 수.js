function solution(x) {
    let answer = true;
    let arr = x.toString().split('').map(Number)
    let sum = 0
    for (i=0; i<arr.length;i++) {
        sum += arr[i]
    }
    if (x % sum !== 0) {
        answer = false
    }
    return answer;
}