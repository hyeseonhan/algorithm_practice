// 타일 채우기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const dp = new Array(+input + 1).fill(0)
dp[2] = 3

for(let i = 4; i <= +input; i +=2){
    dp[i] = dp[i - 2] * dp[2] + 2
    
    for(let j = 4; j < i; j += 2){
        dp[i] += dp[i -j] * 2
    }
}
console.log(dp[+input])


// https://kscodebase.tistory.com/360
// https://mizzo-dev.tistory.com/entry/baekjoon2133