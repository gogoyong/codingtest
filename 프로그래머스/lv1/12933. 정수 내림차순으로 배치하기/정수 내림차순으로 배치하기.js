function solution(n) {
    let arr = n.toString().split('')
    arr.sort((a,b) => (b-a))
    let answer = Number(arr.join(''));
    return answer;
}