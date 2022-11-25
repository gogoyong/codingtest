function solution(price) {
    const p = price / 100000
    if (p >= 5) {
        price *= 0.8
    } else if (p >= 3) {
        price *= 0.9
    } else if (p >= 1) {
        price *= 0.95
    }
    return parseInt(price);
}