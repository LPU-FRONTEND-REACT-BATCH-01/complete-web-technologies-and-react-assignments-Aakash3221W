"use strict";
// let a:unknown = 10;
// if(typeof a === "number"){
//     console.log(100+a);
// }
// else if(typeof a === "string"){
//     console.log(a.slice(0,1).toLocaleUpperCase() + a.slice(1));
// }else if(typeof a === "boolean"){
//     console.log(!a);
// }
// let product:{
//     id:number,
//     title:string,
//     price:number
// };
// let arr:typeof product[] = [{
//     id:20,
//     title:"bei",
//     price:40
// },{
//     id:20,
//     title:"bei",
//     price:40
// },
// {
//     id:20,
//     title:"bei",
//     price:40
// }];
// arr.push({
//     id:20,
//     title:"bei",
//     price:40
// })
// // arr.push(2);
// console.log(arr);
// type PaymentOptionsAvailable = "UPI" | "Card" | "COD" | "NetBanking"
// let payment=(modeOfPayment:PaymentOptionsAvailable,amount:number):string=>{
//     if(modeOfPayment==="UPI"){
//         return `You have Paid using ${modeOfPayment} you total is ${amount-(amount*0.1)}`
//     }
//     else if(modeOfPayment==="Card"){
//         return `You have Paid using ${modeOfPayment} you total is ${amount-(amount*0.05)}`
//     }
//     else if(modeOfPayment==="COD"){
//         return `You have Paid using ${modeOfPayment} you total is ${amount+50}`
//     }
//     else{
//         return `You have Paid using ${modeOfPayment} you total is ${amount}`
//     }
// }
// console.log(payment("Card",1000));
let fetchData = (async () => {
    {
        try {
            let res = await fetch("https://dummyjson.com/products");
            if (res.ok) {
                let data = await res.json();
                let products = data.products;
                display(products);
                display2(products);
                displayByCategory(products, "fragrances");
            }
        }
        catch (err) {
            console.log(err);
        }
    }
})();
function display(data) {
    data.filter((product) => {
        return product.price > 100;
    }).map((product) => {
        console.log(product);
    });
}
function display2(data) {
    let sorted = data.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });
    console.log(sorted);
}
function displayByCategory(data, category) {
    let filtered = data.filter((product) => product.category === category);
    console.log(filtered);
}
