//primitive

// 7 Primitive Number, Bigint, String, Boolean, Null, Undefined, Symball
const score = 100
const scoreValue = 100.3
 
const islogedIn = false // boolean
const outsideTemp = null //null
let userEmail; // undefined


const id = Symbol('123'); // symbol
const anatherId = Symbol('123');
console.log(id === anatherId); 

const bigNumber = 123546899997n //bigint
console.log(typeof  bigNumber);

//Raferance Non Primitive

// Array, Objects, Functions
const cars = ["BMW", "Audi", "Maruti"];
let myObj = {
    name : "Vasim",
    age : 34,       
}

const myFunction = function(){
    console.log("Hello Wolrd");
}


//*********************************************Mamary

// Stack (Priitive); Heap (Non Primitive)

let myName = "Vasim";
let anatherName = myName;
anatherName = "Sayyad"
console.log(myName);
console.log(anatherName);

let userOne = {
    name : "Vasim",
    age : 34
}
let userTwo = userOne
userTwo.age = 32

console.log(userOne.age);
console.log(userTwo.age);