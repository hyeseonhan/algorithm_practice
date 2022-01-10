const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0]
const nums = input.filter((v, i) => i > 0).map((v) => v.split(' '))

const deque = []
const log = []

nums.forEach((v) => {
    switch(v[0]){
        case "push_front":
            deque.unshift(+v[1])
            break
        case "push_back":
            deque.push(+v[1])
            break
        case "pop_front":
            if(deque.length === 0) log.push(-1)
            else {
                log.push(deque[0])
                deque.shift()
            }
            break
        case "pop_back":
            if(deque.length === 0) log.push(-1)
            else {
                log.push(deque[deque.length - 1])
                deque.pop()
            }
            break
        case "size":
            log.push(deque.length)
            break
        case "empty":
            if(deque.length > 0) log.push(0)
            break
        case "front":
            if(deque.length > 0) log.push(deque[0])
            else log.push(-1)
            break
        case "back":
            if(deque.length > 0) log.push(deque[deque.length -1])
            else log.push(-1)
            break
    }
})
console.log(log.join('\n'))