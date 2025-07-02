import React from 'react'
import pic from './assets/PF.webP'

function Button() {
    const handelCLick = (e)=> e.target.style.display="none"
  return (
   <button onClick={(e)=>handelCLick(e)}> <img src={pic}></img></button>
  )
}

export default Button