const array = ["배열"]
// 배열의 길이 구하기 : array.length
// 배열의 값 꺼내기 : array[숫자(인덱스)]
// 배열 맨 뒤에 값 추가 : array.push()
// 배열 맨 마지막 값 삭제 : array.pop()
// 배열 요소 정렬 : array.sort()
// 배열 데이터 확인 : array.includes(값)

let classmate = ["수경수", "징징이", "밍이"]
console.log(classmate);

classmate[0]
classmate[1]
classmate[2]

classmate.includes("밍이") //true
classmate.includes("맹구") //false

classmate.length
classmate.push("빵빵이")
classmate.pop()
classmate.length //3
