const marvalHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvalHeros.push(dcHeros)

// console.log(marvalHeros);//[ 'Thor', 'Ironman', 'Spiderman', [ 'Superna', 'Flash', 'Batman' ] ]
// console.log(marvalHeros[3][2]); //find array in array value

//const allHeros = marvalHeros.concat(dcHeros);
//console.log(allHeros); //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]


//*****************Sprade Operator************ */

// const allNewHeros = [...marvalHeros, ...dcHeros]
// console.log(allNewHeros); [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const anotherArray = [1, 2, 3, 5, [6, 7, 8], [9, 10, 11, [12, 13]]];
const real_another_Array = anotherArray.flat(Infinity);
//  console.log(real_another_Array);

console.log(Array.isArray("Vasim")); // false
console.log(Array.from("Vasim")); // [ 'V', 'a', 's', 'i', 'm' ];
console.log(Array.from({name: "Vasim"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));