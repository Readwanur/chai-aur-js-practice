const name = "Readwanur Rahman Rumon"
const repoCount = 50

// Modern way to concate strings
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const anotherName = new String("Rumoaaan")
console.log(anotherName[0]);
console.log(anotherName.length);

console.log(anotherName.toLocaleUpperCase());

console.log(anotherName.charAt(5));
console.log(anotherName.indexOf('n'));


// In substring() method negative value not allowed
const newString = anotherName.substring(0, 4)
console.log(newString);


// In slice() method negative values are allowed
// Last index always (-1)
const anotherString = anotherName.slice(-5, 4)
console.log(anotherString);


//Starting and ending spaces are removed by the trim() method
const newStringOne = "         Readwanur          "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "github.com-Readwanur"
console.log(url.replace('-', '/'));
console.log(url.includes('Rumon'));
console.log(name.split(' '));



