const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

testArray=[]
for(let i = 1; i <= +input[0]; i++){
    const testValue = input[i].split(' ').map((item) => +item);
    testArray.push({A: testValue[0], B: testValue[1]})
}

solution(+input[0], testArray)

function solution(T, testArray){
    for(let i = 0; i < T; i++ ){
        const A = testArray[i].A
        const B = testArray[i].B
        console.log(`Case #${i + 1}: ${A} + ${B} = ${A + B}`)
    }
}