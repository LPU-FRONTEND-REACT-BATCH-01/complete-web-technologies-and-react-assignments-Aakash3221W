let userCart = [
    {
        id:1,
        name:"Watch",
        price:1999

    },
    {
        id:2,
        name:"Shoes",
        price:2999

    },
    {
        id:3,
        name:"TV",
        price:29999

    },
    {
        id:10,
        name:"Laptop",
        price:100000

    },
    {
        id:18,
        name:"I-Phone",
        price:150000

    },
]

userCart.sort((a,b) => b.price-a.price);
console.log(userCart);
userCart.sort((a,b)=>a.name.localeCompare(b.name));
console.log(userCart);
console.log(userCart.filter((a)=>a.price>2000));


