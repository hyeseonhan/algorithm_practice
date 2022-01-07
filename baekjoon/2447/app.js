const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = +input[0]
let str= ""

function pattern(i, j, k){
    if( i % 3 === 1 && j % 3 === 1){
        str += " ";
    } else {
        if(k === 1){
            str += "*"
        } else {
            pattern(Math.floor(i / 3), Math.floor(j / 3), Math.floor(k / 3))
        }
    }
}

for( let i = 0; i < num; i++){
    for(let j = 0; j < num; j++){
        pattern(i, j, num)
    }
    if( i !== num - 1){
        str += "\n";
    }
}
console.log(str)