// 문자열 메소드
// String Methods

let desc = "Hi guys. Nice to meet you";

// 대소문자
// toUpperCase();
// toLowerCase();
    desc.toUpperCase(); // outcome: 'HI GUYS. NICE TO MEET YOU'
    desc.toLowerCase(); // outcome: 'hi guys. nice to meet you'


// str.indexOf(text);
    // 문자를 인수로 받아 몇번째 위치하는지 알려준다.
    // 포함된 문자가 여러개라도 첫번째 위치만 반환한다.
    // 찾는 문자가 없으면 -1을 반환한다.
    // if문을 쓸 때 주의해야한다.
    desc.indexOf('to'); // outcome: 14
    desc.indexOf('man'); // outcome: -1 

    if(desc.indexOf('Hi')){
        console.log('Hi가 포함된 문장입니다.')
    } // outcome: undefined
    desc.indexOf('Hi') // outcome: 0
    // if에서 0은 false이다. 따라서 console에서 찍히지 않는다.

    // -1과 비교하면 된다.
    if(desc.indexOf('Hi') > -1 ){
        console.log('Hi가 포함된 문장입니다.')
    }


let desc = "abcdefg";

// str.slice(n, m);
    // n부터 m까지의 문자열을 반환한다.
    // m은 없으면 문자열 끝까지, 양수면 그 숫자까지(미만), 음수면 끝에서부터 반환
    desc.slice(2); // outcome: 'cdefg'
    desc.slice(0, 5); // outcome: 'abcde'
    desc.slice(2, -2); // outcome: 'cde' -2: 끝에서 두번째째 위치까지 반환


// str.substring(n, m);
    // n과 m 사이 문자열을 반환한다.
    // n과 m을 바꿔도 동작한다.
    // 음수를 허용하지 않는다. 음수는 0으로 인식한다.
    desc.substring(0,3); // outcome: 'abc'
    desc.substring(3,0); // outcome: 'abc'


// str.substr(n, m);
    // n부터 시작.
    // m개를 가져온다.
    desc.substr(2,4); // outcome: 'cdef'
    desc.substr(-4, 2); // outcome: 'de' 


// str.trim();
    // 앞 뒤 공백 제거
    let desc = "  coding    ";
    desc.trim(); // outcome: 'coding'


// str.repeat(n);
    // 문자열을 n번 반복
    let hello = "hello"
    hello.repeat(3); // outcome: 'hellohellohello'


// 문자열 비교
    'a' < 'c' // outcome: true
    "a".codePointAt(0); // outcome: 97
    String.fromCodePoint(97); // outcome: 'a'


    let list = [
        "01. 들어가며",
        "02. JS의 역사",
        "03. 자료형",
        "04. 함수",
        "05. 배열",
    ];

    let newlist = [];
    for(let i = 0; i < list.length; i++){
        newlist.push(
            list[i].slice(4)
        );
    };

    console.log(newlist); // outcome: ['들어가며', 'JS의 역사', '자료형', '함수', '배열']


// 금칙어 : 콜라
    function hasCola(str){
        if(str.indexOf('콜라')){
            console.log('금칙어가 있습니다.')
        } else {
            console.log('통과')
        }
    }

    hasCola('와 사이다가 짱이야!');   // outcome: 금칙어가 있습니다.  -1 
    hasCola('무슨소리, 콜라가 최고'); // outcome: 금칙어가 있습니다.
    hasCola('콜라');              // outcome: 통과  0
    // 결과가 이상함
        let ex = '와 사이다가 짱이야!';
        ex.indexOf('콜라'); // outcome: -1 찾는문자가 없는 경우. if에서 -1은 true

        let cex = '콜라';
        cex.indexOf('콜라'); // outcome: 0  if에서 0은 false

    // 해결
    function hasCola(str){
        if(str.indexOf('콜라') > -1){
            console.log('금칙어가 있습니다.')
        } else {
            console.log('통과')
        }
    }

    hasCola('와 사이다가 짱이야!');   // outcome: 통과 
    hasCola('무슨소리, 콜라가 최고'); // outcome: 금칙어가 있습니다.
    hasCola('콜라');              // outcome: 금칙어가 있습니다.
                        

// 금칙어 : 콜라
// includes
// 문자가 있으면 true
// 문자가 없으면 false 반환
    function hasCola(str){
        if(str.includes('콜라')){
            console.log('금칙어가 있습니다.')
        } else {
            console.log('통과')
        }
    }

    hasCola('와 사이다가 짱이야!');   // outcome: 통과 
    hasCola('무슨소리, 콜라가 최고'); // outcome: 금칙어가 있습니다.
    hasCola('콜라');              // outcome: 금칙어가 있습니다.
