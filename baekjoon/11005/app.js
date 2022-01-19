// 진법 변환 2
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0].split(' ').map(item => +item)

let n = input[0]
let b = input[1]

let answer = []
while (n !== 0) {
    answer.push(n % b)
    n = Math.floor(n / b)
}
answer = answer.reverse()

for(let i = 0; i < answer.length; i++){
    if(answer[i] >= 10 && answer[i] <= 35){
        answer[i] = String.fromCharCode(answer[i] + 55)
    }
}
console.log(answer.join(''))

// https://leylaoriduck.tistory.com/504