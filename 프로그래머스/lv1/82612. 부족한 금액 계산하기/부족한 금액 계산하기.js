function solution(price, money, count) {
    let answer = 0;
    let sum = 0;
    for (i=1; i<=count; i++) {
        sum += price * i
    }
    return money > sum ? 0 : sum - money;
}