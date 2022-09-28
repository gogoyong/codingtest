function solution(a, b) {
    if (a === b) {
        return a
    } else {
        let diff = b - a
        if (diff < 0) {
            diff = -diff
        }
        let count = 0
        for (i=0;i<=diff;i++) {
            count += i
        }
        if (b > a) {
            answer = count + a * (diff+1) 
        } else {
            answer = count + b * (diff+1)
        }
        return answer
    }
}