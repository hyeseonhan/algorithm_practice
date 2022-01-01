const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCase = +input[0]
const avgCase = [];

for(let i = 1; i <= testCase; i++){
    const score = input[i].split(' ').map((item) => +item)
  
    const newscore = [];
    for(let i = 1; i <= score[0]; i++){
        newscore.push(score[i])
    }
    const testCases = {
        N: score[0],
        arr: newscore 
    }
    avgCase.push(testCases)
}

solution(testCase, avgCase)

function solution(C, testCase){
    for(let testCaseIdx = 0; testCaseIdx < C; testCaseIdx++){
        const n = testCase[testCaseIdx].N
        const arr = testCase[testCaseIdx].arr
    
        let scoreSum = 0;
        for(let i = 0; i < n; i++){
            scoreSum = scoreSum + arr[i]
        }
        const average = scoreSum / n

        let cnt = 0;
        for(let i = 0; i < n; i++){
            if( average < arr[i]){
                cnt++
            }
        }

        const ratio = ((cnt / n) * 100).toFixed(3);
        console.log(ratio + '%')
    }
}