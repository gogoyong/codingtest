function solution(num_list) {
    return answer = [num_list.filter(n=>n%2 === 0).length, num_list.filter(n=>n%2 === 1).length];
}