// 네수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let nums = input[0].split(' ')
let AB = Number(nums[0] + nums[1])
let CD = Number(nums[2] + nums[3])
console.log(AB + CD)