// 카드 구매하기 2
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let p = input[1].split(' ').map(item => +item)
p.unshift(0)

let minPrice = [0, p[1]]
for(let i= 1; i <= +input[0]; i++){
    let prices = []

    for(let j = 1; j < i; j++){
        prices.push(minPrice[i - j] + p[j])
    }
    prices.push(p[i])
    minPrice[i] = Math.min(...prices)
}
console.log(minPrice[+input[0]])
