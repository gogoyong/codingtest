function solution(sides) {
    sides.sort((a,b) => b-a) 
    const [a, b, c] = [sides[0], sides[1], sides[2]]
    return answer = a < b + c ? 1 : 2;
}