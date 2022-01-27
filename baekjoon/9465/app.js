// 스티커 
// 모르겟음
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input.shift()

for(let i = 0; i < n; i++){
    let count = +input[3 * i]
    let up = input[3 * i + 1].split(' ').map(v => +v)
    let down = input[3 * i + 2].split(' ').map(v => +v)
    let dp =[[0, up[0], down[0]]];

    for(let j = 1; j < count; j++){
        dp[j] = [
            Math.max(...dp[j - 1]),
            Math.max(dp[j - 1][0], dp[j - 1][2] + up[j]),
            Math.max(dp[j - 1][0], dp[j - 1][1] + down[j])
        ]
        // console.log(dp[count -1])
    }
    console.log(Math.max(...dp[count - 1]))
}

