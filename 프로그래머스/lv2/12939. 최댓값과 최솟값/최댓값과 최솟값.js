function solution(s) {
    let answer = '';
    arr = s.split(' ').map(Number)
    answer += Math.min(...arr) + ' ' + Math.max(...arr)
    return answer;
}