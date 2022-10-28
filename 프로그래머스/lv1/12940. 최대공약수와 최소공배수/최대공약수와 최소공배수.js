function solution(n, m) {
    let answer = [];
    let [yak, bae] = [0, 0];
    let min = Math.min(n,m)
    let max = Math.max(n,m)
    for (i=1; i<=min; i++) {
        if (min % i === 0 && max % i === 0) {
            yak = i
        }
    }
    bae = n * m / yak
    return answer = [yak, bae];
}