// 모르겟음


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0])

function solution(input){
    const result = new Array(26).fill(0);
    for(let i = 0; i < input.length; i++){
    // a-z까지 배열을 만들어 0으로 채우고, 각 반환된 코드에서 a=최솟값(97)를 빼서 배열 인덱스를 만들고 해당 배열의 값을 1씩 증가시킨다. 
    result[input[i].charCodeAt(0) - 65] ++;
    }

    const max = Math.max(...result);
    return result.filter(value => value === max).length === 1
    ? String.fromCharCode(result.findIndex(val => val === max) + 65)
    : "?"
}

console.log(solution(input))