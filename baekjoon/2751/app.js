let input = [] 
require('readline') 
    .createInterface(process.stdin, process.stdout) 
    .on('line', function(x) { input.push(x.trim()) }) 
    .on('close', function() { 
        const [N, ...order] = input.map(Number) 
        const result = order.sort((a, b) => a - b) 
        console.log(result.join('\n')); 
    })

    //https://forgottenknowledge.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B0%B1%EC%A4%80-2751%EB%B2%88-%EC%88%98-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0-Unfinished

// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');

// const [n, ...nums] = input.map((item) => Number(item))
// const arr = nums.sort((a, b) => a - b)

// for(let i = 0; i < n; i++){
//     console.log(arr[i])
// }

// const [N, ...numList] = input.map((e) => Number(e));
// const result = numList.sort((a, b) => a - b);
// console.log(result.join('\n'));
