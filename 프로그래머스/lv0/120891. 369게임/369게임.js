function solution(order) {
    return order.toString().split('').filter(el => el.includes('3') || el.includes('6') || el.includes('9')).length
}