let userList = [
{
    id: 1,
    userName: "Aakash",
    password: "1234"
},
{
    id: 2,
    userName: "Rahul",
    password: "981761"
},
{
    id: 3,
    userName: "Rohit",
    password: "12345"
},
{
    id: 4,
    userName: "Suresh",
    password: "123456"
}
]

let inputData = {
    userName: "Aakash",
    password: "12347"
}

let userCheck = userList.find((a) => a.userName === inputData.userName && a.password === inputData.password);

if(userCheck==undefined){
    if(userList.find((a) => a.userName === inputData.userName)){
        console.log("Incorrect Password");
    } else {
        console.log("User not found");
    }

}
else console.log(" USER LOGGED IN SUCCESSFULLY");