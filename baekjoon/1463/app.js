// 1로 만들기
// 다이나믹 프로그래밍 DP
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input[0]
let DP = new Array(n + 1).fill(0)

for(let i = 2; i < DP.length; i++){
    DP[i] = DP[i - 1] + 1

    if(i % 3 === 0){
        DP[i] = Math.min(DP[i], DP[i / 3] + 1)
    }

    if(i % 2 === 0){
        DP[i] = Math.min(DP[i], DP[i / 2] + 1)
    }
}
console.log(DP[n])



// https://webruden.tistory.com/1035
// Math.min() 함수는 숫자 집합중에서 가장 작은 수를 리턴하는 함수