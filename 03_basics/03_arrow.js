
const user = {
    username: "Readwanur",
    price: 599,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to wesite.`);
        console.log(this);

    }
}

// user.welcomeMessage()
// user.username = "Darren Sammy"
// user.welcomeMessage()

// console.log(this);


function chai() {
    let username = "Lockie Farguson"
    console.log(this.username);

}

// chai()


// ++++++++ ARROW FUNCTION ++++++++++

const chaiTwo = () => {
    let username = "Skip Al Hasan"
    console.log(this);

}

// chaiTwo()

const addTwo = (value1, value2) => {
    return (value1 + value2)
}

let sum = 0
const summation = (...value) => {
    for(let i = 0; i < value.length; i++)
        sum += value[i]
    return sum
}

const addThree = (value1, value2, value3) => ((value1 + value2 + value3))

const getObject = () => ({
    username: "Lionel Messi",
    age: 35,
    tag: "GOAT"
})

console.log(addTwo(43, 7));

console.log(summation(1,2,3,10));

console.log(addThree(4,6,2));

console.log(getObject());
