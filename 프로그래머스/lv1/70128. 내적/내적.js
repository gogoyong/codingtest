function solution(a, b) {
    let answer = 0
    let arr = []
    for (i=0; i<a.length; i++) {
        arr[i] = a[i]*b[i]
        answer += arr[i]
    }
    return answer;
}