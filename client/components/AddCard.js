import React from 'react'
import {Link} from 'react-router-dom';

// child component to userpage container
// creating a component that will have search bar to add new cards.
// stuck on the event listener.

const AddCard = props => (
    <div>
        <input id="addCard" type="text" placeholder="start a new stamp card"></input>
        <button onClick={e => props.addCard(props.user.userName, document.getElementById("addCard").value)}>Add Card</button>
    </div>
)

export default AddCard;
