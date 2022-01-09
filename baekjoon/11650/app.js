// 맞는데 결과가 틀렸음

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

[n, ...nums] = input

const num = nums.map(item => item.split(' ').map((ele) => +ele))

let answer = ''
num.sort((a, b) => {
    if(a[0] !== b[0]){
        return a[0] - b[0]
    }
    return a[1] - b[1]
}).forEach(num => {
    answer += `${num[0]} ${num[1]}\n`
})
console.log(answer)

// https://dpsc615.tistory.com/135