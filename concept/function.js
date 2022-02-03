// 함수(function)
// 자주 사용하는 동작들은 하나로 만들어서 재활용한다.

    // 함수   함수이름   매개변수
    function sayHello(name){
        const msg = `Hi, ${name}`
        console.log(msg)
    }
    sayHello('Mike') // 함수 호출
    sayHello('영수')
    sayHello('민지')

    // 매개변수가 없는 함수
    function showError(){
        alert('에러가 발생')
    }
    showError()

    // 사용자의 이름을 모르는 경우
    function sayHello(name){
        console.log(name) // outcome: undefined 
        let msg = `Hi`
        if(name){         // undefined는 false이므로 if문 내부 안에 들어갈 수 없어서 Hi 출력
            msg = `Hi, ${name}`
        }
        console.log(msg)
    }

    function sayHello(name){
        let msg = `Hi`
        if(name){
            msg += ', ' + name     // msg에 name을 더해서 다시 msg
        }
        console.log(msg)
    }
    sayHello('철용') // outcome: Hi철용

    function sayHello(name){
        let msg = `Hi`
        if(name){
            msg += `, ${name}!` // 백틱으로 해도됨
        }
        console.log(msg)
    }
    // msg는 함수 밖에서는 사용할 수 없다. => 지역변수(local varable) : 함수 내부에서만 접근할 수 있는 변수
    // 함수 외부에서 사용하고 싶다면 msg를 외부로 꺼내야한다. => 전역변수(global varable) : 어디서나 접근할 수 있는 변수
        let msg = `Hi`;
        console.log('함수 호출 전:', msg); // outcome: 함수 호출 전: Hi

        function sayHello(name){
            if(name){
                msg += `, ${name}!` // 백틱으로 해도됨
            }
            console.log('함수 내부:', msg); // outcome: 함수 내부: Hi, Mike!
        }

        console.log('함수 호출 후:', msg); // outcome: 함수 호출 후: Hi, Mike!
    
    // 전역 변수와 지역변수
    // 한 번 let으로 선언한 변수는 다시 let을 이용해서 선언할 수 없다.
        let msg = "welcome";

        function sayHello(name){
            let msg = "Hello"
            console.log(msg + ' ' + name)
        }
        sayHello('Mike') // outcome: Hello Mike
        //
        //
        let msg = "welcome";
        console.log('외부:',msg)    // outcome: 외부: welcome

        function sayHello(name){
            let msg = "Hello"
            console.log('내부:',msg + ' ' + name)
        }
        sayHello("mike")          // outcome: 내부: Hello mike
        console.log('마지막:',msg)  // outcome: 마지막: welcome
    // ∴ 지역변수와 전역변수 동일한 이름으로 선언할 수 있고, 서로 간섭을 받지 않는다.

        let name = "Mike";

        function sayHello(name){
            console.log(name)
        }
        sayHello()      // outcome: undefined
        sayHello("철수") // outcome: 철수
    // ∴ 매개변수로 받은 값은 복사된 후 함수의 지역변수가 된다. 전역변수가 많아지면 관리가 힘들다. 
    // ∴ 함수에 특화된 지역변수를 사용하는게 좋다.

    // OR
        function sayHello(name){
            let newName = name || 'friend'
            let msg = `Hello, ${newName}`
            console.log(msg)
        }
        sayHello()      // outcome: Hello, friend
         // 매개변수가 없으면 undefined가 값으로 들어가므로 false => friend 반환
        sayHello("철수") // outcome: Hello, 철수

    // 매개변수의 기본값(default)을 설정
        function sayHello(name = 'friend'){ // 이 default값은 name이 없을 때만 할당된다.
            let msg = `Hello, ${name}`
            console.log(msg)
        }
        sayHello()      // outcome: Hello, friend
        sayHello("철수") // outcome: Hello, 철수

    // return으로 값 반환
        function add(num1, num2){
            return num1 + num2
            alert('이 코드는 절대 실행되지 않는다.')
        }
        add(1,4)
        const result = add(1, 4)
        console.log(result)
    // return은 return의 오른쪽 값을 반환하고 즉시 종료한다. return 다음 코드는 실행되지 않는다.


    
// 함수 표현식
// 화살표 함수 

// 함수 선언문 vs 함수 표현식

    // 함수 선언문 : 어디서든 호출 가능
    function sayHello(){
        console.log('Hello');
    }
    sayHello()

        // 이렇게 작석해도 작동을 한다. (∵ 자바스크립트의 내부 알고리즘)
        // JS는 실행 전 초기화 단계에서 모든 함수 선언문을 찾아서 생성한다. 함수의 사용범위가 넓어진다.
        // => 호이스팅
        sayHello() // outcome: Hello
        function sayHello(){
            console.log('Hello');
        }

    // 함수 표현식 : 코드에 도달하면 생성
    let sayHello = function sayHello(){
        console.log('Hello');
    }
    sayHello()

        sayHello() // 함수 표현식은 이렇게 적으면 에러
        let sayHello = function sayHello(){
            console.log('Hello');
        }
    
// 화살표 함수(arrow function)

    let add = function(num1, num2){
        return num1 + num2;
    }

    // 화살표 함수로 표현
    // function 없어지고 =>가 생김
    let add = (num1, num2) => {
        return num1 + num2;
    }

    // return이 사라지고 소괄호
    let add = (num1, num2) => (
        num1 + num2
    )

    // return문이 한 줄이라면 괄호 생략가능
    let add = (num1, num2) => num1 + num2;

    // 인수가 하나라면 괄호 생략가능
    let sayHello = name => `Hello, ${name}`

    // 인수가 없는 함수는 인수의 괄호를 생략할 수 없다.
    const showError = () => {
        alert("error!")
    }
        
    // return 전에 여러줄에 코드가 있으면 소괄호로 바꿀 수 없다.
    let add = function(num1, num2){
        const result = num1 + num2;
        return retsult;
    }

    let add = (num1, num2) => {
        const result = num1 + num2;
        return retsult;
    }

