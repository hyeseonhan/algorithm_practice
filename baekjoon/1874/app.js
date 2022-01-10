const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

T = input.shift()
let arr = []
let stack = []
let answer = ''

for(let i = 0; i < T; i++){
    arr[i] = i + 1
}

for(let j = 1; j <= T; j++){
    let count = 1
    while(count <= T && stack[stack.length - 1] !== input[j]){
        stack.push(arr.shift())
        answer += '+\n'
        count++
    }
    if(stack[stack.length - 1] === input[j]){
        stack.pop()
        answer += '-\n'
    } else{
        answer = 'NO'
        break
    }
}
console.log(answer)

// https://gigibean.tistory.com/m/13?category=983079
// https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-1-%EB%B0%B1%EC%A4%80-nodejs-%ED%91%9C%EC%A4%80-%EC%9E%85%EC%B6%9C%EB%A0%A5-%EC%8A%A4%ED%83%9D