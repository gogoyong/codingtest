function solution(n) {
    let num = Number(n.toString())
    let answer = 0;
    for (i=1;i<=num;i++) {
        if (num % i === 0) {
            answer += i
        }
    }
    return answer;
}