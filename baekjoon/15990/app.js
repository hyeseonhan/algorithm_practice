// 1, 2, 3 더하기 5
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0]
input.shift()

let max = Math.max(...input)
let arr = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 1]]
for(let i = 4; i <= max; i++){
    arr[i] = [(arr[i-1][1] + arr[i-1][2]) % 1000000009, (arr[i-2][0] + arr[i-2][2]) % 1000000009, (arr[i-3][0] + arr[i-3][1]) % 1000000009]
}
for(let k = 0; k < n; k++){
    console.log(arr[input[k]].reduce((a,v) => a + v, 0) % 1000000009)
}

// https://leylaoriduck.tistory.com/521