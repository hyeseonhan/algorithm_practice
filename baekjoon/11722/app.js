// 가장 긴 감소하는 부분 수열
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input[0]
let num = input[1].split(' ').map(item => +item).reverse()
let dp = []

for(let i = 0; i < n; i++ ){
    dp[i] = 1
    for(let j = 0; j < i; j++){
        if(dp[j] + 1 > dp[i] && num[j] < num[i]) dp[i] = dp[j] + 1
    }
}
console.log(Math.max(...dp))

// https://kscodebase.tistory.com/357