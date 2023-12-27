(function(){
    console.log(`DB Connected`);
})(); // Named IIFE

( (num1, num2) => {
        console.log(`DB CONNECTED ${num1 + num2}`);
} )(5, 3); //Simple IIFE 


