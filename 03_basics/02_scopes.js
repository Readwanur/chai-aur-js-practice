let a = 300
// console.log(`First value: ${a}`);


if (true) {
    a = 10
    // console.log(`INNER: ${a}`);
}

// console.log(a);

function one() {
    const username = "Readwanur Rahman"

    function two() {
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "Tarek Zia"
    if (username === "Tarek Zia") {
        const website = " YouTube"
        console.log(username + website);
    }
}

// ++++++++ INTERESTING ++++++++++

// We can call function before it is declared if we declare functions like this
addOne(9)

function addOne(value) {
    return value++
}

// But we can't call function before it is declared if we declare functions like this (Holding in a variable)
const addTwo = function(value){
    return value + 2
}
addTwo(87)