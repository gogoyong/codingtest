function solution(my_string) {
    const set = new Set(my_string)
    return answer=[...set].join('');
}