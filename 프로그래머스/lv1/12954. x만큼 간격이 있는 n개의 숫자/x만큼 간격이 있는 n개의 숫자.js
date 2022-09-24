function solution(x, n) {
    let answer = [];
    answer.push(x)
    for (i=1;i<n;i++) {
        answer.push(x+x*i)
    }
    return answer;
}