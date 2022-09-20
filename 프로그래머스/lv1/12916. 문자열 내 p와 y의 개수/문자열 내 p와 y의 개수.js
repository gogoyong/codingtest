function solution(s){
    let change = s.toLowerCase();
    let check_p = change.split("p").length
    let check_y = change.split("y").length
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
    return check_p === check_y ? true : false;
}