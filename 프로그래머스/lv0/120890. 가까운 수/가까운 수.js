function solution(array, n) {
    const arr = array.sort().map(el => Math.abs(el-n))
    const min = Math.min(...arr)
    const index = arr.indexOf(min)
    console.log(min)
    return array[index]
}