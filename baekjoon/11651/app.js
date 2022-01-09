const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0]
const nums = input.filter((v, i) => i >0).map((v) => v.split(' '))

// 이렇게 하면 안됨... 왜지
// [n, ...arr] = input
// const nums = arr.map(item => item.split(' ').map(ele => parseInt(ele)))

nums.sort((a, b) => {
    if(a[1] === b[1]) return a[0] - b[0]
    else return a[1] - b[1]
})

console.log(nums.map((v) => v.join(" ")).join("\n"))

// [n, ...nums] = input

// const num = nums.map(item => item.split(' ').map(ele => parseInt(ele)))

// num.sort((a, b) => {
//     if(a[1] !== b[1]){
//         return a[1] - b[1]
//     }
//     return a[0] - b[0]
// })
// console.log(num.map((item) => item.join(" ")).join("\n"))

// https://ryulurala.tistory.com/287