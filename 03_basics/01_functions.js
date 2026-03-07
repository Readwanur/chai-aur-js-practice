function namePrinter(){
    console.log("R");
    console.log("U");
    console.log("M");
    console.log("O");
    console.log("N");
}

// namePrinter()

function sum(num1, num2){
    return (num1 + num2)
}

// console.log(sum(10,9));

function loginUserMessage(username){
    if(!username){
        console.log(`Please enter a username`);
        return
    }
    return `${username} just logged in!`
}

// console.log(loginUserMessage("Rumoaaaaan"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,300,100,600));


const user = {
    username: "Readwanur Rahman",
    prices: 199
}

function handleObject(anyobject){
    return `Username: ${anyobject.username} & Price: ${anyobject.prices}`
}
// console.log(handleObject(user));

// console.log(
//     handleObject({
//         username: "Sam Altman",
//         prices: 599
//     })    
// );

const newArray = [200, 400, 600]

function returnSecondValue(anyArray){
    return anyArray[1]
}

console.log(returnSecondValue(newArray));
