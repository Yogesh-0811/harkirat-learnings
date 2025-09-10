"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1;
x = "yogesh";
console.log(x);
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("Yogesh");
function sum(num1, num2) {
    return num1 + num2;
}
let ans = sum(1, 2);
console.log(ans);
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(2));
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("hello");
});
function greet2(user) {
    console.log("Hello " + user.name);
}
greet2({
    name: "yogi",
    age: 23
});
let t = {
    name: "yogesh",
    age: 23,
    department: "cs"
};
console.log(t);
let y = 88;
console.log(y);
function isLegalAge(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegalAge({
    name: "yogesh",
    age: 23
}));
