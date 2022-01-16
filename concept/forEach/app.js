// forEach
// 배열의 첫번째부터 마지막까지 반복하면서 item을 꺼낼 수 있다.

let arr = ["사과", 2, 3, 4, 5]

arr.forEach(function(item, index, arr2){
    console.log(`${item}의 ${index}번째 요소: ${item}`)
})

// arr 객체의 요소들이 callback 함수에 순서대로 호출된다.
arr.forEach(function(item){
    // console.log(item)
})