// Activity 1

let str = `Yash age is : ${18}`;
console.log(str);

let str1 = `Yash loves to do codding
loves to play sports`;
console.log(str1);

// Activity 2
const arr = [1, 2, 3, 4, 5, 6];
let a, b;
[a, b] = arr;
console.log(a, b);

const book = {
    title: "Rich dad, Poor dad",
    author: "xyz",
    year: 2005,
    detail: function () {
        let result = this.title + " " + this.author;
        return result;
    },
    updateYear: function (year) {
        this.year = year;
    }
}


const { title, year } = book;
console.log(title, year);

// Activity 3

let arr1 = [45, 63, ...arr];
console.log(arr1);

function sum(...args) {
    let sum = 0;
    for (const i of args) {
        sum += i;
    }
    return sum;
}

console.log(sum(1, 3, 4, 5));

var name = 'yash';
const obj = {
    name,
    [`thisIs${name}`]: function(){
        return this.name;
    }
};
console.log(obj)

var studentName = 'yash';
var batch = 'G12';
var age = 18;
var detail = function () {
    console.log(this.studentName + ' of age ' + this.age, 'of batch : ' + this.batch);
}

var student = { studentName, batch, age, detail };
console.log(student);
student.detail();
