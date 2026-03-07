let myDate = new Date()

console.log(myDate,toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date("03-07-2026")
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate = new Date()
newDate.toLocaleDateString('default' , {
    weekday: "long"
})

console.log(newDate.weekday);
