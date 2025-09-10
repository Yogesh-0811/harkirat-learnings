let x: number | string = 1;
x="yogesh"
console.log(x);

function greet (firstName: string){
    console.log("Hello "+ firstName);
}

greet("Yogesh");

function sum(num1: number,num2: number): number{
    return num1+num2;
}

let ans = sum(1,2);
console.log(ans);

function isLegal (age: number): boolean{
    if(age>=18){
        return true;
    }else{
        return false;
    }
}

console.log(isLegal(2));

function delayedCall (fn: ()=> void){
    setTimeout(fn, 1000);
}

delayedCall(function(){
    console.log("hello");
})

// object

interface UserType {
    name: string,
    age: number
}

function greet2(user: UserType){
    console.log("Hello "+ user.name)
}
greet2({
    name: "yogi",
    age: 23
});

interface Manager{
    name:string,
    age:number
}

interface Employee{
    name:string,
    department: string
}

type TeamLead = Manager & Employee //Intersection

let t:TeamLead={
    name:"yogesh",
    age:23,
    department: "cs"
}

console.log(t);

type num = string|number; //Union
let y:num = 88;
console.log(y); 

function isLegalAge(user:{
    name: string,
    age: number
}){
    if(user.age>18){
        return true;
    }else{
        return false;
    }
}

console.log(isLegalAge({
    name:"yogesh",
    age:23
}));