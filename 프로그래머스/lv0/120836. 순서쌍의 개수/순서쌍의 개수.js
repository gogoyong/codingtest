function solution(n) {
    let answer = 0
    for (i=1; i<=n; i++) {
        answer += n % i === 0 ? 1 : 0 
    }
    return answer;
}