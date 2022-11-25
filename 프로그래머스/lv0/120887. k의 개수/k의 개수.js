function solution(i, j, k) {
    let answer = ''
    for (a=i; a<=j; a++) {
        answer += a
    }
    return answer.split('').filter(el => el === k.toString()).length;
}