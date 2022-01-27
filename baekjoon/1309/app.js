// 동물원
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input[0]
let dp = [1, 3]

for(let i = 2; i <= n; i++){
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901
}
console.log(dp[n])
// dp[n][i] = n번째 위치에 사자를 배치하는 경우의 수 (i = 0 : 사자를 배치하지 않는 경우)