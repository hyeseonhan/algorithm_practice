// 오르막 수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input[0]
let dp = [[], new Array(10).fill(1)]

for(let i = 2; i <= n; i++){
    dp[i] = []
    dp[i][0] = dp[i - 1][0] % 10007
    
    for(let j = 1; j < 10; j++){
        dp[i][j] = (dp[i][j -1] + dp[i - 1][j]) % 10007
    }
}
console.log(dp[n].reduce((a, v) => a + v, 0) % 10007)

// https://leylaoriduck.tistory.com/532