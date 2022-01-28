// 정수 삼각형
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

[n, ...arr] = input
let dp = arr.map(item => item.split(' ').map(item => +item))

for(let i = 1; i < +n; i++){
    for(let j = 0; j < dp[i].length; j++){
        if( j === 0) dp[i][j] += dp[i - 1][j]
        else if(j === dp[i].length - 1) dp[i][j] += dp[i - 1][j - 1]
        else dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j])
    }
}
console.log(Math.max(...dp[+n - 1]))

// https://gobae.tistory.com/27
// https://lhoiktiv.tistory.com/m/155?category=854097