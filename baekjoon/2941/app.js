const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 정규표현식
// let exp = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
// let result = input[0].replace(exp, ' ')
// console.log(result.length)

solution(input[0])

function solution(str){
    let answer = 0;
    for( let i = 0; i < str.length; i++){
        let c = str[i];
        answer++

        if (c === 'c'){
            let nextC = str[i + 1]
            if( nextC === '=' || '-'){
                i = i + 1;
                continue
            }
        }

        if (c === 'd') {
            let nextC = str[i + 1];
            if (nextC === '-') {
                i = i + 1;
                continue;
            }
            if (i < str.length - 2) {
                let nextNextC = str[i + 2];
                if (nextC === 'z' && nextNextC === '=') {
                    i = i + 2;
                    continue;
                }
            }
        }
        if (c === 'l' || c === 'n') {
            let nextC = str[i + 1];
            if (nextC === 'j') {
                i = i + 1;
                continue;
            }
        }
        if (c === 's' || c === 'z') {
            let nextC = str[i + 1];
            if (nextC === '=') {
                i = i + 1;
                continue;
            }
        }
    }
    console.log(answer);
}