function solution(array) {
    const max = array.reduce((a,b) => Math.max(a,b))
    return [max, array.indexOf(max)];
}