// 쉬운 계단 수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = []
arr[0] = []
arr[1] = new Array(10).fill(1)
arr[1][0] = 0

for(let i = 1; i < +input[0]; i++){
    arr[i + 1] = new Array(10).fill(0)
    arr[i + 1][1] += arr[i][0] % 1000000000

    for(let k = 1; k < arr[i].length - 1; k++){
        arr[i + 1][k - 1] += arr[i][k] % 1000000000
        arr[i + 1][k + 1] += arr[i][k] % 1000000000
    }
    arr[i + 1][8] += arr[i][9] % 1000000000
}
console.log(arr[+input[0]].reduce((a,v)=>a+v, 0) % 1000000000)