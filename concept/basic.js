// 변수 선언
// const : 변하지 않는 값
// let : 변할 수 있는 값
let name = "Mike"; 
let age = 30;


// 자료형

    // 문자형 String
        const name1 = "Mike"; 
        const name2 = 'Mike'; 
        const name3 = `Mike`; 
            const message = `My name is ${name1}`;
            // 문자열 내부의 변수 표현


    // 숫자형 Number
        const age = 30;
        const y = name1 / 2;
            console.log(y);
            // outcome: NaN;
            // NaN = Not a Number 숫자가 아니다.


    // Boolean 논리적인 요소
        const a = true; // 참
        const b = false; // 거짓
        name1 === 'Mike' // true
        age > 40 // false


    // null 과 undefined
        // null: 존재하지 않는 값
        // undefined: 값이 할당되지 않았다.


    // typeof 연산자
        // 변수의 자료형을 알아낼 수 있다.
        // 변수를 사용자가 직접 작성했다면 typeof 연산자를 사용할 일이 거의 없다.
        // 다른 개발자가 작성한 변수의 type을 알아야하거나, API 통신을 통해 받아온 데이터를 type에 따라 다른 방식으로 처리할 때 사용한다.
        typeof name1 // outcome: 'stirng'
        typeof age // outcome: 'number'
        typeof null // outcome: 'object' 객체형


// 대화상자
    alert() // 메세지를 보여준다. 
    prompt() // 값을 입력 받음
    confirm() // 확인 받음

    const name4 = prompt('이름을 입력하세요')
        alert("환영합니다," + name4 + "님")

    const date = prompt("예약일을 입력해주세요.", "2022-10-") // 두개의 인수를 받을 수 있음. (메세지, defalut 값)
    
    const isAdult = confirm("당신은 성인 입니까?") // true false

    // 단점
        // 1. 스크립트 일시 정지
        // 2. 스타일링 불가


// 형변환(Type Conversion)
    // 자료형이 다르 때 사용

    // 명시적 형변환: 의도를 가지고 원하는 타입으로 변환
    String() // 괄호 안의 자료형을 문자형으로 변환
    Number() // 괄호 안의 자료형을  숫자형으로 변환
    Boolean() // 괄호 안의 자료형을  불린형으로 변환

    const mathScore = prompt("수학 몇점?");
    const engScore = prompt("영어 몇점?");
    const mathScore1 = 90;
    const engScore1 = 80;
    const result1 = (mathScore + engScore) / 2;
    const result2 = (mathScore1 + engScore1) / 2;
    console.log(result1); // 4540 wrong: prompt로 입력받은 값은 문자형 
                          //  => "9080" / 2 자동 형변환에 의해 문자형이 계산이 됨
    console.log(result2); // 85

    String(3); // '3'
    String(true); // 'true'

    Number("1234"); // 1234
    Number('asasdf'); // NaN
    Number(true); // 1
    Number(false); // 0

    Number(null) // 0
    Number(undefined) // NaN

    Boolean(0); // false
    Boolean(""); // false
    Boolean(null); // false
    Boolean(undefined); // false
    Boolean(NaN); // false

    Boolean('0'); // true 문자0
    Boolean(" "); // true


// 연산자(Operators)
// 더하기+ 빼기- 곱하기* 나누기/ 나머지%
    if(x % 2 === 1) odd; // 2로 나눈 나머지가 1 이면 홀수
    if(y % 2 === 0) even;
    const numex = 2**3; // 거듭제곱 2에 3승 8

    let num = 10;
    num = num + 5;
    num += 5; // 위의 식을 간단히

    // 증가 연산자 감소 연산자
    let num1 = 10;
    let result1 = num++; // 10 값이 변경되지 않음
    let result2 = ++num; // 11 증가시킨 값을 result2에 넣는다
    num1--;


    // 비교 연산자
    // 반환 값은 항상 Boolean형 true or false
    let a = 3 // 3을 a에 할당
    a == 3; // 추상적(abstract) 비교. a가 3과 같은가? 
    a === 3; // 엄격한(strict) 비교. 타입까지 비교
    a !== 3; // a가 3과 다른가?

    const aaa = 1; // 숫자형
    const bbb = '1'; // 문자형

    // 동등연산자
    aaa == bbb // true

    // 일치연산자 
    aaa === bbb // false 타입까지 비교


    // 조건문
    // if
    // else : if문이 false 일 때 실행
    // else if : 추가 요구사항이 있을 때
    if(age > 19){
        console.log("환영 합니다.")
    } else if(age === 19){
        console.log("수능 잘 보셈")
    }
    else {
        console.log("안녕히 가세요.")
    }


    // 논리연산자
        // or || - 여러개 중 하나라도 true 이면 true. 즉, 모든 값이 false 일 때만 false 반환
        //       - 첫번째 true를 발견 즉시 평가를 멈춘다.

        // and && - 모든 값이 true 이면 true. 즉, 하나라도 fasle 이면 false 반환
        //        - 첫번째 false를 발견하는 즉시 평가를 멈춘다.

        // not ! : true와 false를 반대값을 바꾼다. true이면 false. false 이면 true

        // 우선순위: 일치연산자가 우선으로 마지막에 보이는 값이 


// 반복문 loop: 동일한 작업을 여러번 반복

    // for 문
        //      초기값   조건     코드 실행 후 작업  
        for(let i = 0; i < 10; i++){ 
            // 반복할 코드
        }
        // 초기값은 처음 한번만 실행된다. 조건을 확인하고 false이면 멈춘다. 
        // 코드 실행 후 작업 : 반복문이 한번 실행된 후 해야할 작업을 명시
        // i = 0, true : 실행 i++  =>  i = 1, true : 실행 i++  =>  i = 2, true : 실행 i++ ...  i = 10, false 멈춤
        for(let i = 0; i < 10; i++){ 
            console.log(i)
        }
        for(let i = 0; i < 10; i++){ 
            console.log(i + 1)
        }
        for(let i = 0; i < 11; i++){ 
            console.log(i)
        }

    // while 문

        let i = 0;
        
        while(i < 10){
            // 코드
            i++
        }

        let i = 0;
        
        while(i < 10){
            console.log(i)
            i++
        }

    // do.. while
        let i = 0;

        do{
            // 코드
            i++;
        } while(i < 10)

    // 반복문 빠져나올 때
        break; // 코드 실행 멈추고, 해당 반복문을 빠져나온다.
        continue // 멈추고 다음 반복으로 진행한다.

        while(true){
            let answer = confirm('계속할까요?')
            if(!answer){
            break;
            }
        }

        // 짝수만
        // 최초 i = 0
        for(let i = 0; i < 10; i++){ 
           if(i % 2){
                continue
           }
        console.log(i)
        }

        for(let i = 0; i < 10; i++){ 
            if(i % 2 === 1){
            continue
           }
       console.log(i)
       }


// switch
// if ~ else 보다 간결하게 작성
// break문을 만나면 나간다
    switch(평가){
        case A: // A일 때 코드
        case B: // B일 때 코드
    }
        // switch문을 if문으로 바꾸면
    if(평가 === A){
        // A일 때 코드
    } else if(평가 === B){
        // B일 때 코드
    }

    let fruit = prompt("무슨 과일을 사고 싶어?");

    switch(fruit){
        case '사과' :
            console.log('100원 입니다.');
        case '바나나' :
            console.log('200원 입니다.');
        case '키위' :
            console.log('300원 입니다.');
    };
    // break를 만나기전에는 다 실행한다. break문을 넣어야한다.

    switch(fruit){
        case '사과' :
            console.log('100원 입니다.');
            break;
        case '바나나' :
            console.log('200원 입니다.');
            break;
        case '키위' :
            console.log('300원 입니다.');
            break;
        case '멜론' :
            console.log('300원 입니다.');
            break;    
        // 에러 확인 if문에서는 else 사용, switch에서는 default를 사용한다.
        default :
            console.log('그런 과일은 없다')
    };

    // '키위'와 '멜론'이 동일한 코드가 있는 경우 
    switch(fruit){
        case '사과' :
            console.log('100원 입니다.');
            break;
        case '바나나' :
            console.log('200원 입니다.');
            break;
        case '키위' :
        case '멜론' :
            console.log('300원 입니다.');
            break;    
        default :
            console.log('그런 과일은 없다')
    };
