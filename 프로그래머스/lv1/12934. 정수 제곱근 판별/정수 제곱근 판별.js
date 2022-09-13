function solution(n) {
    let answer = 0;
    let o = Number(n.toString())
    if ((o ** 0.5 % 1) === 0) {
        answer = ((o ** 0.5) + 1) ** 2
    } else {
        answer = -1
    }
    return answer;
}