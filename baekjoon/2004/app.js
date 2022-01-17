// 조합 0의 개수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(item => +item)

function div5(n){
    let count = 0
    for(let i = 5; i <= n; i *= 5){
        count += Math.floor(n / i)
    }
    return count
}

function div2(n){
    let count = 0
    for(let i = 2; i <= n; i *= 2){
        count += Math.floor(n / i)
    }
    return count
}

const result5 = div5(N) - div5(M) - div5(N - M)
const result2 = div2(N) - div2(M) - div2(N - M)
console.log(Math.min(result5, result2))


// 조합  n! / (n-m)! * m!
// https://velog.io/@po4tion/%EB%B0%B1%EC%A4%80-node.js-boj-2004-%ED%92%80%EC%9D%B4