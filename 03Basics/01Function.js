function myFunction() {
    console.log("V");
    console.log("a");
    console.log("s");
    console.log("i");
    console.log("m");
}
// myFunction();

// function addTwoNumbers(a, b){
//     console.log(a + b);
// }
// addTwoNumbers(5, 6);

function addTwoNumbers(a, b){
//  let result = a + b;
//  return result;
return a + b;
}
const result = addTwoNumbers(3, 5)
//console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} just loged in`;
}
// console.log(loginUserMessage());


function calculateCartPrice(...num1){
return num1;
}
// console.log(calculateCartPrice(200, 300, 400));

const user = {
    username: "Vasim",
    price: 399
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user); object defined in outside of the function
handleObject({
    username:'sam',
    price: 299
}) // object defined on the time of exucute the function

const myNewArray =[200, 300, 400]
function handleArray(getArray){
    return getArray[1]
}
console.log(handleArray(myNewArray));
console.log(handleArray([100, 300, 600]));
