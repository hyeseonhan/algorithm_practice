// 답은 맞는데 에러가 난다.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

[n, ...nums] = input.map((item) => Number(item))
const arr = nums.sort((a, b) => a - b)

// 산술평균
let sum = 0;
for(let i = 0; i < arr.length; i++){
   sum += arr[i]
}

const average = Math.round(sum / arr.length)

const middle = arr[Math.floor(arr.length / 2)]

// 최빈값
const modes = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {})

let minarr = [];
let modemax = Math.max.apply(null, Object.values(modes));
Object.keys(modes).forEach(function(key){
    if(modes[key] === modemax){
        minarr.push(key)
    }
})

if(minarr.length > 1){
    minarr.sort((a, b) => a - b)
   mode = minarr[1];
} else {
   mode = minarr[0];
}

const range = arr[arr.length - 1] - arr[0]

console.log(average)
console.log(middle)
console.log(Number(mode))
console.log(range)

// Math.round() // 소수점 반올림, 정수 반환
// Math.ceil()  // 소수점 올림, 정수 반환
// Math.floor() // 소수점 버림, 정수 반환

// https://velog.io/@yujo/JSBOJ-2108-%ED%86%B5%EA%B3%84%ED%95%99
// https://velog.io/@yoosk5485/%EB%B0%B1%EC%A4%80-2108%EB%B2%88-%ED%86%B5%EA%B3%84%ED%95%99-JS