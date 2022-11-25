function solution(array, height) {
    answer = array.filter(num => num > height).length
    return answer;
}