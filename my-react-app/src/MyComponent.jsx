import React, { useState } from 'react'

function MyComponent() {
  let [number, setNumber] = useState(0);
  const Increment = () => {
    setNumber(number = number + 1)
  }
  const Decrement = () => {
    setNumber(number = number - 1)
  }
  const reset = () => {
    setNumber(number = 0)
  }
  return (
    <>

      <div className="Container" >
        <p className='number' >{number}</p>
        <button onClick={Increment} className="button">Increment</button>
        <button onClick={Decrement} className="button">Decrement</button>
        <button onClick={reset} className="button"> Reset</button>
      </div>
    </>
  )
}

export default MyComponent
