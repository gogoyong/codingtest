function solution(n) {
    let answer = 0;
    let arr = []
    for (i=1;i<n;i++) {
        if (n % i === 1) {
            arr.push(i) 
        } else answer = n-1
    }
    return answer = Math.min(...arr)
}