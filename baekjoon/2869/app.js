const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((item) => item)
solution(+input[0], +input[1], +input[2])

function solution(A, B, V){
    console.log(Math.ceil((V - A) / (A - B)) + 1)
}

// https://ming9mon.tistory.com/118?category=841132
// https://gurtn.tistory.com/52