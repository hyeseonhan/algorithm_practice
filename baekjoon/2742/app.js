// 시간초과

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0])

function solution(N){
    for(i =N; i >= 1; i--){
        console.log(i)
    }
}

// const input = require('fs').readFileSync('/dev/stdin').toString();

// let answer ="";
// for(let i=Number(input); i>=1; i--){
//     answer+=i+"\n";
// }
// console.log(answer);