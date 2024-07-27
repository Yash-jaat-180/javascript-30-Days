// Activity 1


function outer(){
    let a = 5;
    return function inner(){
        return a;
    }
}

let a = outer();
console.log(a());

function main(){
    let privateCounter = 0;
    return {
        increament: function(){
            return privateCounter++;
        },
        getCurrenctValue: function(){
            return privateCounter;
        }
    }
}

let count = main();
count.increament();
count.increament();
console.log(count.getCurrenctValue());


function trackId(){
    let id = Math.floor(Math.random() * 10000000)
    return function increamentId(){
        return id++;
    }
}

let idTrack = trackId();
console.log(idTrack());
console.log(idTrack());
console.log(idTrack());

function enterName(){
    return function greet(name){
        console.log(`Good Morning ${name}`);
    }
}

let greet = enterName();
greet('yash');
greet('Salin');

// Activity 3

let arr = new Array();
for (let i = 0; i < 5; i++){
    arr.push(
        function (){
            return i;
        }
    )
}
console.log(arr)

let function3 = arr[3];
console.log(function3());


// Activity 4

function arrMethods(){
    let arr = [];
    return {
        add: function(num){
            arr.push(num);
        },
        remove: function(num){
            let index = arr.indexOf(num);
            if( index > -1){
                arr.splice(index, 1);
            }
        },
        getArr: function(){
            console.log(arr);
        }
    }
}

let methods = arrMethods();
methods.add(5);
methods.add(6);
methods.getArr();
methods.remove(5);
methods.getArr();

// Activity 5

function add(a,b){
    return a + b;
}

function memoize(fn){
    const cache = {};
    return function (...args){
        const key = JSON.stringify(args);
        if(cache[key] === undefined){
            console.log(`Computed result for key ${key}`);
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
        else{
            console.log(`Returing cached result for key ${key}`);
            return cache[key];
        }
    }
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(1,2));
console.log(memoizeAdd(1,2));
console.log(memoizeAdd(3,4));


function factorial(n){
    if(n === 0){
        return 1;
    }
    return n * factorial(n - 1)
}

const memoizeFactorial = memoize(factorial);

console.log(memoizeFactorial(3));
console.log(memoizeFactorial(3));
console.log(memoizeFactorial(4));