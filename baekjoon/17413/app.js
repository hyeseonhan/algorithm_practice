// 모르겟음

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n'),
s = '',
isTag = false,
answer = '';

for(let a of input){
    if( a === "<"){
        isTag = true;
        answer += s.split(' ').reverse.join(' ') + a;
        s =''   
    } else if ( a === ">"){
        isTag = false;
        answer += s + a
        s = ''
    } else if(a === ' '){
        answer += (!isTag ? s.split(' ').reverse().join(' ') : s) + ' ';
        s = ''
    } else {
        s += a
    }
}
console.log((answer + s.split('').reverse().join('')).replace(/\n/g, ""))