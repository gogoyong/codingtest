function solution(absolutes, signs) {
    let answer = 0
    for (i=0; i<signs.length; i++) {
        if (signs[i] === false) {
            answer -= absolutes[i]
        } else { answer += absolutes[i]}
    }
    return answer;
}