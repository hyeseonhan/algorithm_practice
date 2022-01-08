const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let nm = input[0].split(' ').map((item) => +item)
let nums = input[1].split(' ').map((item) => +item)
let n = nm[0]
let m = nm[1]

solution(n, m, nums)

function solution(n, m, nums){
    let answer = 0
    for(let i = 0; i < n; i++){
        for(let j = i +1; j < n; j++){
            for(let k = j+1; k < n; k++){
                const sum = nums[i] + nums[j] + nums[k];
                const gap = m - sum
                if(gap >= 0 && answer <= sum){
                    answer = sum
                }
            }
        }
    }
    console.log(answer)
}