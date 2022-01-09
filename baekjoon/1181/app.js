// 출력 형식이 잘못

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

[n, ...arr] = input
newarr = new Set(arr)
newarr = [...newarr]

newarr.sort((a, b) => {
    if(a.length > b.length) return 1;
    if(a.length < b.length) return -1;
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
})
newarr.map((v) => v);
console.log(newarr.join("\n"));

// newarr.map((item) => console.log(item))
// console.log(newarr.map((v) => v).join("\n"))

// https://rrecoder.tistory.com/126