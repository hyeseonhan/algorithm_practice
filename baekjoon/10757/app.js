const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// BigInt: 임의의 정밀도로 정수를 나타낼 수 있는 JS의 새로운 숫자 데이터형
// BigInt를 출력할 때는 toString()으로 해야한다. 안하면 끝에 n이 붙어서 나온다

input = input[0].split(' ').map((item) => BigInt(item))
const result = input[0] + input[1]
console.log(result.toString())