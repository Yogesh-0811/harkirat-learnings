//enums

enum Direction{
    North,
    East,
    South,
    West
}

let move: Direction = Direction.North;
console.log(move);
console.log(Direction.West);

enum Status{
    Success=200,
    NotFound,
    ServerError
}
console.log(Status.Success);
console.log(Status.NotFound);

enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

function greet(role:Role){
    if(role === Role.Admin){
        console.log("Welcome, mighty admin!");
    }else{
        console.log("Hello, visitor!");
    }
}
greet(Role.Admin);

//Generics

function identityNumber(value: number): number{
    return value;
}
console.log(identityNumber(8));

function identityString(value: string): string{
    return value;
}
console.log(identityString("eight"));

function identity<T>(value: T){
    return value;
}
let num = identity(10);
let str = identity("hello");
console.log(num);
console.log(str);

// generics with arrays
function getFirst<T>(arr: T[]){
    return arr[0];
}
console.log(getFirst([1,2,3]));
console.log(getFirst(["a","b","c"]));

//Advance APIS

interface User{
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}
function sumOfAge(user1: User, user2: User){
    return user1.age + user2.age;
}
// const age = sumOfAge({name: "Yogesh", age: 23},{name: "Patil", age: 23});
// console.log(age);

//Pick
type UpdateProps = Pick<User, 'name' | 'age' | 'email'>;
//Partial
type UpdatePropsOptional = Partial<UpdateProps>
function updateUser(updatedProps: UpdatePropsOptional){
    console.log(`Name: ${updatedProps.name}, Email: ${updatedProps.email}`);
}
console.log(updateUser({name:"Yogesh", email: "hello@gmail.com"}));

//readonly

type read = {
    name: string;
    age: number;
}
const me: Readonly<read> = {
    name: 'yogi',
    age: 23
}
//me.age = 22; not possible

//Read-only use-case
interface Config{
    endpoint: string;
    apiKey: string;
}
const config: Readonly<Config> = {
    endpoint: "https://api.example.com",
    apiKey: 'abcdef123456',
};
//config.apiKey="ab12"; not possible

//Record and Map
// type ObjectType = {
//     [key:string]: number;
// }

type ObjectType = Record<string, {age:number; name:string}>;
const userss: ObjectType ={
    "yog@12":{age: 23,name: "yogesh"},
    "patil@12":{age: 22,name: "patil"}
}
console.log(userss);

//Maps
type ObjType = {
    name: string;
    age: number;
    email: string;
}
const maps = new Map<String, ObjType>()
maps.set("yogesh", {name: "yog", age: 22, email: "yogi@gmail.com"})
maps.set("vaid", {name: "ehi", age: 19, email: "vaid@gmail.com"})
const use = maps.get("yogesh")
console.log(use);

//Exclude

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>;

const handleEvent = (event: ExcludeEvent)=>{
    console.log(`Handling event: ${event}`);
};
handleEvent('click');

