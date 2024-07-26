// Activity 1 and 2
try {
    const string = "hello";
    console.log(yahhoo);
} catch (error) {
    console.error("Error in printing yahhoo");
}finally{
    console.log("Finaaly Done!");
}


function divide(a,b){
    if(b !== 0){
        console.log(a / b);
    }
    else{
        // throw new Error("Divider can't be 0");
    }
}

divide(4,0)

// Activity 3

class classError extends Error {
    constructor(message){
        super(message);
        this.name = this.contructor.name;
    }
}

function throwError(){
    throw new classError("Oops! Something went wrong");
}

try {
    throwError();
} catch (error) {
    console.error("caught custom error", error.message);
}

class InputError extends Error {
    constructor(message) {
        super(message)
        this.name = this.constructor.name
    }
}

function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new InputError("Please enter a non-empty string !!")
    }
}

try {
    let user_input = ''
    validateInput(user_input)
    console.log("Input is valid : ", user_input)
} catch (error) {
    console.error(error.name,error.message)
}

// Activity 4
let promise =  new Promise((resolve, reject) => {
    reject("This is a rejected promise");
})
promise.then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
})

function randomPromise(){
    return new Promise((resolve, reject) => {
        let num = 2;
        if (num > 0){
            reject(new Error("Num is greater than zero"));
        }
        else{
            resolve("Num is less than one");
        }
    })
}

async function handlePromise1(){
    try {
        let promise1 = await randomPromise();
        console.log(promise1);
    } catch (error) {
        console.log("Num error : ",error.message);
    }
}

handlePromise1();

// Activity 5

async function fetchApi(){
    return await fetch('https://api.kanye.rest/')
    .then((res) => res.json())
}

fetchApi()
.then((res) => console.log(res))
.catch((error) => console.error("Fetching Error : ", error.message))


async function fetchData(){
    try {
        const response = await fetch('https://api.kanye.rest/');
        if(!response.ok){
            throw new Error("Network resonponse was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Fetching Error : ', error.message);
    }
}

fetchData();