function solution(s) {
    let answer = '';
    arr = s.split(' ')
    for (i=0; i<arr.length; i++) {
        for (j=0; j<arr[i].length; j++) {
            if (j % 2 === 0) {
                answer += arr[i][j].toUpperCase()
            } else answer += arr[i][j].toLowerCase()
        } if (i < arr.length - 1) {
            answer += ' '
        }
    }
    return answer;
}