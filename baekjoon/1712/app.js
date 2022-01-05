const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((item) => +item)
solution(input)

function solution(input){
    const A = input[0]
    const B = input[1]
    const C = input[2]

    const margin =  C - B
    // Math.floor(N) 로 반내림 처리한 후 손익분기점을 넘기기위해 +1도 넣는다.
    const count = Math.floor(A / margin) + 1

    console.log(margin <= 0 ? -1 : count)
}