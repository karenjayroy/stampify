import React from 'react';


const AddStampBox = props => (
  <div id="AddPointsBox">
    <h2>Stamp the Customer!</h2>
    <h3>Enter Customer's Phone# to Stamp </h3>
    <input id="addPointsBoxPhone" type="tel" placeholder="Phone#"></input>
    <button onClick={(e) => {
      props.addStamp(props.store.storeId,
                          document.getElementById("addPointsBoxPhone").value)
    }}>+</button>
    <h3>{props.store.stampSuccess ? "Customer Got Stamped!" : "" }</h3>
  </div>
)

export default AddStampBox;
