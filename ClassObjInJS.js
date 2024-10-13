const student = {
    fullName:'Shreyas Prashant Urankar',
    marks: 94.5,
    printMarks: function() {
        document.getElementById('demo').innerHTML = 'Marks = ' + this.marks;
    },
};

const employee = {
    calTax() {
        document.getElementById('demo').innerHTML ='Tax rate is 10%';
    },
};

const karanArjun = {
    salary: 50000,
    calTax() {
        document.getElementById('demo').innerHTML ='Tax rate is 20%'; 
    },
};

karanArjun.__proto__ = employee

//.....................................................................

// Classes, objects and Constuctors
class ToyotaCar {
    constructor(brand, milage){
        document.getElementById('demo').innerHTML = 'Creating new object.';
        this.brand=brand;
    }
    start() {
        document.getElementById('demo').innerHTML = "start";
    }

    stop()
    {
        document.getElementById('demo').innerHTML = "stop";

    }
}

let fortuner = new ToyotaCar("fortuner, 10");
let lexus = new ToyotaCar("lexus");
fortuner.start();

//..........................................................................
// Inheritance
class Parent{
    hello(){
    console.log("hello");
    }
}

class Child extends Parent {

}
let obj = new Child();


//................................
class Person{
    constructor(name){
        this.species="homo sapiens";
        this.name=name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person {
    constructor (branch, name) {
        console.log("Enter child constructor.")
        super(name);
        this.branch=branch;
        console.log("Exit child constructor.");
    }
    work(){
        console.log("Solve problem, build something");
    }
}

let shreyas = new Engineer("IT", "shreyas");

// ......................................................................
//QUESTION 1)
//  You are creating a website for your college. Create a class user with two properties, name and email. It also. has a method called viewData() that allows user to view website data.

//QUESTION 2)
//Create a new class called admin, which inherits from user. Add a new method calle?d edit data to admin and allows it to edit website data.


let DATA ="Secret information.";

class User {
    constructor(name, email){
        this.nam=name;
        this.email=email;
    }
    viewData(){
        console.log("Data =",DATA);
    }
}

class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA="Some new value.";
    }
}
let student1=new User("Shreyas", "urankarshreyas");
let student2=new User("Madhura", "madhuraurankar@gmail.com");

let admin1=new Admin("Admin", "admin@gmail.com");

//....................................................................

// Try and Catch method
let a = 5;
let b =10;
console.log("a =", a);
console.log("b = ", b);
console.log("a+b = ",a+b);
try{
    console.log("a+b = ",a+c);

}catch(err){
    console.log(err);
}
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);