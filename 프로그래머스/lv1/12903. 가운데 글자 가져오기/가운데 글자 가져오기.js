function solution(s) {
    let answer = '';
    arr = s.split('')
    answer = s.length % 2 === 0 ? arr[s.length/2-1]+arr[s.length/2] : arr[parseInt(s.length/2)]
    return answer;
}