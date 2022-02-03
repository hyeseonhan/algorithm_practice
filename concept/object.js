// 객체(Object)

    // 객체 만들기
        // {중괄호} 키(key)와 값(value)로 구성
        // 각각의 property는 쉼표, 로 구분

        // superman, name: tom, age:33
        const superman = {
        //  key   value     
            name: 'tom',
            age: 33,
        }


    // Object - 접근, 추가, 삭제

        // Object 접근
            superman.name   // outcome: 'tom'
            superman['age'] // outcome: 33

        // Object 추가
            superman.gender = 'male' 
            // {name: 'tom', age: 33, gender: 'male'}
            superman['hairColor'] = 'black'
            // {name: 'tom', age: 33, gender: 'male', hairColor: 'black'}

        // Object 삭제
            delete superman.hairColor
            // {name: 'tom', age: 33, gender: 'male'}


    // Object - 단축 프로퍼티
        const name1 = 'clark';
        const age1 = 33;

        const superman = {
            name: name1,
            age : age1,
            gender: 'male',
        }
        // 객체 name에는 name1변수, age에는 age1변수가 들어가있다.

        const superman = {
            name1: name1,
            age1 : age1,
            gender: 'male',
        }
        // 객체 key와 변수명이 같으면 아래처럼 간단히 작성 가능
        const superman = {
            name1,
            age1,
            gender: 'male',
        }


    // Object - 프로퍼티 존재 여부 확인
        
        // 만약 존재하지 않는 프로퍼티에 접근한다면, undefined
        superman.birthDay; // outcome: undefined

        // in 연산자를 사용하여 프로퍼티가 있는 확인 가능
        // 어떤 값이 넘어올지 확신할 수 없을 때 사용. 함수의 인자나 API 통신으로 데이터를 받을 경우
        'birthDay' in superman // outcome: false
        'age' in superman      // outcome: true

    
    // for ... in 반복문
    // 객체를 순회하면서 값을 얻는다.
    
        for(let key in superman){
            console.log(key); 
            console.log(superman[key])
        }
            // outcome: 
                // name
                // tom
                // age
                // 33
                // gender
                // male

        function makeObject(name, age){
            // return으로 객체 반환
            return {
                name: name,
                age: age,
                hobby: 'football',
            }
        }

        const Mike = makeObject('Mike', 30)
        console.log(Mike) // outcome: {name: 'Mike', age: 30, hobby: 'football'}
        
        // 축약형
            function makeObject(name, age){
                return {
                    name,
                    age,
                    hobby: 'football',
                }
            }
        
            // in을 이용해서 프로퍼티가 존재하는지 확인
            console.log('age' in Mike) // outcome: true
            console.log('birthday' in Mike) // outcome: false

    
    // 객체 in
        function isAdult(user){
            if(user.age < 20){
                return false;
            } else {
                return true
            }
        }

        function isAdult(user){
            if(user.age < 20){
                return false;
            } 
            return true
        }

        const Mike = {
            name : Mike,
            age: 30
        }

        const Jane = {
            name : "Jane"
        }

        console.log(isAdult(Mike)) // outcome: true
        console.log(isAdult(Jane)) // outcome: true 나이가 없는데 성인이라고 나오면 안됨

        function isAdult(user){ 
            if( !('age' in user) || user.age < 20 ){ // user에 age가 없거나 || 20살 미만이면
                return false;
            } 
            return true
        }
        console.log(isAdult(Mike)) // outcome: true
        console.log(isAdult(Jane)) // outcome: false                


        const Mike = {
            // 객체 for ... in
            name: "Mike",
            age : 30
        };

        for(x in Mike){ // x : Mike가 가지고있는 프로퍼티. 이름은 상관없다. x 말고 다른게 와도 됨
            console.log(x)
        }
        // outcome: name age 문자열

        for(x in Mike){ 
            console.log(Mike[x]) // Mike['name'] Mike['age']
        }
        // outcome: Mike 30



// 객체(Object) metode / this

    const superman = {
        name = "clark",
        age : 33
    }; 

    // 객체에 함수 추가  =>  method: 객체 프로퍼티로 할당된 함수
    const superman = {
        name : "clark",
        age : 33,
        fly: function(){
            console.log('날아가자~')
        }
    }; 
    // 호출
    superman.fly(); // outcome: 날아가자~
                    // fly 함수가 superman 객체의 method

        // 축약형
        const superman = {
            name : "clark",
            age : 33,
            fly(){
                console.log('날아가자~')
            }
        }; 

    
    // 객체와 method의 관계
        const user = {
            name: "Mike",
            sayHello(){
                console.log(`Hello, I'm ${this.name}`)
            }
        }
        user.sayHello(); // outcome: Hello, I'm Mike

        // 예제
        let boy = {
            name : 'Mike',
        };

        let girl = {
            name : 'Jane',
        };

        // sayHello 함수를 각 객체의 메서드로 넣어준다.
        let boy = {
            name : 'Mike',
            sayHello : function(){
                console.log(`Hello, I'm ${this.name}`)
            }
        }

        let girl = {
            name : 'Jane',
            sayHello : function(){
                console.log(`Hello, I'm ${this.name}`)
            }
        } 

        // 화살표 함수로 선언()
            sayHello : () => {
                console.log(`Hello, I'm ${this.name}`)
            }

            let boy = {
                name : 'Mike',
                sayHello,
            }

            let girl = {
                name : 'Jane',
                sayHello,
            } 

        // 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
        // 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져옴
            let boy = {
                name : 'Mike',
                sayHello : () => {
                    console.log(`Hello, I'm ${this.name}`)
                } 
            }
            boy.sayHello() // outcome: Hello, I'm 
                        // this !== boy
                        // this는 전역객체를 가리킨다.
                                // 전역객체는 브라우저 환경에서는 window, Node js에서는 global
                
            let boy = {
                name : 'Mike',
                showName : function (){
                    console.log(boy.name)
                }
            } 
            boy.showName() // outcome: Mike

        // man 에 boy 할당( = 별명이 man, boy 두개인거)
            let man = boy;
            man.name = "Tom" // man의 name을 Tom 으로 바꾸면
            boy.name // outcome: Tom
            man.showName() // outcome: Tom


            let boy = {
                name : 'Mike',
                showName : function (){
                    console.log(boy.name)
                }
            } 
            boy.showName() 

        // 현재 Mike 접근할 수 있는게 man 과 boy
        // boy를 null로 만들어서 man만 Mike 접근할 수 있다.
            boy = null;
            man.showName() /// outcome: 에러
        // 에러가 나는 경우에는 this 로 바꿔준다.
            let boy = {
                name : 'Mike',
                showName : function (){
                    console.log(this.name) // method의 this는 해당 객체를 가르킨다.
                }
            } 
            boy = null;
            man.showName() // outcome: Mike


        let boy = {
            name : 'Mike',
            showThis : function(){
                console.log(this) 
            }
        }     
        boy.showThis() // outcome: {name: 'Mike', showThis: ƒ} 객체 반환(this는 객체를 의미)

        // 화살표 함수로 선언()
            let boy = {
                name : 'Mike',
                showThis : () => {
                    console.log(this) 
                }
            } 
            boy.showThis() // outcome: 이상한 오류 Window가 나온다.
        // 화살표 함수로 작성을 하면 this는 boy를 가르키는 것이 아니라 Window(=전역객체)를 가르킨다.
        // 그래서 객체의 method를 작성할 때는 화살표 함수로 작성하지 않는게 좋다
            let boy = {
                name : 'Mike',
                showThis : () => {
                    console.log(boy) 
                }
            } 
            boy.showThis() // outcome: {name: 'Mike', showThis: ƒ}
        
        // 객체의 method를 작성할 때 this를 사용해서 객체에 접근해야한다면 화살표 함수를 이용하지 않는 것이 좋다.

