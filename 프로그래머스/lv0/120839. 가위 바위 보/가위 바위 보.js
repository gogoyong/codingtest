function solution(rsp) {
    let arr = rsp.split('')
    let answer = []
    for (i=0; i<arr.length; i++) {
        switch (arr[i]) {
            case '2':
                answer.push('0')
                break;
            case '0':
                answer.push('5')
                break;
            case '5':
                answer.push('2')
                break;
        }
    }
    return answer.join('');
}