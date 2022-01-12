const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n'),

[n, ...nums] = input
num = nums[0].split(' ').map((item) => +item)

let stack = []
for(let i = 0; i < n; i++){
    while (stack.length && num[stack[stack.length -1]] < num[i]) {
        num[stack.pop()] = num[i]
    }
    stack.push(i)
}

while(stack.length){
    num[stack.pop()] = - 1
}

console.log(num.join(' '))

// https://junghyeonsu.tistory.com/218