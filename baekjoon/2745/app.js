// 진법변환
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0].split(' ').map(item => item)

let n = input[0].split('').reverse()
let b = +input[1]

let result = 0

for(let i = 0; i < n.length; i++ ){
    if( n[i] >= 'A' && n[i] <= 'Z'){
        n[i] = n[i].charCodeAt(0) - 55
        result += n[i] * Math.pow(b, i)
    } else {
        n[i] = Number(n[i])
        result += n[i] * Math.pow(b, i)
    }
}

console.log(result)

// https://leylaoriduck.tistory.com/503