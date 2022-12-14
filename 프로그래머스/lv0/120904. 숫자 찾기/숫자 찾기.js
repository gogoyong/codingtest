function solution(num, k) {
    const str = num.toString().split('')
    let answer = 0
    for (i=0; i<str.length; i++) {
        if (str[i] === k.toString()) {
            answer = i+1
            break;
        } 
    } 
    if (answer < 1) {
        answer = -1
    }
    return answer
}