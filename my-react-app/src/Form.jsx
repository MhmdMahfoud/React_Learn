import React, { useState } from "react";

function Form() {
  const [name, setName] = useState(); //react state declaratin
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState();
  const [dilivery, setDelivery] = useState();
  const [payment, setPayment] = useState();
  const handelName = (event) => {
    setName(event.target.value);
  };
  const handelQuantity = (event) => {
    setQuantity(event.target.value);
  };
  const handelComment = (event) => {
    setComment(event.target.value);
  };
  const handelDelivery = (event) => {
    setDelivery(event.target.value);
  };
  const handelPayment = (event) => {
    setPayment(event.target.value);
  };
  return (
    <>
      <div>Form</div>
      <br />
      <label >
      <input  placeholder="Name"onChange={handelName} value={name} /> <br /> <br />
      </label>
      
      <input onChange={handelQuantity} value={quantity} type="number" /> <br />
      <br />
      <textarea onChange={handelComment} value={comment} /> <br />
      <label>
        {" "}
        Delivery Type :
        <input
          value="PickUp"
          type="radio"
          onChange={handelDelivery}
          checked={dilivery === "Pickup"}
        />
        PickUp
      </label>
      <label>
        <input
          value="Delivery"
          type="radio"
          onChange={handelDelivery}
          checked={dilivery === "Delivery"}
        />
        Delivery
      </label>
      <br /> <br />
      <select onChange={handelPayment}>
        <option className="">Select A Method</option>
        <option>Visa</option>
        <option>Master Card</option>
        <option>Gift Card</option>
      </select>
      <p className='bg-amber-100 text-3xl  focus:outline-2    hover:bg-violet-600'>
  Name: {name}
</p>


      <p>Quantity:{quantity}</p>
      <p className='bg-amber-600 text-white text-shadow-lg text-5xl rounded-tl-3xl transition-property: all  duration-700 ' >Comment:{comment}</p>
      <p className='bg-linear-to-r from-cyan-500 to-blue-500 rounded-full'>Type:{dilivery}</p>
      <br></br>
      <p className='bg-amber-300 hover:bg-green-300 transition duration-700'>Payment:{payment}</p>
    </>
  );
}

export default Form;
