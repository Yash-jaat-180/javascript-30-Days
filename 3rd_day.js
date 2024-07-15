// Activity 1
let n = 0;
if(n < 0){
    console.log("Number is negative");
}
else if(n === 0){
    console.log("Number is zeros");
}
else{
    console.log("Number is positive");
}

let personAge = 18;
if( personAge >= 18){
    console.log("Person is eligible for vote");
}
else{
    console.log("Not eligible for vote");
}

// Activity 2

let a = 4;
let b = 5;
let c = 6;

if(a > b){
    if(a > c){
        console.log("a is greater");
    }
    else{
        console.log("c is greater");
    }
}
else{
    if(b > c){
        console.log("b is greater");
    }
    else{
        console.log("c is greater");
    }
}
//Activity 3
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid number");
        break;
}

// Activity 4

let number = 8;
number % 2 == 0 ? console.log("Number is even") : console.log("Number is odd");

// Activity 5

let year = 2000;
if(year % 400 == 0 || year % 4 ==0 && year % 100 != 0){
    console.log("Leap year");
}
else{
    console.log("Not a leap year");
}