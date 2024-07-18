// Activity 1
let a = 5;
function checkEvenOdd(b) {
    if(b % 2 == 0){
        console.log("Even");
    }
    else{
        console.log("odd");
    }
}
checkEvenOdd(a);
function calculateSquare(a){
    return a * a;
}
let square = calculateSquare(a);
console.log(square);

// Activity 2
let b = 5;
let c = 7;
function findGreatestNumber(b , c){
    if( b > c){
        console.log(b," is greater");
    }
    else{
        console.log(c, "is greater");
    }
}
findGreatestNumber(b, c);

let str1 = "yash";
let str2 = " jaat";
function concatinate(str1, str2){
    return str1.concat(str2);
}
let result = concatinate(str1, str2);
console.log(result);

// Activity 3
const sum = (b, c) => {
    return b + c;
}
console.log(sum(b,c));

let hey = "yash";
const isCharacterPresent = (hey) => {
    for( let i = 0; i < hey.length; i++){
        if(hey[i] === 's'){
            return true
        }
    }
    return false;
}
console.log(isCharacterPresent(hey));

// Activity 4

function product(a = 4 , b = 7){
    return a * b;
}
console.log(product());

function greeting(name,age = 18){
    return `${name} are elegible because of age : ${age}`
}

console.log(greeting('yash'));

// Activity 5
function abc(i){
    console.log(`hello`, i);
}
function higherOrder(abc, n = 4){
    for(let i = 0; i < n; i++){
        abc(i + 1);
    }
}
higherOrder(abc);

function a1(value){
    return value * 10;
}
function a2(result){
    return result * 10;
}

function higerOrder2(a1, a2, value = 5){
    let a = a1(value);
    console.log(a); // 50
    console.log(a2(a)); // 500
}

higerOrder2(a1, a2);