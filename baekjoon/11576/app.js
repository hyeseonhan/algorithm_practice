// Base Conversion
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let numbers = input[0].split(' ').map(item => +item)


let A = numbers[0]
let B = numbers[1]
let m = input[2].split(' ').map(item => +item)
let decimal = 0
let result = []

for(let i = 0; i < +input[1]; i++){
    decimal += m[i] * Math.pow(A, +input[1] - i -1)
}

while (decimal) {
    result.push(decimal % B)
    decimal = Math.floor(decimal / B)
}
result = result.reverse()
console.log(result.join(' '))

// 진접 변환 2
// https://jae04099.tistory.com/entry/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EB%B0%B1%EC%A4%80-11576-Base-Conversion