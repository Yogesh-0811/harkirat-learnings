"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3)); //console-1
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(8)); //console-2
;
let user = {
    name: "yogesh",
    age: 23,
    address: {
        city: "pune",
        country: "India",
        pincode: 411026
    }
};
function isLegal(user) {
    return user.age >= 18;
}
const ans = isLegal(user);
console.log(ans); //console-3
//optional
let user2 = {
    name: "patil",
    age: 22
};
// let person: People = {
//     name: "yogesh",
//     age: 22,
//     greet: ()=>{
//         return "hi"
//     }
// }
// let greeting = person.greet();
// console.log(greeting);        //console-4
class Manager {
    name;
    age;
    number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
        this.number = "1234";
    }
    isLegal() {
        return this.age > 18;
    }
}
class God extends Manager {
    constructor(name, age) {
        super(name, age);
    }
}
let newuser = new Manager("John", 30);
console.log(newuser.isLegal()); //console-5
//abstract classes
class abstractUser {
    name;
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("hi there"); // default implementation not possible in interfaces
    }
}
class Employee extends abstractUser {
    name;
    constructor(name) {
        super(name);
        this.name = name;
    }
    greet() {
        return "hi" + this.name;
    }
    hello() {
    }
}
let e = {
    name: "yogi",
    startDate: "08-11-2002"
};
let m = {
    name: "patil",
    department: "Computer"
};
let t = {
    name: "bruh",
    startDate: "15",
    department: "arch"
};
const ex = {
    name: "me",
    gift: "nothing"
};
function greet(User) {
    console.log("hello" + user.name); //console-6
}
// Arrays
//Given an array of numbers, get maximum element of that array
function getMax(nums) {
    let maxValue = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i];
        }
    }
    return maxValue;
}
console.log(getMax([1, 2, 3])); //console-7
function areLegal(arr) {
    // let result: GivenUsers[] = [];
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]!.age>18){
    //         result.push(arr[i]!);
    //     }
    // }
    // return result;
    return arr.filter((sorted) => sorted.age > 18);
}
const users = [
    { firstName: "John", lastName: "Doe", age: 17 },
    { firstName: "Jane", lastName: "Smith", age: 22 },
    { firstName: "Yogesh", lastName: "Patil", age: 23 }
];
console.log(areLegal(users));
