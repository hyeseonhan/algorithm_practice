const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n'),

[n, ...nums] = input
num = nums[0].split(' ').map((item) => +item)

let arr = []
let stack = []
let count = {}

// 등장 횟수
// count 객체 선언 -> num[a]의 값이 count에 없을 경우, count의 key값으로 num[a]의 값과 value로는 1을 선언. count에 있다면 해당 값의 value를 +1
for(let a in num){
    if(!count[num[a]]){
        count[num[a]] = 1
    } else {
        count[num[a]]++
    }
}
// console.log(count)

for(let i = 0; i < n; i++){
    while (stack.length !== 0 && count[num[i]] > count[num[stack[stack.length -1]]]) {
        arr[stack.pop()] = num[i]
    }
    stack.push(i)
}

while (stack.length !== 0) {
    arr[stack.pop()] = -1
}

console.log(arr.join(' '))

// https://leylaoriduck.tistory.com/494