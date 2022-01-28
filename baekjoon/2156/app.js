// 포도주 시식
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

[n, ...arr] = input
let wine = arr.map(item => + item)
const dp = new Array(+n).fill(0)

dp[1] = wine[0]
dp[2] = wine[0] + wine[1]

for(let i = 3; i <= n; i++){
    dp[i] = Math.max(dp[i - 1], dp[i - 3] + wine[i - 1] + wine[i - 2], dp[i - 2] + wine[i - 1])
}
console.log(dp[n])

// https://webruden.tistory.com/1040