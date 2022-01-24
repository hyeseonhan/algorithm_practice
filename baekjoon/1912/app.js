// 연속합
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let t = +input[0]
let n = input[1].split(' ').map(item => +item)
let dp = [n[0]]
// console.log(dp)

for(let i = 1; i < t; i++){
    dp[i] = n[i] > n[i] + dp[i - 1] ? n[i] : n[i] + dp[i - 1]
    // console.log(dp[i])
}
console.log(Math.max(...dp));