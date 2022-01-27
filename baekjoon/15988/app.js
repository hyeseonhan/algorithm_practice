// 1, 2, 3 더하기 3
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let t = +input.shift()
let n = input.map(item => +item)
let arr = [0, 1, 2, 4]
let max = Math.max(...n)

for(let i = 4; i <= max; i++){
    arr[i] = (arr[i - 1] + arr[i - 2] + arr[i - 3] % 1000000009)
}

for(let j = 0; j < t; j++){
    console.log(arr[n[j]])
}