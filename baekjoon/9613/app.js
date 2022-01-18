// 최대공약수 GCD 합
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const gcd = (a, b) => {
    if( a % b === 0) return b
    return gcd(b, a % b)
}

const gcdsum = (n, ...arr) => {
    let sum = 0
    arr.sort((a, b) => b - a)
    arr.forEach((v, i) => {
        while (i < n -1) {
            sum += gcd(v, arr[++i])
        }
    })
    return sum
}

[T, ...nums] = input
const output = []
nums.forEach(v => {
    output.push(gcdsum(...v.split(' ').map(v => +v)))
})

console.log(output.join('\n'))
