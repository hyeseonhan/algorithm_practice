const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
// console.log(input)

// 1 2  space 기준으로 나눠준다.

// input = input[0] // 문자열
// console.log(input)

// input = input.split(' '); // 배열로 만든다.
// console.log(input)

// input = input.split(' ').map((item) => +item) // 숫자열
// console.log(input)

// --------------------------------------
input = input[0]
input = input.split(' ').map((item) => +item)

solution(input[0], input[1])

function solution(A ,B){
console.log (A + B)
    // console.log("A :", A)
    // console.log("B :", B)
}