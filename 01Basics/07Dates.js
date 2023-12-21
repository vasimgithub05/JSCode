const myDate = new Date(); //date is object
console.log(myDate.toString());//Thu Dec 21 2023 16:05:47 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Thu Dec 21 2023
console.log(myDate.toISOString()); //2023-12-21T16:05:47.126Z
console.log(myDate.toJSON()); //2023-12-21T16:05:47.126Z
console.log(myDate.toLocaleDateString());//12/21/2023
console.log(myDate.toTimeString()); //16:11:24 GMT+0000 (Coordinated Universal Time)
console.log(myDate.getTimezoneOffset());

let myDateCreate = new Date(2023, 0, 23)
console.log(myDateCreate.toDateString()) //Mon Jan 23 2023 This is cutom date 

let myDateTimeCreate = new Date(2023, 0, 23, 5, 3)
console.log(myDateTimeCreate.toLocaleString()) //1/23/2023, 5:03:00 AM Giving custom date and time

let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(myDateTimeCreate.getTime())

console.log(Math.floor(Date.now()/1000))// convert milisec to sec and mathfloor value


let newDate = new Date();
console.log(newDate.getMonth() + 1); // 12 
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long" // giving detail default customise time 
}))
