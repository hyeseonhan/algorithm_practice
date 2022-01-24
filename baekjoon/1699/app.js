// 제곱수의 합
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input[0]
let dp = new Array(n + 1).fill(0)

for(let i = 1; i <= n; i++){
    dp[i] = i
    
    for(let j = 1; j * j <= i; j++){
        if(dp[i] > dp[i - (j * j)] + 1){
            dp[i] = dp[i - j * j] + 1
        }
    }
}
console.log(dp[n])
// console.log(Math.min(...dp))

// https://maivve.tistory.com/199
// https://leylaoriduck.tistory.com/search/1699