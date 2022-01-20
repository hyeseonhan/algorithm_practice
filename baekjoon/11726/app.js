// 2×n 타일링
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = [0, 1, 2]
if(+input[0] > 2){
    for(let i = 3; i <= +input[0]; i++){
        arr[i] = (arr[i -1] + arr[i -2]) % 10007
    }
}
console.log(arr[+input[0]])

// https://leylaoriduck.tistory.com/514