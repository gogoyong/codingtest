function solution(cipher, code) {
    const array = cipher.split('')
    let answer = []
    for (i=0; i<array.length; i++) {
        if ((i+1) % code === 0) {
            answer.push(array[i])
        }
    }
    return answer.join('');
}