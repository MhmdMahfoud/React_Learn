import React,{useState} from 'react'
function Array(){

    const [food,setFood] = useState(["a","b","c","d"]);
    function addFood(){

        const newfood =document.getElementById("foodi").value
        setFood([...food,newfood])
    
    }
        
  
    return( <>
     <ol type='letter'>
    {food.map((food,index)=><li key={index}>{food}</li>)}
     </ol>
     <input type='text'  id='foodi' />
     <button onClick={addFood}>Add Food </button>
</>)
}
export default Array