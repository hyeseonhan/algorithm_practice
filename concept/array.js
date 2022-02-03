// 배열(Array)
// 순서가 있는 리스트
// 고유번호 = Index 

// 배열은 문자뿐만 아니라 숫자, boolean, 객체, 함수 등도 포함할 수 있다.
    let arr = [
        '민수',
        3,
        false,
        {
            name: "Mike",
            age: 30,
        },
        function(){
            console.log("TEST")
        }
    ];

// length: 배열의 길이(=배열이 가지고 있는 요소의 갯수를 반환)
    arr.length // outcome: 5

// 배열의 method
    // push(): 배열 끝에 추가
        let days = ['월', '화', '수'];
        days.push('목')
        days // outcome: ['월', '화', '수', '목']

    // pop(): 배열 끝의 요소를 제거
        let days = ['월', '화', '수'];
        days.pop()
        days  // outcome: ['월', '화']

    // shift, unshift : 배열 앞에 추가/제거
        // 추가
            let days = ['월', '화', '수'];
            days.unshift('일');
            days // outcome: ['일', '월', '화', '수']

        // 제거
            days.shift(); // outcome: 일
            days // outcome: ['월', '화', '수']


// 반복문 : for
    let days = ['월', '화', '수'];

    for(let index = 0; index < days.length; index++){
        console.log(days[index])
    }
    // outcome: 월 화 수
    // index가 배열의 길이 보다 작으면 코드를 실행하고 index를 1 증가시킨다.

// 반복문 : for ... of
    let days = ['월', '화', '수'];

    for(let day of days){
        console.log(day)
    }
    // outcome: 월 화 수


let days = ['mon', 'tue', 'wed'];
days // outcome: ['mon', 'tue', 'wed']

days[1] = '화요일'
days // outcome: ['mon', '화요일', 'wed']

days.push('목요일')
days // outcome: ['mon', '화요일', 'wed', '목요일']

days.unshift('sun')
days // outcome: ['sun', 'mon', '화요일', 'wed', '목요일']

for(let i = 0; i < days.length; i++){
    console.log(days[i])
}
// outcome: sun, mon, 화요일, wed, 목요일

for(let d of days){
    console.log(d)
}
// outcome: sun, mon, 화요일, wed, 목요일