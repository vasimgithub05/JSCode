const score = 400 // given number
console.log(score);
const balance = new Number(100)
console.log(balance) // forcefully given number

console.log(balance.toString()) // Convert to string 
console.log(typeof balance) // typeof string object
console.log(balance.toFixed(2)) // given value 100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN')) // add coma to indian standerd 


//*************************MATH *************************** */
console.log(Math)
console.log(Math.abs(-4)) //Convert to positive
console.log(Math.round(4.6)); // Value getting roundfigur
console.log(Math.ceil(4.2)); // Convert in to the top value
console.log(Math.floor(4.9)) // Convert in to the bottom value

console.log(Math.min(5,4, 8, 3, 2)) // Getting Minumum Value
console.log(Math.max(5,4, 8, 3, 2)) // Getting maximum Value

console.log(Math.random()); // Always value writen in 0 to  in betwin 1
console.log(Math.floor ((Math.random()*10)) + 1 )

const min = 10
const max = 20

console.log(Math.floor (Math.random() * (max - min + 1)) + min);