//if 
// const userIsLogedIn = true;
// const temperature = 50;

// if(temperature <= 50){
//     console.log("Temperature in less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// if(2 === "2"){
//     console.log("Executed");
// }
//<, >, <=, >=, ==, !=, ===, !==


// const balance = 1000;

// if(balance > 500) console.log("Test1"), console.log("Test2");

const userIsLogedIn = true;
const dabitCard = true;
const logedInFromGoogle = false;
const logedInFromEmail =  false;
const guestUser = true;

if(userIsLogedIn && dabitCard && 2 == 2){
    console.log("Allow to buy a course");
}
if(logedInFromGoogle || logedInFromEmail || guestUser){
    console.log("User logged in");
}