import React ,{useState}from 'react'

function ColorPicker() {
    const [color , setColor] = useState();
    const handelColor = (event)=>{
        setColor(event.target.value)
    }
  return (
    <>
    <div className='color-picker-container'>
<h1 >Color Picker</h1>
  <div className='color-display' style={{backgroundColor:color}}>
   <p>Selectd colo :{color}</p>
   </div>
   <label>select a color</label>
    <input type='color' onChange={handelColor}  />
    <p className='color'>color is : {color} </p>
   
    </div>
    </>

  )
}

export default ColorPicker