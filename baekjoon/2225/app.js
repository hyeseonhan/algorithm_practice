// 합분해
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [n, k] = input[0].split(' ').map(item => +item)
let dp = new Array(k + 1).fill(0)

for(let i = 0; i <= k; i++){
    dp[i] = []
    for(let j = 0; j <= n; j++){
        dp[i][j] = 0
    }
}
dp[0][0] = 1

for (let i = 0; i <= k; i++) {
    for (let j = 0; j <= n; j++) {
        for (let l = 0; l <= j; l++) {
            if (i - 1 >= 0) {
                dp[i][j] += dp[i - 1][j - l];
                dp[i][j] %= 1000000000;
            }
        }
    }
}
console.log(dp[k][n]);


// https://amunre21.github.io/boj/3-2225/
// https://kscodebase.tistory.com/365