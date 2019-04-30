import React from 'react';

// Box to enter a user's phone number and add a stamp to their code.

const AddStampBox = props => (
  <div id="AddPointsBox">
    <h2>Stamp the Customer!</h2>
    <h3>Enter Customer's Phone# to Stamp </h3>
    <div id="searchBar">
      <input id="addPointsBoxPhone" type="tel" placeholder="Phone#"></input>
      <button onClick={(e) => {
        props.addStamp(props.store.storeId,
                    document.getElementById("addPointsBoxPhone").value)
      }}>+</button>
    </div>
    <h3>{props.store.stampSuccess ? "Customer Got Stamped!" : "" }</h3>
  </div>
)

export default AddStampBox;
