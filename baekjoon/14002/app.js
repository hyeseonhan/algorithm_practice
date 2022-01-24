// 가장 긴 증가하는 부분 수열 4
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let t = +input[0]
let n = input[1].split(' ').map(item => +item)
let dp = new Array(t).fill(0)
let arr = []

for(let i = 0; i < t; i++){
    let max = 0
    let maxIndex = -1

    for(let j = 0; j < i; j++){
        if(n[i] > n[j] && dp[j] > max){
            max = dp[j]
            maxIndex = j
        }
    }
    dp[i] = max + 1
    arr[i] = maxIndex !== -1 ? arr[maxIndex].concat(n[i]) : [n[i]]
}
let maxlength = Math.max(...dp)
console.log(maxlength)
console.log(arr[dp.indexOf(maxlength)].join(' '))

// https://leylaoriduck.tistory.com/525?category=880546