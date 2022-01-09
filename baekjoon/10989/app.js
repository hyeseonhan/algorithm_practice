const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [n, ...nums] = input.map((item) => Number(item))

const max = Math.max(...nums);
const arr = new Array(max + 1)
arr.fill(0)

for(let i = 0; i < n; i++){
    arr[nums[i]]++
    // console.log(arr)
}

for(let i = 0; i < arr.length; i++){
    if(arr[i]){
        for(let j = 0; j < arr[i]; j++){
            console.log(i)
        }
    }
}



// 계수 정렬
// 카운팅 정렬
// https://taesung1993.tistory.com/30
// https://nyang-in.tistory.com/219