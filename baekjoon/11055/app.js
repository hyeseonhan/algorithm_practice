// 가장 큰 증가 부분 수열
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input[0]
let num = input[1].split(' ').map(item => +item)
let dp = []
for(let i = 0; i < n; i++){
    let max = 0
    let maxIndex = -1

    for(let j = 0; j < i; j++){
        if(num[i] > num[j] && dp[j] > max){
            max = dp[j]
            maxIndex = j
        }
    }
    if(maxIndex !== -1){
        dp[i] = dp[maxIndex] + num[i]
    } else {
        dp[i] = num[i]
    }
}
console.log(Math.max(...dp))