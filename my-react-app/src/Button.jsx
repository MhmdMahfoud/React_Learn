import React from 'react'

function Button() {
   const handleClick = (name) =>console.log(`${name}`)

  return(
    <button onClick={ ()=> handleClick("mhmd")}>Click Me </button>
  )
}

export default Button