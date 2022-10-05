function solution(phone_number) {
    let answer = ''
  const digit = phone_number.length
    if (digit >= 4 && digit <= 20) {
        let front = ('*').repeat(digit-4)
      let back = phone_number.slice(digit-4);
      answer = front + back
    }
    return answer;
}