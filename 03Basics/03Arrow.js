const user = {
    username: "Vasim",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// const chai = function(){
//     let username = "Vasim";
//     console.log(this.username);
// }
// chai();

const chai = () => {
    let username = "VAsim";
    console.log(this.username);
}
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3, 4));

//Implisit Return 

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo =(num1, num2) => (num1 + num2); //if you do not use {} so return not neccessory to write}

const addTwo = (num1, num2) => ({username : "Vasim"}) // when write on object ({})
console.log(addTwo(3, 4));