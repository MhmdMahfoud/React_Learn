import React from 'react'

function Button() {
  let count=0;
    const handelClick = ()=>
    {
     count++;
     if(count >3)
        console.log("stop Playing")
     else{
        console.log("you have count" , count )
     }
    }
 
  return(
     <button onClick={handelClick} >Count </button>
  )
}

export default Button