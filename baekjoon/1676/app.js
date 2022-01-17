// 팩토리얼 0의 개수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function factorial(num){
    if(num === 0) return 1n
    return BigInt(num) * factorial(num - 1)
}
let n = String(factorial(+input[0]))

let answer = 0
for(let i = n.length - 1; i >= 0; i--){
    if(+n[i]) break
    answer++
}
console.log(answer)

// https://velog.io/@po4tion/%EB%B0%B1%EC%A4%80-node.js-boj-1676-%ED%92%80%EC%9D%B4