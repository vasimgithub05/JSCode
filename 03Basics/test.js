(function(){
    console.log(`DB Connected`);
})(); // Named IIFE

( (num1, num2) => {
       // console.log(`DB CONNECTED ${num1 + num2}`);
} )(5, 3); //Simple IIFE 


const arr = ["2a", 2, "a", "b", 3, "3B"];
const numbers = arr.filter(e => typeof e === 'number');
const strings = arr.filter(e => typeof e === 'string');

console.log("Numbers", numbers);
console.log("Strings", strings);


