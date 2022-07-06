let fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().split('\n')

// 이진 탐색 소스코드 구현(재귀 함수)
function binarySearch(arr, target, start, end) {
  if (start > end) return -1;
  let mid = parseInt((start + end) / 2);
  // 찾은 경우 중간점 인덱스 반환
  if (arr[mid] == target) return mid;
  // 중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
// 중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
  else return binarySearch(arr, target, mid + 1, end);
}
// n(원소의 개수)와 target(찾고자 하는 값)
let n = Number(input[0])
let arr = input[1].split(' ').map(Number)
arr.sort((a,b) => (a-b))

let m = Number(input[2])
let answer =''
let targetArr = input[3].split(' ').map(Number)

for (i=0;i<m;i++) {
  let target = targetArr[i]
  let result = binarySearch(arr, target, 0, n - 1);
  if (result == -1) answer+= 0 + '\n'
  else answer+= 1 + '\n'
}
console.log(answer)