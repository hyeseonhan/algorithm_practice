const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

[n, nums] = input
nums = nums.split(' ').map(v => Number(v))

const answer = []
const arr = Array.from(new Set([...nums])).sort((a, b) => a - b)
const object = {}

arr.forEach((item, idx) => object[item] = idx)

for(let i = 0; i < nums.length; i++){
    answer.push(object[nums[i]])
} 
console.log(answer.join(' '))

// https://junghyeonsu.tistory.com/189