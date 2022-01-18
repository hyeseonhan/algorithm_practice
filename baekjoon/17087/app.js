// 숨바꼭질 6
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

[n, ...nums] = input

let number = n.split(' ')
let s = number[1]
let d = nums[0].split(' ').map(item => Math.abs(+item - s))

if(d.length === 1) console.log(d[0])
// else if(d.length === 2) result
else{
    let result = gcd(d[0], d[1])
    for(let i = 2; i < d.length; i++){
        result = gcd(result, d[i])
    }
    console.log(result)
}

const gcd = (a, b) => {
    if(b ===0) return a
    return a > b ? gcd(b, a % b) : gcd(a, b % a)
}