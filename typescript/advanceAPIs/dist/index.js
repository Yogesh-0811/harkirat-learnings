//enums
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
let move = Direction.North;
console.log(move);
console.log(Direction.West);
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 201] = "NotFound";
    Status[Status["ServerError"] = 202] = "ServerError";
})(Status || (Status = {}));
console.log(Status.Success);
console.log(Status.NotFound);
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
function greet(role) {
    if (role === Role.Admin) {
        console.log("Welcome, mighty admin!");
    }
    else {
        console.log("Hello, visitor!");
    }
}
greet(Role.Admin);
//Generics
function identityNumber(value) {
    return value;
}
console.log(identityNumber(8));
function identityString(value) {
    return value;
}
console.log(identityString("eight"));
function identity(value) {
    return value;
}
let num = identity(10);
let str = identity("hello");
console.log(num);
console.log(str);
// generics with arrays
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst([1, 2, 3]));
console.log(getFirst(["a", "b", "c"]));
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
function updateUser(updatedProps) {
    console.log(`Name: ${updatedProps.name}, Email: ${updatedProps.email}`);
}
console.log(updateUser({ name: "Yogesh", email: "hello@gmail.com" }));
const me = {
    name: 'yogi',
    age: 23
};
const config = {
    endpoint: "https://api.example.com",
    apiKey: 'abcdef123456',
};
const userss = {
    "yog@12": { age: 23, name: "yogesh" },
    "patil@12": { age: 22, name: "patil" }
};
console.log(userss);
const maps = new Map();
maps.set("yogesh", { name: "yog", age: 22, email: "yogi@gmail.com" });
maps.set("vaid", { name: "ehi", age: 19, email: "vaid@gmail.com" });
const use = maps.get("yogesh");
console.log(use);
const handleEvent = (event) => {
    console.log(`Handling event: ${event}`);
};
handleEvent('click');
export {};
