//Singleton

//Object literals

const mySym = Symbol("key1");

const jsUser = {
    name : "Hitesh",
    age : 18,
    "full name" : "Vasim Sayyad",
    [mySym] : "mykye1",
    location : "pune",
    email : "vasimsayyad05@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"] 
}
    jsUser.email = "vasim@gmail.com",
   // Object.freeze(jsUser)
    jsUser.email = "vasim@yahoo.com",
 //   console.log(jsUser);

 

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.greeting = function() {
    console.log("Hello JS User");
}

jsUser.greetingTwo = function() {
    console.log(`Hello Js User ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());