function solution(dots) {
    let arrx = []
    let arry = []
    for (i=0; i<4; i++) {
        arrx.push(dots[i][0])
        arry.push(dots[i][1])
    }
    return (Math.max(...arrx) - Math.min(...arrx)) * (Math.max(...arry) - Math.min(...arry));
}