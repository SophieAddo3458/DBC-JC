///function declaration

function add(){
    let a= 5;
    let b= 10;
    return a+b;
}

console.log(add(20, 30));

function paramAdd(num1, num2){
    let a = num1;
    let b = num2;
    return a+b;
}

console.log(paramAdd(20,30));

const sub = function(num1 = 10, num2 = 30){
    let a = num1;
    let b = num2;
    return a-b;
}


console.log(sub(20,30));

console.log(sub());

function greeting(name){
    return(`Hello ${name}`);
}

console.log(greeting("Sophie"));

//arrow function

const addArrow = (num1, num2)=>{
    let a = num1;
    let b = num2;
    return a + b;
}

console.log(addArrow(20, 30));


//closure

function outerFunction(){
    let outerVariable = "i am outside";

    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction;
}
const myInnerFunction = outerFunction();
myInnerFunction();

let myEven = [];

//push
function evenNumbers(limit) {
    for (let i=0; i<= limit; i+=2){
            myEven.push(i)
        } 
return myEven;
}

console.log(evenNumbers(10));

let numbers = [1,2,3,4,5,6,7,8,9,11,12,13,14,15];
let resultOdd = numbers.filter((num)=>{
    return num % 2 !== 0;
}
)

console.log(resultOdd);