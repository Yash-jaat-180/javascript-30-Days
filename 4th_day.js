// Activity 1
let r1 = "";
for (let i = 1; i < 11; i++) {
    r1 += `${i} `;
}
console.log(r1);
let a = 5;
let r2 = "";
for (let i = 1; i < 11; i++){
    r2 += `${i * a} `;
}
console.log(r2);

// Activity 2

let sum = 0;
let i = 1;
while (i < 11) {
    sum += i;
    i++;
}
console.log("sum is : ", sum);
let number = 10;
while( number > 0){
    console.log(number, " ");
    number--;
}

// Activity 3
let num = 1;
do {
    console.log(num, " ");
    num++;
} while (num < 6);

let n = 5;
let fact = 1;
do {
    fact *= n;
    n--;
} while (n > 0);
console.log("fact is : ", fact);

// Activity 4

for(let i = 1; i <= 5; i++){
    let r3 = "";
    for(let j = 1; j <= i; j++){
        r3 += "* ";
    }
    console.log(r3);
}

// Activity 5

for(let i = 1; i < 11; i++){
    if(i === 5){
        continue;
    }
    else{
        console.log(i, " ");
    }
}

for(let i = 1; i < 11; i++){
    if(i === 7){
        break;
    }
    console.log(i, " ");
}