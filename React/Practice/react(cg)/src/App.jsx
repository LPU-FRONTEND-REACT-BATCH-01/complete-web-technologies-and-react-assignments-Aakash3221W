// import React, { Component } from "react";

import { Card } from "./Components/Card";
import { UserCard } from "./Components/UserCard";


// export default class App extends Component{
//     render(){
//         return  <h1>Helloo</h1>
//     }
// }
let user1 ={
    id:1,
    userName:"Jam",
    age:29,
    city:"Jalandhar"
}

let user2 ={
    id:2,
    userName:"James",
    age:30,
    city:"Delhi"
}
let user3 ={
    id:3,
    userName:"John",
    age:25,
    city:"Hyderabad"
}
let user4 ={
    id:4,
    userName:"Jane",
    age:29
}


let App =()=>{
    let card1 = "This is card 1";
    let card2 = "This is card 2"; 
    return<>
        {/* <Card variable={card1}/>
        <Card variable={card2}/> */}
        <div className="users">
        <UserCard variable={user1}/>
        <UserCard variable={user2}/>
        <UserCard variable={user3}/>
        <UserCard variable={user4}/>
        </div>

    </>

}

export default App;