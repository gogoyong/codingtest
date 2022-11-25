function solution(n, k) {
    let answer = 12000 * n
    if (n<10) {
        answer += 2000 * k
    } else {
        answer += 2000 * (k-parseInt(n/10))
    }
    return answer;
}