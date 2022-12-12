function solution(numbers, direction) {
    const len = numbers.length
    let arr = []
        if (direction === "right") {
            arr.push(numbers[len-1])
         for (i=0; i<len-1; i++) {
            arr.push(numbers[i])
        }  
        } else {
         for (i=1; i<len; i++) {
            arr.push(numbers[i])
        }
        arr.push(numbers[0])   
        }
    return arr
}