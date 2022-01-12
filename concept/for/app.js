// for 반복문
const name = "hyeseon";

for(let i = 0; i < name.length; i++){
    // console.log(name[i]);
}


// for ... of
const 오브의반복 = "forof"
const 오브는배열 = ["오브", "는", "배열"]

for(let j of 오브의반복){
    // console.log(j)
    // "f"
    // "o"
    // "r"
    // "o"
    // "f"
}

for(let j of 오브는배열){
    console.log(j)

// "오브"
// "는"
// "배열"
}


// for ... in
const 인의반복 = "forin"
const 인은객체 = {
   원: "인", 
   투: "는", 
   쓰리: "객체"}

for(let k in 인의반복){
    // console.log(k)
    // "0"
    // "1"
    // "2"
    // "3"
    // "4"
}

for(let k in 인은객체){
    // console.log(k)
    // "원"
    // "투"
    // "쓰리"

    console.log(인은객체[k])
    // "인"
    // "은"
    // "객체"
}

// for ...in: 객체의 key 값과 value 값을 받을 수 있다. (배역에서 사용하는 것은 적절하지 않다.)