//singleton Object
// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isloggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "vasim@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vasim",
            lastname: "Sayyad"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b",}
const obj2 = {3 : "a", 4 : "b",}
const obj3 = {5 : "a", 6 : "b",}

//const obj4 = {obj1, obj2, obj3}
// const obj4 = Object.assign({}, obj1,obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4);

const users = [
    {
        Id : "1",
        email: "va@gmail.com"
    },
    {
        Id : "2",
        email: "vasi@gmail.com"
    },
    {
        Id : "3",
        email: "vasim@gmail.com"
    }
]
users[1].email
// console.log(users[0].email);

//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser)); 
// console.log(Object.entries(tinderUser)); //saperate all values in asaperate array
// console.log(tinderUser.hasOwnProperty('isloggedIn')); // for find the property

const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructer: "Hitesh"
}
//course.courseInstructer 
const {courseInstructer: instructer} = course; //easy way to assign inner value to object | no need every time write to course.courseIntructer 
//console.log(courseInstructer); //Destructure value
console.log(instructer); //Exact short and destructure value
