// RGB거리
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

[n, ...arr] = input
let dp = arr.map(item => item.split(' ').map(item => +item))

for(let i = 1; i < +n; i++){
    dp[i][0] += Math.min(dp[i - 1][1], dp[i - 1][2]) // n번째 집을 빨간색 칠 비용
    dp[i][1] += Math.min(dp[i - 1][0], dp[i - 1][2])
    dp[i][2] += Math.min(dp[i - 1][0], dp[i - 1][1])
}

const answer = Math.min(...dp[+n - 1])
console.log(answer)

// https://tesseractjh.tistory.com/117
// https://lhoiktiv.tistory.com/154