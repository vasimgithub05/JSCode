//immediatly Invoke function Exprssions (IIFE)

(function chai (){
    //named IIFE
    console.log(`DB CONNECTED`);
})();


// ( () => {
//     console.log(`DB CONNECTED TWO`);
// } )()

( (name) => {
    //Simple Arrow IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('Vasim')


