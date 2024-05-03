// for of

const arr = [1, 2, 3, 4,]
for (const num of arr) {
 //   console.log(num);
}
const myArr = [1, 2, 3, 4, 5,]
for (const arr of myArr) {
  console.log(`Value of Array is ${arr}`);
}

const greetings = "Hello World";

for (const greet of greetings) {
    if(greet == " "){
    break;
    }
  //  console.log(`Each char is ${greet}`);
}

//Maps
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// console.log(map);


// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }
const map = new Map()
map.set("In", "India"),
map.set("fr", "France"),
map.set("En", "England"),
map.set("USA", "United Sstates Of America"),
map.set("In", "India")

for (const [key, value] of map) {
  console.log(key, ':-', value);  
}