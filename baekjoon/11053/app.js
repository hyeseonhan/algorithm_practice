// 가장 긴 증가하는 부분 수열
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let t = +input[0]
let n = input[1].split(' ').map(item => +item)
let dp = new Array(t).fill(0)

for(let i = 0; i < t; i++){
    let max = 0

    for(let j = 0; j < i; j++){
        if(n[i] > n[j] && dp[j] > max){
            max = dp[j]
        }
    }
    dp[i] = max + 1
}
console.log(Math.max(...dp))

// https://leylaoriduck.tistory.com/524