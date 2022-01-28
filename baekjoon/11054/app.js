// 가장 긴 바이토닉 부분 수열
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input[0]
let num = input[1].split(' ').map(item => +item)
let up = new Array(n).fill(1)
let down = new Array(n).fill(1)

for(let i = 0; i < n; i++){
    let current = num[i]
    let count = 1
    
    for(let j = 0; j < i; j++){
        let before = num[j]
        if(current > before) count = Math.max(count, up[j] + 1)
    }
    up[i] = count
}

for(let i = n - 2; i >= 0; i--){
    let current = num[i]
    let count = 1
    
    for(let j = i + 1; j < n; j++){
        let before = num[j]
        if(current > before) count = Math.max(count, down[j] + 1)
    }
    down[i] = count
}
const answer = up.map((value, index) => value + down[index])
console.log(Math.max(...answer) - 1)

// https://junghyeonsu.tistory.com/208