const score = 400

console.log(score);

const balance = new Number(300)
console.log(balance);
console.log(balance.toString());


const newBalance = 100.658
console.log(newBalance.toFixed(2));
console.log(newBalance.toPrecision(5));


const anotherBalance = 10000
console.log(anotherBalance.toLocaleString('en-IN'));


// +++++++ MATHS +++++++++++++++++

// console.log(Math);

console.log(Math.abs(-10));
console.log(Math.round(4.76));
console.log(Math.ceil(4.76));
console.log(Math.floor(4.76));
console.log(Math.round(Math.random() * 10));

//Raandom number in a given range

const max = 500
const min = 100

console.log(Math.round(Math.random() * (max - min + 1) + min));

