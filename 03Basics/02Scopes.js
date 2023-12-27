var c = 300;
let a = 100;
const b = 200;
if(true){
    let a = 10;
    const b = 20;
 //   var c = 30;
}
// console.log(a); // undefined block scope
// console.log(b); // undefined block scope
// console.log(c); // 30 globalscope 


function one(){
    const username = "Vasim";
    function two(){
        const website = "vasimsayyad.com";
        console.log(username);
    }
   // console.log(website);
  //  two();
}
// one();


// if(true){
//     const username = "Vasim";
//     if(username === "Vasim"){
//         const website = " youtube"
//         console.log(username + website);
//     }
// }

if(true){
    const username = "Vasim";
    if(username === "Vasim"){
        const website = " Youtube";
      //  console.log(username + website);
    }
    //console.log(website);
}

//++++++++++++++++Intresting++++++++++++++

function one(num){
    return  num + 1;
}

const addTow = function(num){
    return num + 2
}
console.log(addTow(5));