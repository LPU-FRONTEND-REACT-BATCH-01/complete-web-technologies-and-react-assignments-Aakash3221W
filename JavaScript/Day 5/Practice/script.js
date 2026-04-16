let product = [
    {id:1,title:"Product 1",price:100},
    {id:2,title:"Product 2",price:200},
    {id:3,title:"Product 3",price:300},
    {id:4,title:"Product 4",price:400},
    {id:5,title:"Product 5",price:500},
    {id:6,title:"Product 6",price:600},
    {id:7,title:"Product 7",price:700}
];

let cartItems = [];

document.querySelector("#product1").addEventListener("click", ()=>{
    cartItems.push(product[0]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log(cartItems);

});
document.querySelector("#product2").addEventListener("click", ()=>{
    cartItems.push(product[1]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log(cartItems);
    
});
document.querySelector("#product3").addEventListener("click", ()=>{
    cartItems.push(product[2]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log(cartItems);
    
});
document.querySelector("#product4").addEventListener("click", ()=>{
    cartItems.push(product[3]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log(cartItems);
    
});

console.log(cartItems);