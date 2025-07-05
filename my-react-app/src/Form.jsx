import React , {useState} from 'react'

function Form() {
    const [name,setName] = useState("ali");
    const handelName = (event)=>{
     setName(event.target.value);
    }
  return (
    <>
    
    <div>Form</div>
    <p>{name}</p>
    <input onChange={handelName} value={name}/>
   
    </>
  )
}

export default Form