// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');

// for(let i=1; i <= +input[0]; ++i){
//     let num = input[i].split(' ').map((item) => +item);
//     console.log(num[0] + num[1])
// }

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let max = Number(input[0]);
let answer = '';

for (let i = 1; i <= max; i++) {
    let num = input[i].split(' ');
    answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);



// let answerArray = []

// for(let i=1; i <= +input[0]; ++i){
//     let num = input[i].split(' ').map((item) => +item);
//     answerArray.push({A: num[0], B: num[1]});
// }

// solution(+input[0], answerArray)

// function solution(max, answerArray){
//  for(let i =0; i < max; ++i){
//     const A = answerArray[i].A
//     const B = answerArray[i].B
//     console.log(A + B)
//  }
// }

