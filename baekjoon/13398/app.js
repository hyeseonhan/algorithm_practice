// 연속합 2
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input[0]
let num = input[1].split(' ').map(item => +item)
let dp = [num[0]]
let dp2 = [num[0]]

for(let i = 1; i < n; i++){
    dp[i] = num[i] > num[i] + dp[i - 1] ? num[i] : num[i] + dp[i - 1]
}

for(let i = 1; i < n; i++){
    dp2[i] = dp[i - 1] > num[i] + dp2[i - 1] ? dp[i - 1] : num[i] + dp2[i - 1]
}
let dpmax = Math.max(...dp)
let dp2max = Math.max(...dp2)
console.log(Math.max(dpmax, dp2max))

// https://leylaoriduck.tistory.com/535