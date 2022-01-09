const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();

input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);
console.log(input.join("\n"));

// 안정 정렬 stable sort
// 삽입정렬, 병합정렬, 버블정렬

// 불안정 정렬 unstable sort
// 퀵정렬, 선택정렬, 계수정렬

// https://gurtn.tistory.com/72