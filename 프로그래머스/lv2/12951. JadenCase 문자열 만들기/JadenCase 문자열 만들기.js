function solution(s) {
    let answer = '';
    arr = s.toLowerCase().split(' ')
    arr2 = arr.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    return answer = arr2.join(' ');
}