const name = "Vasim"
const repoCount = 50
// console.log(name + repoCount + " Value" )
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`) //string interpolation

const gameName = new String('Vasimssh-ms')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase())

console.log(gameName.charAt([2]))
console.log(gameName.indexOf('i'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-11, 4)
console.log(anotherString);

const newStringOne = "   Vasim    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vasim.com/Vasim%20Sayyad"
console.log(url.replace('%20', '-'))
console.log(url.includes('Vasim'));

const stringThree = "Vasim-M-Sayyad"
console.log(stringThree.split("-"));
console.log(stringThree.match());


const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]
