function solution(s, n) {
    let answer = '';
    let charCode = []
    for (i=0; i<s.length; i++) {
        let num = s.charCodeAt(i)
        let newNum = num + n
        if (num !== 32) {
            if (newNum > 90 && num < 91) {
                charCode.push(newNum - 26)
            } else if (newNum > 122 && num > 96) {
                charCode.push(newNum - 26)
            } else charCode.push(newNum)
        } else {
            charCode.push(num)
        }
//         대문자 : 65 ~ 90 / 소문자 : 96 ~ 122 / 공백 : 32
        answer += String.fromCharCode(charCode[i])
    }
    return answer
}