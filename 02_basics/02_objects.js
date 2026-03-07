const tinderUser = {}

tinderUser.name = "Darren Sammy"
tinderUser.id = "0112330784"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "rrumon710@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Readwanur",
            lastname: "Rahman"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "ab", 6: "cd"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj4)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "rrumon710@gmail.com"
    },
    {
        id: 2,
        email: "hcg@el.com"
    }
]

// console.log(`This is my ID: ${users[0].id} and E-mail: ${users[1].email}`);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: 1000,
    courseInstructor: "Hitesh"
}

// de-structuring
const {courseInstructor: ins} = course
console.log(course.price.toLocaleString('en-IN'));
console.log(ins.toLowerCase());
console.log(ins.length);

// JSON

// {
//     "name": "Readwanur Rahman",
//     "coursename": "Web Programming",
//     "price": "Free"
// }

// [
//     {},
//     {},
//     {}
// ]
