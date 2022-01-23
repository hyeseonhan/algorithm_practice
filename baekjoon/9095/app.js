// 1, 2, 3 더하기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = [0, 1, 2, 4]

for(let i = 1; i <= +input[0]; i++){
    let num = input[i]
    for(let j = 4; j <= num; j++){
        arr[j] = arr[j - 1] + arr[j - 2] + arr[j - 3]
    }
    console.log(arr[num])
}

// https://leylaoriduck.tistory.com/518