function solution(denum1, num1, denum2, num2) {
    let answer = [];
    let bunja = denum1 * num2 + denum2 * num1
    let bunmo = num1 * num2
    let bae = 1
    for (i=1; i<=bunja; i++) {
        if (bunja % i === 0 && bunmo % i === 0) {
            bae = i
        }
    }
    answer.push(bunja/bae, bunmo/bae)
    return answer;
}