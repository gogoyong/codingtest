function solution(numbers) {
    let answer = 0;
    arr = [0,1,2,3,4,5,6,7,8,9]
    arr2 = arr.filter(el => !numbers.includes(el))
    for (i=0; i<arr2.length; i++) {
        answer += arr2[i]
    }
    return answer;
}