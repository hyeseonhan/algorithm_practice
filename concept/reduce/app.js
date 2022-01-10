// reduce
// 배열 메서드

// 배열.reduce((누적값, 현재값, 인덱스, 요소) => {return 결과}, 초깃값)
// 배열에 있는 값들을 순회하면서 최종적으로 각각의 값들이 몇 번 나오는지 count한다.

const oneTwoThree = [1, 2, 3];

// 덧셈 예시
result = oneTwoThree.reduce((acc, cur, i) => {
    // console.log(acc, cur, i)
    return acc + cur
}, 0)

// console.log(result)


const arr = [1, 2, 3, 4, 5];
const result2 = arr.reduce((acc, cur, idx) => {return acc += cur}, 0) 
console.log(result2)
// initailValue = 0 => acc의 초기값 = 0
// 0 + 1 + 2 + 3 + 4 + 5

const result3 = arr.reduce((acc, cur, idx) => {return acc += cur}, 10) 
console.log(result3)
// initailValue = 10 => acc의 초기값 = 10
// 10 + 1 + 2 + 3 + 4 + 5