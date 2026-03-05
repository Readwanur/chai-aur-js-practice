// Stack (Primitive); Heap (Non-primitive)


// Primitve DataTypes => Stack

let phoneNo = "01755054021"
let anotherPhoneNo = phoneNo

anotherPhoneNo = "01410054021"

console.log(anotherPhoneNo);
console.log(phoneNo);


// Object DataTypes => Heap (Use reference)

let userOne = {
    name: "Readwanur Rahman",
    email: "rrumon710@gmail.com"
}

let userTwo = userOne

userTwo.email = "melodygangster@gmail.com"

console.log(userOne.email);
