function solution(hp) {
    let answer = 0
    while (hp > 4) {
        answer += parseInt(hp/5)
        hp -= parseInt(hp/5) * 5
    }
    while (hp > 2) {
        answer += parseInt(hp/3)
        hp -= parseInt(hp/3) * 3
    }
    answer += hp
    return answer;
}