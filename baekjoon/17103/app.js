// 골드바흐 파티션
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = []
let max = Math.max(...input)
let arr = []

for(let i = 0; i < max; i++){
    arr.push(true)
}
arr[0] = false
arr[1] = false

for(let m = 0; m <= max / 2; m++){
    if(arr[m]){
        for(let n = 2; n < max / m; n++){
            arr[m * n] = false
        }
    }
}

for(let k = 1; k < input.length; k++ ){
    let splited = Number(input[k])
    let count = 0
    for(let j = 1; j <= splited / 2; j++){
        if(arr[splited - j] && arr[j]) count++
    }
    result.push(count)
}

console.log(result.join('\n'))

// https://leylaoriduck.tistory.com/511