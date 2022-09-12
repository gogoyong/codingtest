function solution(n)
{
    let answer = 0;
    const arr = n.toString().split('').map(Number)
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    for (i=0;i<arr.length;i++) {
        answer += arr[i]
    }

    return answer;
}