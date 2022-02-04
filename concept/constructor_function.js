// 생성자 함수(constructor function)
// 비슷한 객체를 여러개 만들 때 사용

    // 객체 리터럴 (아래처럼 객체를 만드는 방식을 부르는 이름)
        let user = {
            name : 'Mike',
            age : 30,
        }


//      첫 글자는 대문자
function User(name, age){
    this.name = name;
    this.age = age;
}

let user1 = new User('Mike', 30); 
let user2 = new User('Jane', 2);
let user3 = new User('Tom', 17);
//         new 연산자를 사용해서 함수 호출
// 생성자 함수를 붕어빵 틀이라고 생각


// 생성자 함수 동작 과정
    function User(name, age){
        this = {}         // 2. 빈 객체 생성하고 this에 할당한다.

        this.name = name; // 3. this에 프로퍼티들 추가
        this.age = age;

        return this;      // 4. this 반환
    }

    new 함수명();           // 1) 실행
                        // 실제 코드에는 2번 4번은 안보인다.


// method 추가
    function User(name, age){
        this.name = name;
        this.age = age;
        this.sayName = function(){
            console.log(this.name + '!!!') // 여기서 this는 user5
        }
    }

    let user5 = new User('Han', 40);
    user5.sayName(); // outcome: Han!!!


// 생성자 함수 : 상품 객체를 생성해보자.
    function Item(title, price){
        // this = {};

        this.title = title;
        this.price = price;
        this.showPrice = function(){
            console.log(`가격은 ${price}원 입니다.`)
        }

        // return this;
    }

    const item1 = new Item('인형', 3000)
    const item2 = new Item('가방', 4000)
    const item3 = new Item('지갑', 9000)

    console.log(item1, item2, item3)
    // outcome: Item {title: '인형', price: 3000, showPrice: ƒ}
    //         Item {title: '가방', price: 4000, showPrice: ƒ} 
    //         Item {title: '지갑', price: 9000, showPrice: ƒ}

    item3.showPrice();
    // outcome: 가격은 9000원 입니다. 

// new 연산자를 안붙인다면 그냥 함수가 실행된다.
    const item1 = new Item('인형', 3000)
    const item2 = Item('가방', 4000)
    // outcome: Item {title: '인형', price: 3000, showPrice: ƒ}
    //          undefined 

// 생산자 함수는 꼭 new 연산자를 붙여야한다.