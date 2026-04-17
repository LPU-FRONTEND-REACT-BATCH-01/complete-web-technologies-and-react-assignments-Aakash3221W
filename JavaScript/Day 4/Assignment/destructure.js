let user = {
    id:1,
    username:"nick",
    userLocation:{
        city:"Jalandhar",
        state:"Punjab"
    },
    phone:"9876543212",
    skills:{
        frontend:["react","HTML","CSS"],
        backend:["Java","SpringBoot"]
    }
}

let {id,username,userLocation:{city,state},phone,skills:{frontend:[react,HTML,css],backend:[Java,SpringBoot]}} = user;

console.log(id);
console.log(username);
console.log(city);
console.log(state);
console.log(phone);
console.log(react);
console.log(HTML);
console.log(css);
console.log(Java);
console.log(SpringBoot);
