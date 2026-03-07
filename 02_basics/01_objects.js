// singleton
//obejct.create


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Readwanur Rahman",
    "full name": "Readwanur Rahman Rumon",
    [mySym]: "myKey1",
    age: 21,
    location: "Bogura",
    email: "rrumon710@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Saturday", "Monday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "melodygangster@gmail.com"
// console.log(JsUser.email);

// Object.freeze(JsUser)
JsUser.email = "readwanurbd@gmail.com"
// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}

console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());
