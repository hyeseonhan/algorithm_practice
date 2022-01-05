const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input)

function solution(input){
    let T = input.shift()
    let arr = []
    for(let i = 0; i < T * 2; i = i + 2){
        k = +input[i]
        n = +input[i + 1]
        arr.push([k, n])
    }

    let floor = []
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        k = arr[i][0]
        n = arr[i][1]
        for(let j = 0; j <= k; j++ ){
            floor[j] =[]
            for(let m = 1; m <= n; m++){
                if( j === 0){
                    floor[j].push(m)
                } else {
                    sum += floor[j -1][m -1]
                    floor[j].push(sum);
                    if(m === n){
                        sum =0
                    }
                }
            }
        }
        console.log(floor[k][n-1])
    }
}