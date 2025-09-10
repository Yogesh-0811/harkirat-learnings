function sum(a: number,b: number): number{
    return a+b
}
console.log(sum(2,3));           //console-1

function isEven(num: number): boolean{
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(8));           //console-2

//objects

interface Address{
    city:string;
    country:string;
    pincode:number;
};

interface User{
    name: string;
    age: number;
    address?:Address;
}

let user: User = {
    name: "yogesh",
    age: 23,
    address: {
        city:"pune",
        country:"India",
        pincode:411026
    }
}

function isLegal(user: User): boolean{
    return user.age>=18;
}

const ans = isLegal(user);
console.log(ans);             //console-3

//optional

let user2: User = {
    name: "patil",
    age:22
}

interface Office{
    address:Address;
}

//interface and classes

interface People{
    name: string,
    age:number,
    isLegal(): boolean
    //greet: ()=>string,
}

// let person: People = {
//     name: "yogesh",
//     age: 22,
//     greet: ()=>{
//         return "hi"
//     }
// }

// let greeting = person.greet();
// console.log(greeting);        //console-4

class Manager implements People{
    number: string;
    constructor(public name:string, public age:number){
        this.name=name;
        this.age=age;
        this.number="1234"
    }
    isLegal(){
        return this.age>18
    }
}

class God extends Manager{
    constructor(name: string,age: number){
        super(name,age)
    }
}

let newuser = new Manager("John",30);
console.log(newuser.isLegal()); //console-5

//abstract classes

abstract class abstractUser{
    name: string
    constructor(name:string){
        this.name = name;
    }
    abstract greet(): string;
    hello(){
        console.log("hi there")    // default implementation not possible in interfaces
    }
}

class Employee extends abstractUser{
    name:string;
    constructor(name: string){
        super(name)
        this.name=name
    }

    greet(){
        return "hi" + this.name;
    }
    hello(): void {
        
    }
}

//unions and intersections

//Intersection

type Employees = {
    name: string;
    startDate: string;
}

type Managers = {
    name: string;
    department: string;
}

type TeamLead = Employees & Managers;

let e: Employees = {
    name: "yogi",
    startDate: "08-11-2002"
}
let m: Managers = {
    name: "patil",
    department: "Computer"
}

let t: TeamLead = {
    name: "bruh",
    startDate: "15",
    department: "arch"
}

//Union

type GoodUser = {
    name: string;
    gift: string;
}

type BadUser = {
    name: string;
    ip: string;
}

type WhichUser = GoodUser | BadUser;

const ex: WhichUser = {
    name: "me",
    gift: "nothing"
}

//Create 2 types user and admin
//Create a function that takes either a user or admin as an input, and returns a string saying "Welcome, [name]"

interface Admin{
    name: string;
    permissions: string;
}

interface User2{
    name:string;
    age:number
}

type UserorAdmin = User2|Admin;

function greet(User: UserorAdmin){
    console.log("hello" + user.name);         //console-6
}

// Arrays

//Given an array of numbers, get maximum element of that array

function getMax(nums: number[]){
    let maxValue = -Infinity;

    for(let i=0;i<nums.length;i++){
        if(nums[i]!>maxValue){
            maxValue=nums[i]!;
        }
    }
    return maxValue;
}

console.log(getMax([1,2,3]));       //console-7

//Return the legal users given below interface

interface GivenUsers{
    firstName: string;
    lastName: string;
    age: number;
}

function areLegal(arr: GivenUsers[]): GivenUsers[]{
    // let result: GivenUsers[] = [];
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]!.age>18){
    //         result.push(arr[i]!);
    //     }
    // }
    // return result;
    return arr.filter((sorted)=>sorted.age>18);
}

const users: GivenUsers[]=[
    { firstName: "John", lastName: "Doe", age: 17 },
    { firstName: "Jane", lastName: "Smith", age: 22 },
    { firstName: "Yogesh", lastName: "Patil", age: 23 }
];

console.log(areLegal(users));
