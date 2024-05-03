const userEmail = "vasim@gmail.com"
if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't hava an account");
}
// " " Empty string false 
// [] Empty array true 
// {} empty objettrue
//Thare is all truethy value means asume that the value is thare

//False value
// false, 0, -0, Bigint 0n, "", null, undefined, Nan,

//truthy Value

// "0", 'false', " ", [], {}, function(){}, 

const userName = [];
if(userName.length === 0){
   // console.log("This is Empty Array");
}

const emptyArr = [];
if(emptyArr.length === 0){
    console.log("This array is empty")
}


const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    console.log(typeof emptyObj);
}

const objectEmpty = {}
if(Object.keys(objectEmpty).length === 0 ){
    console.log("This Object is Empty");
    console.log(typeof objectEmpty);
}


//Nullish Coalescing Operator (??) : null, undefined;

let val1;
val1 = 5 ?? 10; // 5 Print
val2 = null ?? 10 // 10 Print
val3 = undefined ?? 15;
val4 = null ?? 10 ?? 20;
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//  Terniary Operator
//condition ? true : false;

const icePrice = 100;
icePrice >= 80 ? console.log("less than 80"): console.log("More than 80");
