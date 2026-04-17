import React from 'react'
import { Card } from "./Card";

export const UserCard = ({variable:{id,userName,age,city="Not specified"}}) => {
    //let {variable:{id,userName,age,city}} = props  //Destructing
  return (
    <>
    <div className='userCard'>
        <p>id : {id}</p>
        <p>user name : {userName}</p>
        <p>age : {age}</p>
        <p>city : {city}</p>
    </div>

    <Card>
      <h1>
        this is child 1
      </h1>
      <h2>
        this is child 2
      </h2>
    </Card>
    </>
  )
}


