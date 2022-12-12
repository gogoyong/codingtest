function solution(my_string) {
    const arr = my_string.split('')
    return answer = arr.map(el => {
        if (el === el.toUpperCase()) {
            return el.toLowerCase()
        } else return el.toUpperCase()
    }).join('')
}