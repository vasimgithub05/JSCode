const myNums = [1, 2, 3, 4 ]

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0 ) 
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);


 const shoppingCart = [
    {
        itemName : "Js Course",
        price : 2999
    },
    {
        itemName : "Py Course",
        price : 999
    },
    {
        itemName : "Data science Course",
        price :12999
    },
 ]

//  const totalCrat = shoppingCart.reduce((acc, item) => acc + item.price,0)
// const totalCrat = shoppingCart.reduce((acc, item) => acc + item.price, 0)
const totalCart = shoppingCart.reduce((acc, item) => acc + item.price, 0)
 console.log(totalCart);