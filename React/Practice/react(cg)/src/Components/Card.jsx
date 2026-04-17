import React from 'react'

export const Card = (props) => {
  console.log(props);
  return (
    <div>

        {/* <h1 className='card'>{props.variable}</h1> */}

        {/* {props.children[0]} */}
        {props.children[1]}
    </div>
  )
}
