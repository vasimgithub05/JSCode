const myArr = [0, 1, 2, 3, 4]
const myHeros = ["Spiderman", "Superman", "Ironman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[2])

//Array Mathods

// myArr.push(5) // add 5 in myArr
// myArr.push(6) // add value in myArr
// myArr.pop() // remove last value 

// myArr.unshift(9) //Add the value in first 
// myArr.shift() // remove first value
// console.log(myArr);

// console.log(myArr.includes(9)); // false Find value and given boolean 
// console.log(myArr.indexOf(9)); //-1 if not found value else 1 

const newArr = myArr.join()
// console.log(newArr)// join and bind value in string
// console.log(myArr) // array


//Slice  Splice
console.log("A ", myArr); // slice do not remove value in array just showing the range of value
const myn1 = myArr.slice(1, 3)
console.log(myn1);

const myn2 = myArr.splice(1, 3) // remove perticuler range value in array   B  [ 0, 4 ] [ 1, 2, 3 ]
console.log("B ", myArr);
console.log(myn2);