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
      <input onChange={handelName} value={name} /> <br /> <br />
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
        <option>Select A Method</option>
        <option>Visa</option>
        <option>Master Card</option>
        <option>Gift Card</option>
      </select>
      <p>Name: {name}</p>
      <p>Quantity:{quantity}</p>
      <p>Comment:{comment}</p>
      <p>Type:{dilivery}</p>
      <p>Payment:{payment}</p>
    </>
  );
}

export default Form;
