const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0]
const arr = input.filter((v, i) => i >0).map((v) => v.split(' '))

// arr.sort((a, b) => {
//     if(a.length > b.length) return 1
//     if(a.length < b.length) return -1
//     if(a > b) return 1
//     if(a < b) return -1
//     return 0
// })

// console.log(arr.map((v) => v).join("\n"))