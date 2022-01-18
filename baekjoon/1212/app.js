// 8진수 2진수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = String(input)
let answer = ''

while (n.length !== 0) {
    if(n.length > 1){
        answer = parseInt(n.slice(n.length - 1), 8).toString(2).padStart(3, '0') + answer
    } else{
        answer = parseInt(n.slice(n.length - 1), 8).toString(2) + answer
    }
    n = n.slice(0, n.length - 1)
}
console.log(answer)



// padStart() https://leylaoriduck.tistory.com/454?category=878030
// https://jae04099.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A7%84%EC%88%98%EB%B3%80%ED%99%98-toString-parseInt
// https://leylaoriduck.tistory.com/510?category=880546