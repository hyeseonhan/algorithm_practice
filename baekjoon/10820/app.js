const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const character = input.filter(str => str.length < 1)

if(character.length){
    input.splice(input.indexOf(t[0]), 1)
}

input.forEach(str => {
    const lower = str.length - str.replace(/[a-z]/g, '').length
    const upper = str.length - str.replace(/[A-Z]/g, '').length
    const number = str.length - str.replace(/[0-9]/g, '').length
    const blank = str.length - str.replace(/\ /g, '').length

    console.log(lower, upper, number, blank)
})




// g: 전역 매칭 처음부터가 아니라 전체에서 정규식이 맞는 것을 찾는다.
// 문자열에서 정규식으로 대문자를 모두 지운 문자열의 길이를 원본 문자열의 길이에서 빼면 대문자의 갯수다.
// 문자열에서 정규식으로 소문자를 모두 지운 문자열의 길이를 원본 문자열의 길이에서 빼면 소문자의 갯수다.
// 문자열에서 정규식으로 숫자를 모두 지운 문자열의 길이를 원본 문자열의 길이에서 빼면 숫자의 갯수다.
// 문자열에서 정규식으로 공백을 모두 지운 문자열의 길이를 원본 문자열의 길이에서 빼면 공백의 갯수다.
