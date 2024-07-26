// Activity 1
class Person {
    name = 'yash';
    age = 18;
    greeting() {
        return "Hello", this.name, 'of age', this.age;
    }
    updateAge(age){
        this.age = age;
    }

    static greeting2(){
        return "Go to hell";
    }
    get fullName(){
        return `Mr. ${this.name}`;
    }
    set fullName(name){
        this.name = name;
    }
}

const yash = new Person("yash", 18);
// yash.greeting();
// yash.updateAge(100);
// yash.greeting();

// Activity 2

class Student extends Person{
    static studentCount = 0;
    constructor(studentId,name, age){
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }
    returnStudentId(){
        return this.studentId;
    }
    greeting(){
        return `Hello ${this.name} of roll no. : ${this.studentId}`
    }
    
}

let student1 = new Student(2310991001);
let student2 = new Student(1001);
console.log(student1.studentId);

console.log(student1.greeting());

// Activity 3
let g2 = Person.greeting2();
console.log(g2);

console.log(Student.studentCount);

// activity 4

console.log(`Before update: ${yash.name}`);
yash.fullName = "Sannadhiya";
console.log(`After update: ${yash.name}`);

// Activity 5

class Account {
    #balance = 2000;
    constructor(balance){
        this.#balance = balance;
    }
    deposit(money){
        this.#balance += money;
        console.log(`money deposited Balance is now: ${this.#balance}`);
    }
    withdraw(money){
        this.#balance -= money;
        console.log(`money withdrawed Balance is now: ${this.#balance}`);
    }

    get balance(){
        return `Current balance is ${this.#balance}`
    }
}

let acount1 = new Account(6000);

console.log(acount1.balance);

acount1.deposit(3000);

console.log(acount1.balance);
