// 후위표기식
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

[n, postfix, ...nums] = input
let num = nums.map(item => +item)
let startCode = 65;
const numberObj = [];
const stack = [];



for(let i = 0; i < n; i++){
    numberObj[String.fromCharCode(startCode)] = n
    startCode++
    // console.log(n)
}

num.forEach(v => {
    if ('A' <= v && v <= 'Z') stack.push(numberObj[v]);
    else {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(operator[v](a, b));
    }
  });
  
  console.log(stack[0].toFixed(2));

