// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');

// solution(+input[0])

// function solution(N){
//     for(i = 1; i <=N; i++ ){
//         console.log(i)
//     }
// }

const input = require('fs').readFileSync('/dev/stdin').toString();

let answer = "";
for(let i=1; i<=Number(input); i++){
    answer += i + "\n";
} 
console.log(answer);